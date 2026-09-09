---
title: Kebijakan Privasi
sidebar:
    label: Kebijakan Privasi
    order: 8
---

Terakhir diperbarui: 9 September 2026

## Ruang lingkup dan ringkasan

Kebijakan Privasi ini berlaku untuk aplikasi NAHPU pada platform yang didukung
dan untuk situs web NAHPU di [nahpu.app](https://nahpu.app/). Kebijakan ini
tidak berlaku untuk situs web, aplikasi, atau layanan pihak ketiga yang Anda
pilih untuk dibuka atau digunakan dari NAHPU.

NAHPU berfungsi tanpa akun. Proyek NAHPU tidak mengoperasikan layanan yang
menerima atau menyimpan catatan katalog Anda, dan aplikasi tidak memuat iklan.
Tim NAHPU tidak menggunakan catatan aplikasi Anda untuk analitik, periklanan,
pelacakan lintas aplikasi, atau pemasaran.

Catatan dan berkas Anda disimpan secara lokal kecuali Anda memilih untuk
mengekspor, mencadangkan, atau membagikannya. Beberapa fitur opsional
menghubungi layanan pihak ketiga. Koneksi tersebut dijelaskan di bawah ini.

## Informasi yang Anda berikan atau hasilkan

NAHPU dapat menyimpan informasi yang Anda masukkan, impor, atau buat, termasuk:

- informasi proyek, personel, dan takson, yang dapat mencakup nama, informasi
  kontak, afiliasi, pengenal ORCID, catatan, dan foto personel;
- lokasi, lokalitas presisi, koordinat, kegiatan pengoleksian, catatan lapangan,
  pengamatan lingkungan, serta catatan spesimen atau sampel;
- foto, video, rekaman audio, berkas terkait, dan metadatanya; dan
- pengaturan aplikasi, bidang khusus, templat, font, preset ekspor, dan lapisan
  peta lokal.

Anda menentukan informasi yang akan dicatat. Catatan sejarah alam dapat memuat
informasi sensitif, termasuk informasi kontak pribadi dan lokasi persis spesies
yang rentan. Tinjau catatan sebelum mengekspor atau membagikannya.

## Izin perangkat dan pemrosesan lokal

NAHPU meminta akses perangkat hanya ketika suatu fitur memerlukannya:

- **Lokasi:** NAHPU dapat membaca lokasi Anda saat ini ketika Anda meminta
  aplikasi menambahkan koordinat. Layanan lokasi perangkat menentukan posisi
  berdasarkan pengaturan sistem operasi dan akun Anda, lalu NAHPU menyimpan
  koordinat yang dikembalikan secara lokal. NAHPU tidak terus-menerus melacak
  lokasi Anda atau membuat riwayat lokasi di latar belakang.
- **Kamera dan foto:** NAHPU dapat mengambil foto atau video, mengimpor media,
  serta memindai kode QR atau kode batang. Akses kamera dimulai ketika Anda
  membuka salah satu fitur tersebut.
- **Mikrofon:** NAHPU dapat merekam audio dan trek audio video ketika Anda
  memulai perekaman.
- **Berkas dan penyimpanan:** NAHPU dapat mengimpor berkas serta menyimpan
  ekspor atau cadangan di lokasi yang Anda pilih.

Media yang diimpor disalin ke penyimpanan lokal aplikasi NAHPU. Berkas asli
dapat memuat metadata tertanam, termasuk tanggal, kamera, perangkat, atau
lokasi. NAHPU membaca metadata gambar tertentu seperti tanggal pengambilan,
kamera dan lensa, serta informasi pencahayaan; salinan berkas asli dapat tetap
menyimpan metadata tertanam lainnya.

Anda dapat menolak atau mencabut izin melalui pengaturan perangkat. Fitur
terkait mungkin tidak berfungsi tanpa izinnya.

## Penyimpanan lokal, pencadangan, dan retensi

NAHPU menyimpan basis data, media, berkas terkait, pengaturan, templat, font,
dan peta lokal dalam penyimpanan yang dikelola aplikasi pada perangkat Anda.
Sistem operasi melindungi penyimpanan ini dengan sandbox aplikasi dan kontrol
keamanan perangkat.

Sistem operasi atau penyedia berkas dapat menyertakan data atau berkas aplikasi
dalam cadangan perangkat atau cloud, bergantung pada pengaturan perangkat dan
akun Anda. NAHPU tidak mengendalikan layanan pencadangan tersebut.

Data tetap tersimpan sampai Anda menghapusnya di NAHPU, menghapus berkas
aplikasi terkait, atau mencopot aplikasi, sesuai dengan perilaku pencadangan dan
pemulihan sistem operasi Anda. Ekspor, cadangan, kode QR, serta berkas yang Anda
bagikan atau simpan di luar NAHPU tetap berada di lokasi tempat Anda
menyimpannya dan tidak ikut dihapus ketika Anda menghapus catatan asli atau
aplikasi.

## Peta daring

NAHPU menyediakan peta dasar Natural Earth luring dan pilihan untuk tidak
menampilkan peta dasar. Kedua pilihan itu tidak meminta gaya atau petak peta
kepada penyedia peta daring. Di macOS dan Windows, perangkat lunak yang
menggambar peta tetap diunduh dari jaringan pengiriman konten, sebagaimana
dijelaskan pada bagian berikutnya.

Jika Anda memilih peta dasar daring, NAHPU meminta gaya dan petak peta dari
[OpenFreeMap](https://openfreemap.org/). NAHPU tidak mengunggah catatan katalog
atau lapisan titik lokalnya ke OpenFreeMap. Permintaan peta mengungkap area
petak dan tingkat perbesaran yang diminta, dan informasi jaringan biasa dapat
terlihat oleh OpenFreeMap, penyedia hostingnya, dan perantara jaringan.

OpenFreeMap menyatakan bahwa mereka mengumpulkan informasi server anonim,
seperti jenis peramban atau klien, halaman perujuk, waktu, dan sistem operasi.
Mereka tidak mencatat alamat IP secara bawaan, tetapi dapat mencatatnya untuk
sementara hingga 30 hari selama insiden keamanan. OpenFreeMap dapat menggunakan
Cloudflare sebagai jaringan pengiriman konten. Lihat [Kebijakan Privasi
OpenFreeMap](https://openfreemap.org/privacy/) untuk praktik terbarunya.

Untuk menghindari permintaan kepada penyedia peta daring, pilih `Natural Earth
(Offline)` atau `None` sebagai peta dasar.

## Cara peta digambar di macOS dan Windows

Di Android dan iOS, NAHPU menggambar peta dengan perender yang tertanam di
dalam aplikasi. Di macOS dan Windows, peta digambar di dalam tampilan web
sistem, dan tampilan web itu mengunduh pustaka perender MapLibre GL, lembar
gayanya, serta pustaka pembaca petak pendukung dari jaringan pengiriman konten
[unpkg](https://unpkg.com/).

**Permintaan ini terjadi setiap kali peta digambar pada platform tersebut,
termasuk ketika peta dasar disetel ke `Natural Earth (Offline)` atau `None`**,
karena pustaka perender harus dimuat sebelum peta apa pun dapat muncul.
Tampilan web sistem operasi Anda dapat menyimpan berkas ini dalam singgahan,
sehingga permintaan tersebut tidak selalu berulang untuk setiap peta.

Permintaan ini mengungkap informasi jaringan biasa, termasuk alamat IP Anda,
kepada unpkg dan penyedia hostingnya. Permintaan ini tidak memuat catatan
katalog Anda, koordinat Anda, lapisan peta Anda, atau hal lain mengenai isi
peta. unpkg menyajikan berkas dari registri npm publik dan dapat menggunakan
Cloudflare sebagai jaringan pengiriman konten.

Jika pustaka perender tidak dapat dimuat, NAHPU beralih ke peta Natural Earth
bawaan, yang digambar sepenuhnya pada perangkat Anda. Karena itu, bekerja
luring di macOS atau Windows menghasilkan peta tanpa permintaan jaringan sama
sekali, setelah jeda singkat saat NAHPU memastikan pustaka tersebut tidak dapat
dijangkau. Di Linux, peta bawaan adalah satu-satunya perender dan tidak ada
pustaka perender yang diminta.

Selama peta tampil di layar pada macOS atau Windows, NAHPU juga membuka koneksi
pada antarmuka loopback perangkat Anda (`127.0.0.1`), pada porta yang
ditetapkan sistem operasi, agar aplikasi dan tampilan web dapat bertukar data
peta. Koneksi ini tetap berada di perangkat Anda, tidak dapat dijangkau dari
perangkat lain, dan tidak digunakan untuk mengirim apa pun ke luar perangkat.

## Pemindaian kode QR dan kode batang di Android

Di Android, NAHPU menggunakan Google ML Kit untuk mengenali kode QR dan kode
batang. Gambar kamera, isi kode, dan hasil pengenalan diproses pada perangkat
dan tidak dikirimkan ke Google oleh ML Kit.

Google menyatakan bahwa ML Kit dapat menghubungi servernya untuk mendapatkan
perbaikan, pembaruan model, dan informasi kompatibilitas perangkat keras. ML
Kit juga mengumpulkan informasi perangkat dan aplikasi secara terbatas,
pengenal per instalasi, konfigurasi API, metrik kinerja, serta metrik penggunaan
API untuk diagnostik dan analitik penggunaan. Google menyatakan bahwa
informasi ini dienkripsi saat transit dan tidak dibagikan kepada pihak ketiga.
Lihat [Persyaratan dan Privasi ML
Kit](https://developers.google.com/ml-kit/terms), [pengungkapan data ML Kit
Android](https://developers.google.com/ml-kit/android-data-disclosure), dan
[Kebijakan Privasi Google](https://policies.google.com/privacy?hl=id).

## Ekspor, berbagi, dan tautan eksternal

NAHPU mengekspor atau membagikan data hanya ketika Anda memulai tindakan
tersebut. Ketika Anda menggunakan lembar berbagi sistem, pemilih berkas, drive
cloud, surel, aplikasi perpesanan, atau tujuan lainnya, penyedia tersebut
menerima informasi yang Anda pilih dan menanganinya berdasarkan ketentuan
privasi mereka sendiri.

NAHPU juga memuat tautan yang dibuka oleh pengguna ke sumber seperti situs web
NAHPU, profil ORCID, dan Google Fonts. Membuka tautan akan memindahkan Anda ke
peramban atau aplikasi lain, sehingga praktik privasi layanan tersebut berlaku.
NAHPU tidak mengirimkan catatan katalog Anda saat membuka tautan tersebut.

## Situs web NAHPU

Situs web NAHPU di [nahpu.app](https://nahpu.app/), termasuk halaman ini dan
dokumentasinya, adalah situs statis yang diterbitkan melalui GitHub Pages.
Situs ini tidak memasang kuki pelacak, tidak memuat iklan, tidak menyematkan
konten pihak ketiga, dan tidak menjalankan skrip analitik. Kami tidak menerima
catatan tentang siapa yang mengunjunginya.

Sebagai penyedia hosting, GitHub menerima informasi jaringan biasa pada setiap
permintaan, termasuk alamat IP Anda, jenis peramban, dan halaman yang diminta,
lalu menggunakannya untuk menyajikan dan melindungi situs. Lihat [Pernyataan
Privasi
GitHub](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement)
untuk mengetahui praktiknya. Mengikuti tautan dari situs ini ke situs web lain
akan membawa Anda ke situs tersebut, sehingga praktik privasi situs itu yang
berlaku.

## Keamanan

NAHPU mengandalkan sandbox aplikasi, sistem izin, dan keamanan perangkat yang
disediakan sistem operasi Anda. Jaga keamanan perangkat, cadangan, dan berkas
ekspor Anda, terutama jika memuat informasi pribadi atau data lokalitas yang
sensitif. Tidak ada metode penyimpanan atau transmisi yang dapat dijamin
sepenuhnya aman.

## Pilihan dan kendali data Anda

Karena proyek NAHPU tidak menyimpan catatan katalog Anda pada servernya, Anda
mengendalikan catatan tersebut pada perangkat. Anda dapat:

- meninjau, mengedit, mengekspor, atau menghapus catatan dalam aplikasi;
- menghapus berkas yang dikelola aplikasi atau mencopot NAHPU;
- mencabut izin kamera, mikrofon, foto, berkas, atau lokasi melalui pengaturan
  perangkat;
- menggunakan peta dasar luring atau tanpa peta dasar; dan
- memilih apakah, di mana, dan kepada siapa ekspor serta cadangan dibagikan.

Untuk informasi yang disimpan oleh layanan pihak ketiga, hubungi penyedia
tersebut atau gunakan kontrol yang dijelaskan dalam kebijakan privasinya.

## Anak-anak

NAHPU adalah perkakas lapangan dan koleksi yang ditujukan untuk kerja
penelitian, pengajaran, dan kurasi, serta tidak ditujukan bagi anak-anak.
Aplikasi ini diperuntukkan bagi pengguna berusia 13 tahun ke atas, atau usia
yang lebih tinggi apabila negara Anda menetapkan batas usia persetujuan yang
lebih tinggi.

Kami tidak dengan sengaja mengumpulkan informasi pribadi anak-anak. Aplikasi
ini tidak memiliki akun, pendaftaran, maupun layanan yang dapat menerima
informasi semacam itu. Apabila seorang pelajar atau anak di bawah umur
menggunakan NAHPU dalam kelas, kursus lapangan, atau proyek yang diawasi, orang
dewasa atau lembaga yang mengawasi bertanggung jawab atas catatan yang
dimasukkan dan atas izin maupun persetujuan yang diperlukan proyek tersebut.

## Perubahan pada kebijakan ini

Kami dapat memperbarui Kebijakan Privasi ini ketika fitur NAHPU atau layanan
pihak ketiga berubah. Kebijakan yang diperbarui akan dipublikasikan pada halaman
ini dengan tanggal yang direvisi.

## Hubungi kami

Untuk pertanyaan atau saran tentang Kebijakan Privasi ini, hubungi
[support@nahpu.app](mailto:support@nahpu.app).
