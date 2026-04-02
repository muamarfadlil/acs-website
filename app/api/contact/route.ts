// app/api/contact/route.ts
// API Route untuk memproses kiriman form kontak
// Menggunakan Next.js App Router Route Handler

import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/contact
 * -----------------
 * Endpoint ini menerima data dari form kontak di halaman /contact
 * dan mengirimkan email notifikasi ke tim PT ACS.
 *
 * Untuk mengaktifkan pengiriman email nyata:
 * 1. Daftar di https://resend.com (ada paket gratis 100 email/hari)
 * 2. Dapatkan API key
 * 3. Tambahkan ke .env.local: RESEND_API_KEY=re_xxx
 * 4. Jalankan: npm install resend
 * 5. Uncomment kode Resend di bawah ini
 */

export async function POST(req: NextRequest) {
  try {
    // Ambil data dari body request (dikirim sebagai JSON dari form)
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Validasi sederhana di sisi server
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Semua field wajib (bertanda *) harus diisi." },
        { status: 400 }
      );
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format alamat email tidak valid." },
        { status: 400 }
      );
    }

    // ===================================================================
    // OPSI 1: Menggunakan Resend (direkomendasikan)
    // Cara setup:
    //   npm install resend
    //   Tambahkan RESEND_API_KEY ke .env.local
    // ===================================================================
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: "Website ACS <noreply@acs-indonesia.com>",
    //   to: [process.env.CONTACT_EMAIL_TO || "adiguna@acs-indonesia.com"],
    //   subject: `[Pesan Website] ${subject} — dari ${name}`,
    //   html: `
    //     <h2>Pesan Baru dari Website PT ACS</h2>
    //     <table>
    //       <tr><td><strong>Nama:</strong></td><td>${name}</td></tr>
    //       <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
    //       <tr><td><strong>Telepon:</strong></td><td>${phone || "-"}</td></tr>
    //       <tr><td><strong>Subjek:</strong></td><td>${subject}</td></tr>
    //     </table>
    //     <h3>Pesan:</h3>
    //     <p>${message.replace(/\n/g, "<br>")}</p>
    //   `,
    // });

    // ===================================================================
    // OPSI 2: Menggunakan Nodemailer + Gmail SMTP
    // Cara setup:
    //   npm install nodemailer @types/nodemailer
    //   Tambahkan ke .env.local:
    //     EMAIL_USER=email.gmail.anda@gmail.com
    //     EMAIL_PASS=xxxx xxxx xxxx xxxx (App Password Google)
    // ===================================================================
    //
    // import nodemailer from "nodemailer";
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });
    // await transporter.sendMail({
    //   from: `"Website ACS" <${process.env.EMAIL_USER}>`,
    //   to: "adiguna@acs-indonesia.com",
    //   subject: `[Website] ${subject} - ${name}`,
    //   text: `Nama: ${name}\nEmail: ${email}\nTelepon: ${phone}\n\n${message}`,
    // });

    // Untuk saat ini (sebelum setup email), hanya log ke console
    console.log("📧 Form kontak baru:", { name, email, phone, subject });
    console.log("💬 Pesan:", message);

    // Kembalikan respons sukses ke frontend
    return NextResponse.json(
      { success: true, message: "Pesan berhasil dikirim." },
      { status: 200 }
    );

  } catch (error) {
    // Log error ke console (akan muncul di Vercel logs)
    console.error("❌ Error API contact:", error);

    return NextResponse.json(
      { error: "Terjadi kesalahan internal. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
