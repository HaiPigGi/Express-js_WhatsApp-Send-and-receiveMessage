# Express.js WhatsApp Send and Receive Messages With API Twillio

![image](https://github.com/HaiPigGi/Express-js_WhatsApp-Send-and-receiveMessage/assets/119752348/7e8286ce-8aa5-46e0-80f1-fb37f76f56c7)

![image](https://github.com/HaiPigGi/Express-js_WhatsApp-Send-and-receiveMessage/assets/119752348/19754538-13b1-4ad7-9019-2ece5537d920)

![image](https://github.com/HaiPigGi/Express-js_WhatsApp-Send-and-receiveMessage/assets/119752348/6081b7ce-3220-45fc-a776-f329ca78a065)



## Deskripsi
Proyek ini adalah contoh implementasi menggunakan Express.js dan API Twilio untuk mengirim dan menerima pesan WhatsApp secara otomatis melalui aplikasi node.js. Dalam proyek ini, kami menggunakan Twilio API untuk mengintegrasikan aplikasi dengan layanan WhatsApp, sehingga memungkinkan aplikasi untuk mengirim pesan WhatsApp ke nomor tertentu dan juga menerima pesan masuk.

## Prasyarat
Sebelum memulai, pastikan Anda telah memenuhi persyaratan berikut:

- Node.js terinstal di sistem Anda.
- Akun Twilio: Anda perlu mendaftar untuk mendapatkan akun Twilio dan mengambil SID Akun, SID Layanan, dan Token Otentikasi.
- Nomor WhatsApp yang sudah diverifikasi di akun Twilio Anda.

## Instalasi
1. Clone repositori ini atau unduh sebagai ZIP dan ekstrak di direktori proyek Anda.

   ```bash
   git clone https://github.com/username/Express-WhatsApp.git
Masuk ke direktori proyek:
```
cd Express-WhatsApp
```
Instal dependensi dengan menjalankan perintah berikut:
```
npm install
```
Konfigurasi lingkungan:

Buat file .env di direktori proyek dan atur variabel lingkungan berikut:

```
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```
Ganti your_twilio_account_sid, your_twilio_auth_token, dan your_twilio_phone_number dengan nilai-nilai akun Twilio Anda yang sudah Anda peroleh sebelumnya.

Jalankan aplikasi:
```
npm start
```
Aplikasi akan berjalan di http://localhost:3000.

Cara Penggunaan
Buka browser atau aplikasi API client seperti Postman.
Untuk mengirim pesan WhatsApp, buat permintaan POST ke endpoint /send dengan parameter phone (nomor penerima) dan message (pesan yang akan dikirim).
Untuk menerima pesan masuk, Anda perlu mengatur Webhook di panel Twilio untuk mengarahkan ke http://localhost:3000/receive.
Saat Anda mengirim pesan WhatsApp, respons akan dikembalikan dalam format JSON yang berisi status pengiriman dan detail pesan.
Contoh Permintaan POST untuk Mengirim Pesan WhatsApp:
```
POST /send
Content-Type: application/json

{
  "phone": "+6281234567890",
  "message": "Halo, ini pesan WhatsApp dari aplikasi Express.js!"
}

```
Contoh Respons JSON dari Pengiriman Pesan:
```
{
  "status": "success",
  "message": "Pesan berhasil dikirim.",
  "data": {
    "messageSid": "SMxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "dateCreated": "2023-07-22T12:34:56.000Z"
  }
}
```
Catatan
Pastikan aplikasi Anda di-host di server yang dapat diakses oleh Twilio untuk menerima pesan masuk.
Perhatikan bahwa ini hanya contoh implementasi sederhana. Dalam implementasi nyata, pastikan untuk memperhatikan keamanan dan validasi data masukan.

Lisensi
MIT License
```

Pastikan untuk menggantikan `your_image_url.com` dengan URL gambar yang relevan, dan juga sesuaikan bagian yang memerlukan penggantian nilai lingkungan seperti `your_twilio_account_sid`, `your_twilio_auth_token`, dan `your_twilio_phone_number`.
```
Contact Email

```
leonardobryan32@gmail.com
```
