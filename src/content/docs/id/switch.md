---
title: Beralih ke NAHPU
sidebar:
  label: Beralih ke NAHPU
  order: 4
---

NAHPU adalah katalog lapangan digital yang dibangun untuk koleksi sejarah alam.
Aplikasi ini menggantikan katalog lapangan kertas, baik yang berformat maupun
tidak, serta aplikasi formulir khusus tanpa kode seperti
[Claris FileMaker](https://www.claris.com/). Halaman ini membandingkan semuanya
dan menguraikan cara berpindah.

## NAHPU dibandingkan katalog lapangan kertas

| | Katalog lapangan kertas | NAHPU |
|---|---|---|
| Biaya | Pengeluaran berulang untuk kertas, tinta, binder, dan ruang penyimpanan | Gratis; berjalan di ponsel yang sudah Anda miliki. Tablet khusus berharga sekitar 200–500 USD dan bertahan sekitar lima tahun. Katalog tetap dapat dicetak bila salinan fisik diperlukan. |
| Akses | Membawa buku catatan pulang, memindai halaman, atau mengetik ulang ke lembar kerja | Dibuka di perangkat apa pun dan kolaborator menerima salinan yang persis sama. Pasang NAHPU di ponsel Anda lalu impor datanya; katalognya menyertai Anda sepanjang waktu. |
| Kualitas data | Galat entri sekunder saat digitalisasi | Daftar terkontrol dan pemeriksaan kolom wajib sebelum Anda meninggalkan lapangan |
| Keterkaitan | Lokasi yang sama ditulis ulang di setiap halaman | Catat satu lokasi sekali lalu tautkan ke banyak catatan, ditambah koordinat GPS, gambar, video, dan audio |
| Pencadangan | Memotret atau mengetik ulang setiap halaman | Awan, flash drive, atau perangkat lain. Banyak flash drive tahan air dan tahan guncangan |
| Keterlacakan data | Ditelusuri manual, tanpa penyaringan | Pencarian dan penyaringan, mengikuti [Darwin Core](https://dwc.tdwg.org/) dan [prinsip FAIR](https://www.go-fair.org/) |
| Statistik | Dihitung manual | Daftar statistik ringkas yang terus bertambah, mencakup ringkasan spesies, famili, dan preservasi per proyek dan lokasi, dapat diekspor ke lembar kerja. Metode pembelajaran mesin tingkat lanjut sedang dikembangkan untuk analisis morfologi langsung di perangkat. |

## NAHPU dibandingkan aplikasi formulir khusus

Berpindah dari aplikasi formulir adalah transisi yang lebih mudah: kebiasaan
Anda dalam entri data, pencadangan, dan ekspor sebagian besar tetap berlaku.

| | Aplikasi formulir khusus | NAHPU |
|---|---|---|
| Biaya | Pengembangan dan pemeliharaan, sering kali dengan langganan berbayar; lihat [halaman harga](https://www.claris.com/pricing/) FileMaker | Gratis |
| Standar | Beragam, bergantung pada implementasinya | Kepatuhan pada Darwin Core dan prinsip FAIR merupakan tujuan proyek ini |
| Keterbukaan | Bisa bersifat proprietary, dengan format proprietary | Sumber terbuka, pustaka terbuka, ekspor CSV dan JSON, serta basis data SQLite biasa yang dapat Anda buka sendiri |
| Perangkat | Dukungan perangkat bergantung pada implementasinya | Ponsel, tablet, laptop, dan desktop, dengan aksesibilitas Flutter dan Material Design |
| Statistik | Laporan ringkasan harus dirancang dan dipelihara sebagai bagian dari implementasinya | Tersedia bawaan: ringkasan spesies, famili, dan preservasi per proyek dan lokasi, dapat diekspor ke lembar kerja |

## Merencanakan transisi

Pilih pendekatannya:

- **Bertahap.** Gunakan NAHPU berdampingan dengan katalog lapangan kertas Anda.
- **Langsung.** Gunakan NAHPU sebagai satu-satunya katalog, dengan kertas dibawa
  sebagai cadangan.

Lalu selesaikan tiga persoalan praktis:

| Pertanyaan | Yang perlu dipertimbangkan |
|---|---|
| Perangkat apa? | Ponsel, tablet, laptop, dan desktop semuanya bisa dipakai. Mulailah dengan ponsel Anda; tablet dengan keyboard Bluetooth memberi pengalaman yang lebih baik bila anggaran memungkinkan. Lihat [Persyaratan Perangkat](../usages/devices). |
| Bagaimana kondisi lapangannya? | NAHPU dirancang untuk lokasi terpencil tanpa internet. Pertimbangkan ketahanan dan sumber daya: ponsel keluaran baru umumnya tahan air dan debu, tablet dan laptop biasanya perlu casing yang kuat, dan power bank 20.000–25.000 mAh mencukupi sekitar satu minggu untuk ponsel atau tablet. |
| Bagaimana Anda mencadangkan? | Flash drive, USB-C atau dengan adaptor, adalah pilihan dasar. Pencadangan silang ke perangkat rekan tim menambah redundansi. Layanan awan seperti Google Drive atau Dropbox bekerja bila ada koneksi, tetapi memerlukan aplikasi dan akunnya sendiri di perangkat. |
