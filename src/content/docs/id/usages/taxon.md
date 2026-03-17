---
sidebar_position: 3
title: Registri Takson
---

## Ringkasan

Anda dapat mendaftarkan takson baru secara manual atau dengan mengimpor file.

## Daftarkan takson baru

### Bidang yang wajib diisi

- **Kelas**: Kelas takson.
- **Ordo**: Ordo takson.
- **Famili**: Famili takson.
- **Genus**: Genus takson.
- **Epitet spesifik**: Epitet spesifik takson.

### Bidang opsional

- **Penulis**: Penulis takson dan tahun publikasi.
- **Nama umum**: Nama umum takson.
- **Kategori Daftar Merah IUCN**: Status Daftar Merah IUCN takson.
- **Status CITES**: Status CITES takson.
- **Status konservasi negara**: Status konservasi takson di negara tertentu.
- **Urutan penyortiran**: Urutan arbitrer untuk menyortir takson. Ini sebagian besar digunakan saat Anda mengekspor catatan. Misalnya, Anda dapat menggunakan urutan filogenetik.
- **Catatan**: Informasi tambahan apa pun tentang takson.

### Pendaftaran manual

1. Buka dasbor proyek.
2. Di panel takson, klik tombol `+ Tambah takson`.
3. Isi informasi takson.

### Impor dari file

1. Siapkan file impor Anda. Format yang lebih disukai adalah `.xlsx`, `.csv`, dan `.tsv`.
2. Buka dasbor proyek.
3. Di panel takson, klik tombol `Impor dari file`.
4. Gunakan tombol `Pilih file` untuk menambahkan file. Aplikasi akan secara otomatis memetakan kolom ke bidang yang benar.

Perilaku pembatas:

- `.csv` menggunakan koma.
- `.tsv` menggunakan tab.
- File Excel diurai sebagai spreadsheet.
- Untuk jenis file lain, NAHPU melakukan upaya penguraian terbaik.
- Jika ekstensi file tidak dikenali, deteksi otomatis pertama-tama mencoba Excel, koma, tab, dan titik koma.
- Jika deteksi otomatis masih gagal, masukkan pembatas mentah khusus di penggantian parser tingkat lanjut.

Kolom templat impor yang direkomendasikan:

- `class`, `Order`, `family`, `genus`, `epithet`, `scientific name`, `common name`
- Bidang impor yang wajib diisi adalah `class`, `Order`, `family`, `genus`, dan `epithet`.
- Pencocokan header fleksibel, jadi alias seperti `taxonClass`, `taxonOrder`, `taxonFamily`, dan `specificEpithet` juga diterima.

:::note
Dukungan terbaik adalah untuk `.xlsx`. Format Excel yang lebih lama/lainnya mungkin gagal. Jika perlu, simpan ulang sebagai `.xlsx`, `.csv`, atau `.tsv`.
:::

## Edit takson

1. Buka dasbor proyek.
2. Di panel takson di dalam takson terdaftar, klik tombol `Lihat semua`.
3. Klik ikon pensil untuk mengedit takson.