#!/usr/bin/env bash
# NAHPU installer for Linux.
#
#   curl -fsSL https://nahpu.app/install.sh | bash
#
# Installs the latest NAHPU release from GitHub for x86_64 or arm64 (aarch64).
# Debian and Ubuntu get the .deb through apt, Fedora and RHEL get the signed
# .rpm through dnf, and every other distribution gets the portable archive in
# the user's home folder, which needs no root access. Without root or sudo
# rights, the script falls back to the portable archive on its own. When snapd
# is running and the Snap Store has NAHPU for this processor, the script asks
# whether to install the Snap or the package above.
#
# Options, passed after `bash -s --` when piping:
#
#   --portable         Install the portable archive even when a package fits.
#   --snap             Install the Snap Store package without asking.
#   --version <tag>    Install a specific release, such as v1.0.3.
#   --uninstall        Remove a portable install made by this script.
#   -h, --help         Show this help.
#
# For example: curl -fsSL https://nahpu.app/install.sh | bash -s -- --portable
#
# The same options can be set through NAHPU_INSTALL_METHOD=portable (or snap)
# and NAHPU_VERSION=<tag>.

# Everything runs from main, called on the last line, so a download cut short
# mid-pipe cannot execute half a script.

set -euo pipefail

readonly REPO="nahpu/nahpu"
# Set by check_platform from the machine architecture.
ASSET_PREFIX=""
ARCH=""
readonly SIGNING_KEY_URL="https://nahpu.app/nahpu.asc"
readonly SIGNING_KEY_FINGERPRINT="6D60D3B0D90358AC418A886E4A7A511472377563"
readonly ICON_URL="https://nahpu.app/nahpu.svg"
readonly APP_ID="com.hhandika.nahpu"
readonly MIN_GLIBC="2.35"

DATA_HOME="${XDG_DATA_HOME:-$HOME/.local/share}"
readonly PORTABLE_DIR="$DATA_HOME/nahpu"
readonly BIN_DIR="$HOME/.local/bin"
readonly DESKTOP_FILE="$DATA_HOME/applications/$APP_ID.desktop"
readonly ICON_FILE="$DATA_HOME/icons/hicolor/scalable/apps/$APP_ID.svg"

# Color only when writing to a terminal.
if [ -t 2 ]; then
  GREEN=$'\033[1;32m' YELLOW=$'\033[1;33m' RED=$'\033[1;31m' RESET=$'\033[0m'
else
  GREEN="" YELLOW="" RED="" RESET=""
fi

info() { printf '%s==>%s %s\n' "$GREEN" "$RESET" "$*" >&2; }
warn() { printf '%swarning:%s %s\n' "$YELLOW" "$RESET" "$*" >&2; }
die() {
  printf '%serror:%s %s\n' "$RED" "$RESET" "$*" >&2
  exit 1
}

usage() {
  cat <<'EOF'
NAHPU installer for Linux

Usage: install.sh [--portable | --snap] [--version <tag>] [--uninstall]

  --portable         Install the portable archive even when a package fits.
  --snap             Install the Snap Store package without asking.
  --version <tag>    Install a specific release, such as v1.0.3.
  --uninstall        Remove a portable install made by this script.
  -h, --help         Show this help.

Supports x86_64 and arm64 (aarch64). Without root or sudo rights, the
portable archive is installed in your home folder. When the Snap Store has
NAHPU for your system, the script asks whether to use the Snap instead.

When piping, pass options after `bash -s --`:

  curl -fsSL https://nahpu.app/install.sh | bash -s -- --portable
EOF
}

main() {
  local method="${NAHPU_INSTALL_METHOD:-auto}"
  local version="${NAHPU_VERSION:-latest}"

  while [ $# -gt 0 ]; do
    case "$1" in
      --portable) method="portable" ;;
      --snap) method="snap" ;;
      --version)
        [ $# -ge 2 ] || die "--version needs a release tag, such as v1.0.3"
        version="$2"
        shift
        ;;
      --uninstall)
        uninstall_portable
        return
        ;;
      -h | --help)
        usage
        return
        ;;
      *) die "unknown option: $1 (try --help)" ;;
    esac
    shift
  done

  check_platform
  need curl
  need tar

  local base_url
  if [ "$version" = "latest" ]; then
    base_url="https://github.com/$REPO/releases/latest/download"
  else
    base_url="https://github.com/$REPO/releases/download/$version"
  fi

  TMP_DIR="$(mktemp -d)"
  trap 'rm -rf "$TMP_DIR"' EXIT

  if [ "$method" = "snap" ]; then
    [ "$version" = "latest" ] ||
      die "the Snap always installs the latest release; drop --version or use --portable."
    snap_available ||
      die "the NAHPU Snap is not available here: snapd is not running, or the Snap Store has no build for $(uname -m)."
  fi

  if [ "$method" = "auto" ]; then
    method="$(detect_method)"
    # The Snap Store only serves the latest release.
    if [ "$version" = "latest" ] && snap_available; then
      method="$(choose_method "$method")"
    fi
    if [ "$method" != "portable" ] && ! can_root; then
      warn "no root access; installing the portable archive in your home folder instead."
      method="portable"
    fi
  fi

  case "$method" in
    deb) install_deb "$base_url" ;;
    rpm) install_rpm "$base_url" ;;
    snap) install_snap ;;
    portable) install_portable "$base_url" ;;
    *) die "unknown install method: $method (expected deb, rpm, snap, or portable)" ;;
  esac
}

check_platform() {
  [ "$(uname -s)" = "Linux" ] ||
    die "this installer is for Linux. See https://nahpu.app/en/installation/ for other platforms."

  case "$(uname -m)" in
    x86_64 | amd64) ARCH="x86_64" ;;
    aarch64 | arm64) ARCH="arm64" ;;
    *) die "NAHPU for Linux is built for x86_64 and arm64 (aarch64), not $(uname -m)." ;;
  esac
  ASSET_PREFIX="nahpu-Linux-$ARCH"

  local glibc
  glibc="$(getconf GNU_LIBC_VERSION 2>/dev/null | awk '{print $2}')" || true
  if [ -z "$glibc" ]; then
    die "glibc not found. NAHPU needs glibc $MIN_GLIBC or later; musl systems such as Alpine are not supported."
  fi
  if ! version_at_least "$glibc" "$MIN_GLIBC"; then
    die "glibc $glibc is too old. NAHPU needs glibc $MIN_GLIBC or later (Ubuntu 22.04, Debian 12, Fedora 36, RHEL 9, or newer)."
  fi
}

# True when dotted version $1 is greater than or equal to $2.
version_at_least() {
  [ "$(printf '%s\n%s\n' "$2" "$1" | sort -V | head -n 1)" = "$2" ]
}

detect_method() {
  if command -v apt-get >/dev/null 2>&1 && command -v dpkg >/dev/null 2>&1; then
    echo deb
  elif [ "$ARCH" = "x86_64" ] &&
    { command -v dnf >/dev/null 2>&1 || command -v yum >/dev/null 2>&1; }; then
    # The arm64 .rpm is not signed yet, so arm64 RHEL-family systems take the
    # portable archive.
    echo rpm
  else
    echo portable
  fi
}

# True when snapd is running and the Snap Store has NAHPU for this processor.
snap_available() {
  command -v snap >/dev/null 2>&1 || return 1
  snap info nahpu >/dev/null 2>&1
}

describe_method() {
  case "$1" in
    deb) echo "the .deb package through apt" ;;
    rpm) echo "the signed .rpm package through dnf" ;;
    portable) echo "the portable archive in your home folder (no administrator access needed)" ;;
  esac
}

# Ask whether to install the Snap or the native format. The question is read
# from the terminal, so it works when the script is piped from curl. Without a
# terminal, keep the native format.
choose_method() {
  local native="$1" answer
  if ! { : </dev/tty; } 2>/dev/null; then
    info "The Snap Store also has NAHPU. Re-run with --snap to install the Snap instead."
    echo "$native"
    return
  fi
  {
    echo "NAHPU can be installed two ways on this system:"
    echo "  1) $(describe_method "$native")"
    echo "  2) the Snap Store package, which updates itself in the background"
    printf 'Choose 1 or 2 [1]: '
  } >/dev/tty
  read -r answer </dev/tty || answer=""
  case "$answer" in
    2) echo snap ;;
    "" | 1) echo "$native" ;;
    *)
      warn "unrecognized choice '$answer'; using option 1."
      echo "$native"
      ;;
  esac
}

need() {
  command -v "$1" >/dev/null 2>&1 || die "$1 is required but not installed."
}

# True when the user is root or can use sudo. sudo -v asks for the password on
# the terminal, so it works when the script is piped from curl.
can_root() {
  [ "$(id -u)" -eq 0 ] && return 0
  command -v sudo >/dev/null 2>&1 || return 1
  info "Checking for sudo access to install the system package"
  sudo -v 2>/dev/null
}

# Run a command as root, through sudo when the user is not root already.
as_root() {
  if [ "$(id -u)" -eq 0 ]; then
    "$@"
  elif command -v sudo >/dev/null 2>&1; then
    sudo "$@"
  else
    die "root access is needed to install the package. Re-run as root, or use --portable."
  fi
}

download() {
  local url="$1" dest="$2"
  info "Downloading $url"
  curl -fL --progress-bar --retry 3 -o "$dest" "$url" ||
    die "download failed: $url"
}

install_deb() {
  local pkg="$TMP_DIR/$ASSET_PREFIX.deb"
  download "$1/$ASSET_PREFIX.deb" "$pkg"
  # apt reads the file as the _apt user, which cannot enter a private mktemp
  # directory.
  chmod 755 "$TMP_DIR"
  chmod 644 "$pkg"
  info "Installing with apt (this pulls in ffmpeg and pulseaudio-utils for audio recording)"
  as_root apt-get install -y "$pkg"
  finish "nahpu"
}

install_snap() {
  info "Installing from the Snap Store"
  as_root snap install nahpu
  finish "nahpu"
}

install_rpm() {
  local pkg="$TMP_DIR/$ASSET_PREFIX.rpm"
  local manager="dnf"
  command -v dnf >/dev/null 2>&1 || manager="yum"
  need rpm

  import_signing_key
  download "$1/$ASSET_PREFIX.rpm" "$pkg"

  info "Checking the package signature"
  local check
  check="$(rpm -K "$pkg" 2>&1)" || die "signature check failed: $check"
  case "$check" in
    *"signatures OK"* | *"pgp"*"OK"*) ;;
    *) die "the package is not signed by a trusted key: $check" ;;
  esac

  info "Installing with $manager"
  as_root "$manager" install -y "$pkg"
  finish "nahpu"
}

# Import the NAHPU RPM signing key once, after confirming its fingerprint.
import_signing_key() {
  local short_id
  short_id="$(printf '%s' "${SIGNING_KEY_FINGERPRINT: -8}" | tr 'A-F' 'a-f')"
  if rpm -q "gpg-pubkey-$short_id" >/dev/null 2>&1; then
    return
  fi

  local key="$TMP_DIR/nahpu.asc"
  download "$SIGNING_KEY_URL" "$key"
  if command -v gpg >/dev/null 2>&1; then
    local fingerprint
    fingerprint="$(gpg --with-colons --show-keys "$key" 2>/dev/null |
      awk -F: '$1 == "fpr" { print $10; exit }')"
    [ "$fingerprint" = "$SIGNING_KEY_FINGERPRINT" ] ||
      die "the signing key fingerprint does not match ($fingerprint)."
  else
    warn "gpg not found; importing the key without checking its fingerprint."
  fi
  info "Importing the NAHPU package signing key"
  as_root rpm --import "$key"
}

install_portable() {
  local archive="$TMP_DIR/$ASSET_PREFIX.tar.gz"
  download "$1/$ASSET_PREFIX.tar.gz" "$archive"

  info "Extracting to $PORTABLE_DIR"
  tar -xzf "$archive" -C "$TMP_DIR"
  [ -x "$TMP_DIR/nahpu/nahpu" ] || die "the archive does not contain the nahpu executable."

  # Replace the previous version as a whole: the runner finds lib/ and data/
  # next to itself, so stale files from an older bundle must not linger.
  mkdir -p "$(dirname "$PORTABLE_DIR")" "$BIN_DIR"
  rm -rf "$PORTABLE_DIR"
  mv "$TMP_DIR/nahpu" "$PORTABLE_DIR"

  # A symlink, not a copy: the runner resolves its bundle through /proc/self/exe.
  ln -sfn "$PORTABLE_DIR/nahpu" "$BIN_DIR/nahpu"

  install_launcher
  check_portable_libraries
  finish "$BIN_DIR/nahpu"

  case ":$PATH:" in
    *":$BIN_DIR:"*) ;;
    *) warn "$BIN_DIR is not on your PATH. Add it to run nahpu from a terminal." ;;
  esac
  echo "NAHPU needs the GTK 3 runtime, plus ffmpeg and the PulseAudio utilities for audio recording."
  echo "Install them with your package manager if they are missing."
}

install_launcher() {
  mkdir -p "$(dirname "$DESKTOP_FILE")" "$(dirname "$ICON_FILE")"
  curl -fsSL -o "$ICON_FILE" "$ICON_URL" 2>/dev/null ||
    warn "could not download the icon; the launcher will use a generic one."

  cat >"$DESKTOP_FILE" <<EOF
[Desktop Entry]
Type=Application
Version=1.0
Name=NAHPU
GenericName=Specimen Catalog
Comment=A digital cataloging app for natural history specimens
Exec=$PORTABLE_DIR/nahpu
Icon=$APP_ID
Terminal=false
StartupNotify=true
StartupWMClass=$APP_ID
Categories=Science;Biology;
Keywords=specimen;museum;collection;natural history;catalog;biodiversity;taxonomy;field;
EOF

  if command -v update-desktop-database >/dev/null 2>&1; then
    update-desktop-database -q "$(dirname "$DESKTOP_FILE")" || true
  fi
}

check_portable_libraries() {
  command -v ldd >/dev/null 2>&1 || return 0
  local missing
  missing="$(ldd "$PORTABLE_DIR/nahpu" 2>/dev/null | grep "not found" || true)"
  if [ -n "$missing" ]; then
    warn "NAHPU cannot load these libraries yet. Install the packages that provide them:"
    printf '%s\n' "$missing" >&2
  fi
}

uninstall_portable() {
  info "Removing the portable NAHPU install"
  rm -rf "$PORTABLE_DIR"
  rm -f "$DESKTOP_FILE" "$ICON_FILE"
  if [ -L "$BIN_DIR/nahpu" ]; then
    rm -f "$BIN_DIR/nahpu"
  fi
  echo "Your projects and settings are kept. Packages installed with apt, dnf, or snap are removed"
  echo "with 'sudo apt remove nahpu', 'sudo dnf remove nahpu', or 'sudo snap remove nahpu'."
}

finish() {
  info "NAHPU is installed."
  echo "Open it from your application menu, or run '$1' in a terminal."
}

main "$@"
