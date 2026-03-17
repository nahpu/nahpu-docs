---
title: NAHPU Hari 1
sidebar:
    label: NAHPU Hari 1
    order: 2
---
NAHPU adalah aplikasi katalog berbasis proyek. Data dikelola dan diatur berdasarkan proyek. Setiap proyek dapat memiliki banyak orang, situs, narasi, acara pengumpulan, dan catatan spesimen. Aplikasi ini dirancang untuk digunakan di lapangan, tetapi juga dapat digunakan di laboratorium.

## Alur Kerja Khas

### 1. Buat proyek baru

Gunakan tombol `+` di sudut kanan bawah layar beranda. Nama proyek harus sepanjang 3 hingga 25 karakter.

Anda dapat menambahkan deskripsi proyek. Ini opsional, tetapi berguna untuk mengingat tujuan dan ruang lingkup proyek.

Kemudian, pilih format katalog utama. Aplikasi saat ini mendukung format katalog mamalia dan burung. Kami memisahkan kelelawar dari mamalia lain. Format kelelawar akan memiliki bidang lengan bawah dalam formulir pengukuran. Anda dapat mengubah format katalog nanti di pengaturan proyek. NAHPU memungkinkan katalogisasi semua kelompok takson yang didukung dalam proyek yang sama.

Setelah membuat proyek, aplikasi secara otomatis menghasilkan UUID proyek. Pengidentifikasi unik ini digunakan di seluruh basis data untuk membedakan catatan dari proyek yang berbeda. Kami menggunakan [UUID versi 4](https://en.wikipedia.org/wiki/Universally_unique_identifier). Hampir tidak mungkin dua UUID bertabrakan.

### 2. Tambahkan personel baru

Anda cukup menavigasi ke proyek dan menambahkan personel baru. Anda memerlukan setidaknya satu orang untuk mengambil peran sebagai kataloger perawatan spesimen. Anda dapat menambahkan lebih banyak orang dengan peran yang berbeda.

[Kataloger](./usages/personnel#cataloger) bertanggung jawab untuk membuat katalog spesimen. Di beberapa institusi, ini bisa disebut kolektor. Di aplikasi, kami menyebut kolektor, siapa pun yang mengumpulkan spesimen, baik mereka terlibat dalam pembuatan katalog aplikasi atau tidak. Inisial dan nomor bidang mereka akan digunakan untuk menghasilkan ID Bidang di halaman katalog spesimen. Nama mereka juga akan muncul setiap kali bidang meminta nama personel, seperti personel pengumpul dan preparator. Aplikasi tidak mengizinkan perubahan peran kataloger setelah dibuat.

[Hanya preparator](./usages/personnel#preparator-only) adalah orang yang membantu menyiapkan spesimen tetapi tidak terlibat dalam pengelolaan data. Nama mereka tidak akan muncul di bidang kataloger halaman spesimen tetapi di tempat lain, seperti di bidang `Preparator` dan `Personel pengumpul` di halaman spesimen.

Untuk personel lain yang tidak terlibat langsung dalam perawatan spesimen, pilih [Tidak Ada](./usages/personnel#none) sebagai peran mereka. Nama mereka hanya akan muncul di bidang `Personel pengumpul`.

### 3. Tambahkan takson baru

Anda dapat menambahkan takson secara manual menggunakan tombol tambah takson atau mengimpor dari file.

Format yang lebih disukai adalah `.xlsx`, `.csv`, dan `.tsv`. NAHPU akan melakukan upaya terbaik untuk mengurai jenis file lain.

Untuk file yang dibatasi yang dikenali, aplikasi memilih pembatas berdasarkan ekstensi (`.csv` = koma, `.tsv` = tab). Untuk ekstensi yang tidak dikenali, deteksi otomatis mencoba Excel, koma, tab, dan titik koma terlebih dahulu. Jika gagal, gunakan penggantian parser tingkat lanjut dan masukkan pembatas mentah khusus.

Dukungan terbaik adalah untuk `.xlsx`; format Excel yang lebih lama/lainnya mungkin gagal.

File impor Anda memerlukan semua kolom ini: `class`, `Order`, `family`, `genus`, `epithet`. Anda juga dapat menyertakan `scientific name`, `common name`, dan `notes`. Aplikasi akan secara otomatis mendeteksi alias header yang didukung (misalnya `taxonClass`, `taxonOrder`, `taxonFamily`, `specificEpithet`). Anda dapat secara manual memilih jenis kolom menggunakan menu tarik-turun jika aplikasi tidak secara otomatis menetapkan kolom yang tepat untuk setiap data. Kolom lain akan diabaikan.

Contoh tabel impor takson:

| class | Order | family | genus | epithet | scientific name | common name | notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mammalia | Rodentia | Muridae | Bunomys | coelestis | Bunomys coelestis | Tikus bukit surgawi | |
| Mammalia | Rodentia | Muridae | Bunomys | penitus | Bunomys penitus | Tikus bukit pedalaman | |

### 4. Buat situs

Untuk membuat situs baru, gunakan tombol `+` di sudut kanan atas situs. Isi setidaknya `ID Situs`. Aplikasi membatasi ID situs hingga 20 karakter. Anda akan merujuk ke ID ini di seluruh bidang catatan setiap kali meminta situs. Anda dapat membuatnya singkat tetapi deskriptif. Kami sering memberi label ID kota, kota kecil, atau desa apa adanya. Misalnya, kota Bogor akan menjadi BOGOR. Di sisi lain, jalur perangkap sering menggunakan ID dengan singkatan lokalitas dan `L` untuk menunjukkan jalur. Misalnya, jalur 1 di G. Gede-Pangrango akan menjadi `GP-L1`.

### 5. Tambahkan narasi

Untuk membuat narasi, gunakan tombol `+` di sudut kanan atas narasi. Pilih tanggal dan ID situs. Kemudian, tulis narasinya.

### 6. Tambahkan acara pengumpulan

Acara pengumpulan membantu Anda melacak upaya pengumpulan, personel, dan data cuaca untuk setiap acara. Catatan spesimen ditautkan ke acara, bukan ke situs. Dengan cara ini, Anda dapat memiliki beberapa acara pengumpulan di satu situs.

Untuk membuat acara pengumpulan, gunakan tombol `+` di sudut kanan atas acara pengumpulan. Pilih `ID situs`, `tanggal mulai`, `waktu mulai`, `tanggal berakhir`, dan `waktu berakhir`. Kemudian, isi sisa formulir.

Berbeda dengan situs yang hanya akan Anda buat setiap kali Anda pindah ke situs baru, acara pengumpulan dibuat untuk setiap upaya pengumpulan. Misalnya, saat mempelajari hewan pengerat nokturnal, kami sering memasang perangkap pada malam sebelumnya dan memeriksanya keesokan harinya. Kami akan membuat acara pengumpulan setelah kami mengumpulkan spesimen. Tanggal mulai akan menjadi sehari sebelumnya, dan tanggal berakhir akan menjadi hari ini.

Aplikasi menggabungkan ID situs dan tanggal mulai untuk membuat ID unik untuk setiap acara pengumpulan. Misalnya, `GP-L1-23 Maret 2023`. Anda akan menggunakan ID ini untuk merujuk ke acara pengumpulan dalam catatan spesimen. Dalam beberapa kasus tepi di mana Anda memiliki beberapa acara pengumpulan dalam satu hari di situs yang sama, Anda dapat menambahkan akhiran ke ID. Misalnya, `Jalur1-26 Maret 2023-1` dan `Jalur1-26 Maret 2023-2`.

### 7. Tambahkan catatan spesimen

Untuk membuat catatan spesimen, gunakan tombol `+` di sudut kanan atas catatan spesimen. Ikon catatan spesimen di bilah navigasi memberi tahu Anda tentang format aktif saat ini. Ini akan menghasilkan format yang cocok untuk katalog yang sedang aktif. Satu-satunya perbedaan antara format katalog yang berbeda adalah bidang pengukuran. Setelah membuat catatan spesimen baru, isi informasi yang relevan. Ulangi proses untuk spesimen berikutnya.

:::tip
NAHPU dirancang untuk memungkinkan kolektor mengumpulkan taksa yang berbeda. Untuk versi saat ini, Anda dapat memiliki burung, kelelawar, dan mamalia lain dalam proyek yang sama. Ubah format katalog di pengaturan saat Anda menambahkan kelompok takson berbeda yang berbeda dari format katalog yang sedang aktif. NAHPU akan menghasilkan formulir untuk kelompok takson tersebut saat Anda membuat catatan spesimen baru. Saat menelusuri catatan spesimen yang berbeda. Anda dapat memeriksa format katalog mana yang ada di halaman saat ini dengan melihat ikon di bagian spesimen. Katalog mamalia akan berupa `kaki`, dan burung akan berupa `kepala burung`.
:::

### 8. Mengekspor catatan

Untuk mengekspor catatan, buka menu dasbor (ditunjukkan oleh ikon hamburger/tiga garis horizontal di sudut kiri atas). Kami memiliki beberapa opsi ekspor:

- Buat laporan. Hasilkan daftar spesies, media, dan koordinat situs dalam format yang dibatasi (.csv atau .tsv).

- Bundel proyek. Hasilkan laporan yang tersedia (misalnya, jumlah spesies), narasi, situs, acara pengumpulan, dan catatan spesimen. Semuanya dalam format yang dipisahkan koma (.csv). Aplikasi akan menghasilkan file zip yang berisi semua file dan media. Anda dapat menggunakan opsi ini untuk mencadangkan data Anda.

- Ekspor catatan. Anda dapat memilih catatan mana yang akan diekspor. Ini mendukung ekspor dalam format yang dibatasi (.csv atau .tsv).

### 9. Mencadangkan basis data

Untuk mencadangkan basis data, buka menu di dasbor dan pilih cadangkan basis data. Secara default, basis data akan diekspor sebagai file sqlite3. Gunakan tombol sakelar `sertakan data proyek` untuk menambahkan data proyek ke cadangan. Aplikasi akan menghasilkan file zip yang berisi basis data dan media.

:::info
Mencadangkan basis data akan mencadangkan semua data dari semua proyek di aplikasi. Untuk rilis mendatang, NAHPU akan meningkatkan bundel sebagai metode pencadangan data.
:::
