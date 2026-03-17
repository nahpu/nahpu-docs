---
sidebar_position: 3
title: Personel
---

## Menambahkan personel baru

Gunakan tombol `Tambah personel baru` untuk menambahkan personel baru. Anda akan diminta untuk memasukkan informasi berikut di bawah ini. Aplikasi secara default hanya menampilkan informasi penting. Klik tombol `Tampilkan lebih banyak` untuk menampilkan semua bidang.

- **Nama (wajib)** - Nama personel.
- **Email** - Email personel.
- **Telepon** - Nomor telepon personel.
- **Afiliasi** - Institusi personel.
- **Peran perawatan spesimen (wajib)** - Peran personel dalam merawat spesimen. Lihat [Terminologi](./personnel#terminology) untuk informasi lebih lanjut.
- **Inisial lapangan (wajib jika peran perawatan spesimen adalah `Kataloger`)** - Inisial personel.
- **Nomor lapangan (wajib jika peran perawatan spesimen adalah `Kataloger`)** - Nomor lapangan personel. Inisial dan nomor akan digunakan untuk ID lapangan. Aplikasi secara otomatis menambah nomor setiap kali Anda membuat spesimen baru. Misalnya, jika inisial lapangan adalah `ABC` dan nomor lapangan adalah `1`, spesimen pertama akan memiliki ID lapangan `ABC1`. Spesimen kedua akan memiliki ID lapangan `ABC2`, dan seterusnya.
- **Catatan** - Catatan apa pun tentang personel.

> **Penting:** Beberapa institusi mungkin menggunakan kombinasi ID proyek dan nomor untuk ID lapangan. Gunakan ID ini sebagai inisial, alih-alih menempatkan inisial sebenarnya dari orang tersebut. Misalnya, `ABC-1`. Dalam hal ini, Anda dapat memasukkan `ABC-` sebagai inisial lapangan dan `1` sebagai nomor lapangan.

## Mengedit informasi orang

Di dasbor, klik/ketuk tombol menu (ikon tiga titik) untuk nama orang yang informasinya ingin Anda edit, lalu pilih edit. Anda akan dibawa ke halaman personel tempat Anda dapat mengedit informasi.

## Terminologi

### Kataloger

Seseorang yang membuat dan mengedit catatan di katalog. Ini termasuk membuat catatan baru, mengedit catatan yang ada, dan menghapus catatan. Peran `kataloger` memerlukan inisial lapangan dan nomor lapangan mereka.

### Hanya preparator

Seseorang yang membantu menyiapkan spesimen tetapi tidak membuat atau mengedit catatan di katalog.

### Tidak ada

Di bidang peran perawatan spesimen, ini berarti orang tersebut tidak memiliki peran dalam merawat spesimen. Ini bisa menjadi pemandu lapangan, pengemudi, atau siapa pun yang mendukung pengumpulan data tetapi tidak memiliki peran dalam merawat spesimen.
