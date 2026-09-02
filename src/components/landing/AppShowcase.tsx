import type { VNode } from "preact";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";

type Picture = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
};

export type Variant = Picture & {
  id: string;
  label: string;
  title: string;
  description: string;
};

export type Shot = Picture & {
  id: string;
  label: string;
  title: string;
  description: string;
  meta: string;
  /// A second device shown alongside the main screenshot.
  pair?: Picture;
  /// "large" gives the companion screen more room than the default.
  pairSize?: "large";
  /// Lays the companion over the lead, anchored to a named spot on the screen.
  pairAnchor?: "coordinates" | "media" | "stats" | "projects";
  /// Screens within this one, switched by the reader.
  variants?: Variant[];
};

type Props = {
  shots: Shot[];
};

const ROTATION_MS = 8000;

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

const linkClasses =
  "text-silver-tree-800 underline underline-offset-2 decoration-silver-tree-400 hover:text-silver-tree-900 dark:text-silver-tree-100 dark:hover:text-silver-tree-50";

/// Descriptions are plain prose, with Markdown-style links as the one
/// exception, so a claim can carry its source.
function withLinks(text: string): (string | VNode)[] {
  const nodes: (string | VNode)[] = [];
  let cursor = 0;

  for (const match of text.matchAll(LINK_PATTERN)) {
    const start = match.index ?? 0;
    if (start > cursor) nodes.push(text.slice(cursor, start));
    nodes.push(
      <a
        key={`${match[2]}-${start}`}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        class={linkClasses}
      >
        {match[1]}
      </a>,
    );
    cursor = start + match[0].length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}

/** Rotating tour of NAHPU screens, driven by a tab list. */
export default function AppShowcase({ shots }: Props) {
  const [active, setActive] = useState(0);
  const [variant, setVariant] = useState(0);
  const [paused, setPaused] = useState(false);
  const [engaged, setEngaged] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectShot = useCallback((index: number) => {
    setActive(index);
    setVariant(0);
  }, []);

  useEffect(() => {
    if (paused || engaged || reducedMotion || shots.length < 2) return;
    const timer = window.setTimeout(
      () => setActive((index) => (index + 1) % shots.length),
      ROTATION_MS,
    );
    return () => window.clearTimeout(timer);
  }, [active, engaged, paused, reducedMotion, shots.length]);

  const focusTab = useCallback(
    (index: number) => {
      selectShot(index);
      tabRefs.current[index]?.focus();
    },
    [selectShot],
  );

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        focusTab((active + 1) % shots.length);
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        focusTab((active - 1 + shots.length) % shots.length);
      } else if (event.key === "Home") {
        event.preventDefault();
        focusTab(0);
      } else if (event.key === "End") {
        event.preventDefault();
        focusTab(shots.length - 1);
      }
    },
    [active, focusTab, shots.length],
  );

  const current = shots[active];
  const currentVariant = current.variants?.[variant];

  return (
    <div
      class="grid grid-cols-1 gap-6 lg:grid-cols-[19rem_1fr] lg:gap-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusIn={() => setPaused(true)}
      onFocusOut={() => setPaused(false)}
    >
      <div
        role="tablist"
        aria-label="NAHPU screens"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        class="flex snap-x gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
      >
        {shots.map((shot, index) => {
          const isActive = index === active;
          return (
            <button
              key={shot.id}
              ref={(node) => (tabRefs.current[index] = node)}
              role="tab"
              type="button"
              id={`shot-tab-${shot.id}`}
              aria-selected={isActive}
              aria-controls={`shot-panel-${shot.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => {
                selectShot(index);
                setEngaged(true);
              }}
              class={`group relative shrink-0 snap-start overflow-hidden rounded-xl border px-4 py-3 text-left transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-silver-tree-500 lg:w-full lg:shrink ${
                isActive
                  ? "border-silver-tree-500 bg-silver-tree-50 dark:border-silver-tree-500 dark:bg-silver-tree-900"
                  : "border-silver-tree-300/60 bg-transparent hover:border-silver-tree-400 dark:border-silver-tree-700/60"
              }`}
            >
              <span class="flex items-center gap-3">
                <span
                  class={`font-mono text-xs tabular-nums transition-colors ${
                    isActive
                      ? "text-golden-grass-600 dark:text-golden-grass-300"
                      : "text-silver-tree-500"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span class="flex flex-col">
                  <span
                    class={`text-sm font-semibold whitespace-nowrap lg:whitespace-normal ${
                      isActive
                        ? "text-silver-tree-900 dark:text-silver-tree-50"
                        : "text-silver-tree-700 dark:text-silver-tree-300"
                    }`}
                  >
                    {shot.label}
                  </span>
                  <span class="hidden text-xs text-silver-tree-600 lg:block dark:text-silver-tree-400">
                    {shot.meta}
                  </span>
                </span>
              </span>

              <span
                aria-hidden="true"
                class="absolute inset-x-0 bottom-0 h-0.5 bg-silver-tree-200/60 dark:bg-silver-tree-800"
              >
                <span
                  key={`${shot.id}-${active}-${paused}`}
                  class="block h-full origin-left bg-gradient-to-r from-silver-tree-500 to-golden-grass-400"
                  style={
                    isActive
                      ? {
                          animation:
                            reducedMotion || paused || engaged
                              ? "none"
                              : `nh-progress ${ROTATION_MS}ms linear forwards`,
                          width:
                            reducedMotion || paused || engaged
                              ? "100%"
                              : undefined,
                        }
                      : { width: 0 }
                  }
                />
              </span>
            </button>
          );
        })}
      </div>

      <div class="flex flex-col gap-4">
        <div class="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-silver-tree-300/70 bg-gradient-to-br from-silver-tree-200/80 via-silver-tree-100/60 to-golden-grass-100/40 p-3 sm:p-6 dark:border-silver-tree-700/70 dark:from-silver-tree-900 dark:via-silver-tree-950 dark:to-silver-tree-900">
          {shots.map((shot, index) => (
            <div
              key={shot.id}
              role="tabpanel"
              id={`shot-panel-${shot.id}`}
              aria-labelledby={`shot-tab-${shot.id}`}
              aria-hidden={index !== active}
              class={`absolute inset-3 flex justify-center transition-all duration-700 ease-out sm:inset-6 ${
                shot.pair && !shot.pairAnchor ? "items-end" : "items-center"
              } ${
                index === active
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-[0.97] opacity-0"
              }`}
            >
              {shot.variants ? (
                shot.variants.map((option, optionIndex) => (
                  <img
                    key={option.id}
                    src={option.src}
                    srcSet={option.srcSet}
                    sizes="(min-width: 1024px) 60vw, 92vw"
                    width={option.width}
                    height={option.height}
                    alt={option.title}
                    loading="lazy"
                    decoding="async"
                    class={`nh-shot absolute transition-opacity duration-500 ease-out ${
                      optionIndex === variant ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))
              ) : (
                <>
                  <img
                    src={shot.src}
                    srcSet={shot.srcSet}
                    sizes="(min-width: 1024px) 60vw, 92vw"
                    width={shot.width}
                    height={shot.height}
                    alt={shot.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    class={
                      shot.pairAnchor
                        ? "nh-shot nh-shot-lead-anchor"
                        : shot.pair
                          ? `nh-shot ${
                              shot.width > shot.height
                                ? "nh-shot-lead-wide"
                                : "nh-shot-lead"
                            }`
                          : "nh-shot"
                    }
                  />
                  {shot.pair && (
                    <img
                      src={shot.pair.src}
                      srcSet={shot.pair.srcSet}
                      sizes="(min-width: 1024px) 18vw, 28vw"
                      width={shot.pair.width}
                      height={shot.pair.height}
                      alt=""
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      class={
                        shot.pairAnchor
                          ? `nh-shot nh-shot-overlay nh-overlay-${shot.pairAnchor}`
                          : `nh-shot nh-shot-pair ${
                              shot.width > shot.height
                                ? shot.pairSize === "large"
                                  ? "nh-shot-pair-lg"
                                  : "nh-shot-pair-small"
                                : ""
                            }`
                      }
                    />
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        <div class="min-h-[5.5rem]">
          <h3 class="text-lg font-semibold text-silver-tree-900 dark:text-silver-tree-50">
            {current.title}
          </h3>
          <p class="mt-1 max-w-2xl text-sm leading-relaxed text-silver-tree-700 dark:text-silver-tree-300">
            {withLinks(current.description)}
          </p>

          {current.variants && (
            <div
              role="group"
              aria-label={`${current.label} views`}
              class="mt-4 flex flex-wrap gap-2"
            >
              {current.variants.map((option, optionIndex) => {
                const isCurrent = optionIndex === variant;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={isCurrent}
                    onClick={() => {
                      setVariant(optionIndex);
                      setEngaged(true);
                    }}
                    class={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-silver-tree-600 focus-visible:ring-offset-2 focus-visible:ring-offset-silver-tree-100 dark:focus-visible:ring-silver-tree-300 dark:focus-visible:ring-offset-silver-tree-900 ${
                      isCurrent
                        ? "border-transparent bg-silver-tree-800 text-silver-tree-50 dark:bg-silver-tree-200 dark:text-silver-tree-950"
                        : "border-silver-tree-500/70 bg-silver-tree-50/80 text-silver-tree-800 hover:border-silver-tree-700 hover:bg-silver-tree-100 dark:border-silver-tree-500/60 dark:bg-silver-tree-950/50 dark:text-silver-tree-100 dark:hover:border-silver-tree-300 dark:hover:bg-silver-tree-900"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          )}

          {currentVariant && (
            <p
              aria-live="polite"
              class="mt-3 max-w-2xl text-sm leading-relaxed text-silver-tree-700 dark:text-silver-tree-300"
            >
              <span class="font-semibold text-silver-tree-900 dark:text-silver-tree-50">
                {currentVariant.title}.
              </span>{" "}
              {withLinks(currentVariant.description)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
