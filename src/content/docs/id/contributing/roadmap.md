---
sidebar_position: 2
title: "Peta Jalan Pengembangan"
---

## Ringkasan

Pengembangan NAHPU berpusat pada tiga bidang utama: **efisiensi**, **reproduktivitas**, dan **inklusivitas**. Mengambil inspirasi dari [Peta Jalan Flutter](https://github.com/flutter/flutter/wiki/Roadmap), kami telah menyusun peta jalan untuk mengarahkan pengembangan NAHPU. Peta jalan ini menggambarkan fitur-fitur utama dan peningkatan yang ingin kami masukkan dalam rilis mendatang. Ini berfungsi sebagai media untuk menjaga transparansi dengan komunitas dan untuk mengumpulkan umpan balik tentang arah proyek. Seperti halnya sebagian besar proyek pengembangan perangkat lunak, peta jalan kami fleksibel dan dapat dimodifikasi berdasarkan umpan balik dan persyaratan yang muncul. Kami dengan sepenuh hati menyambut kontribusi dari komunitas untuk membantu kami dalam mewujudkan tujuan kami.

## Fokus Pengembangan untuk Tahun 2024

### Efisiensi

Kami sedang dalam proses memasukkan lebih banyak kode Rust ke dalam basis kode NAHPU. Integrasi Rust dengan Flutter tidak hanya meningkatkan kinerja tetapi juga memberikan pengalaman pengguna yang lebih kuat. Selain itu, Rust memiliki pustaka GIS berkualitas tinggi, yang akan membantu kami dalam meningkatkan kemampuan pemrosesan data spasial NAHPU.

Selain itu, kami akan berusaha untuk meningkatkan kualitas dan kinerja kode dengan merefaktor basis kode yang ada dan mengoptimalkan aplikasi untuk kecepatan dan penggunaan memori. Sebagian besar kode NAHPU memerlukan dokumentasi, dan kami akan fokus untuk meningkatkan dokumentasi ini agar lebih ramah pengembang.

### Reproduktivitas

Tujuan utama kami adalah implementasi penuh standar [Darwin Core](https://dwc.tdwg.org/) dan [prinsip-prinsip FAIR](https://www.go-fair.org/fair-principles/). Ini akan meningkatkan interoperabilitas dan penggunaan kembali data NAHPU. Kami juga bertujuan untuk meningkatkan kemampuan impor dan ekspor data NAHPU, sehingga memudahkan pengguna untuk berbagi dan berkolaborasi pada data aplikasi. Pemindaian QR/Barcode telah diimplementasikan di NAHPU, dan kami berencana untuk meningkatkan kemampuan pemindaian ini. Tujuan utamanya adalah menyederhanakan proses inventaris spesimen dengan memungkinkan pengguna memindai spesimen dan secara otomatis mengisi inventaris pasca-lapangan. Pendekatan ini akan diintegrasikan dengan pengembangan kemampuan pencetakan untuk label spesimen.

### Inklusivitas

Tujuan utamanya adalah untuk memperluas lokalisasi aplikasi dengan memasukkan lebih banyak bahasa, sehingga membuatnya ramah pengguna bagi penutur non-Inggris. Selain itu, kami meningkatkan pengalaman bagi pengguna penyandang disabilitas untuk membuat NAHPU lebih mudah diakses dan inklusif. Versi saat ini memungkinkan pengguna untuk menggunakan input suara melalui fitur aksesibilitas sistem operasi. Kami berencana untuk mengimplementasikan fitur tambahan, termasuk pembaca layar.
