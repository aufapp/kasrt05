# Company Profile PWA

Template website company profile satu halaman, responsif, dan dapat dipasang sebagai PWA.

## Cara menjalankan
- Untuk melihat cepat: buka `index.html` di browser (fitur PWA tidak aktif penuh).
- Untuk menguji PWA: jalankan server lokal dari folder ini, misalnya `python -m http.server 8000`, lalu buka `http://localhost:8000`.
- Untuk dipasang oleh pengunjung: unggah seluruh isi folder ke hosting yang menggunakan HTTPS. PWA membutuhkan HTTPS (localhost untuk pengembangan).
- Di Chrome/Edge, gunakan tombol **Install aplikasi** jika muncul, atau menu browser → Install app / Add to Home Screen.

## Bagian yang perlu diganti
Cari dan ganti `Nama Perusahaan`, teks profil, angka statistik, layanan, alamat, email, telepon, dan logo inisial `NP` pada `index.html`. Sesuaikan warna dan identitas visual di `styles.css`. Ganti ikon di folder `icons` dengan logo perusahaan berbentuk PNG 192x192 dan 512x512.

## Link eksternal
Link eksternal yang ditambahkan menggunakan `target="_blank"` dan `rel="noopener noreferrer"` sehingga dibuka di tab baru; halaman profil tetap terbuka pada tab semula. Navigasi bagian halaman tetap memakai anchor internal.

## Catatan cache
Service worker menyimpan aset inti agar halaman dapat dibuka kembali saat offline. Setelah mengubah file, naikkan versi `CACHE_NAME` di `sw.js` (mis. `company-profile-v2`) agar cache diperbarui.
