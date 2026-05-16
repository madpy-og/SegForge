import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (userEmail, token) => {
  try {
    const verificationUrl = `${process.env.CLIENT_URL}/verify-email?token=${token}`;

    const { data, error } = await resend.emails.send({
      from: "SegForge <onboarding@resend.dev>",
      to: userEmail,
      subject: "Verifikasi Email Akun SegForge Anda",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #333; text-align: center;">Selamat Datang di SegForge!</h2>
          <p>Terima kasih telah mendaftar. Untuk menyelesaikan proses registrasi dan mengaktifkan akun Anda, silakan verifikasi email Anda dengan mengklik tautan di bawah ini:</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationUrl}" style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold;">Verifikasi Email Saya</a>
          </div>
          
          <p style="font-size: 14px; color: #555;">Atau Anda juga dapat menyalin dan menempelkan link berikut ini ke browser Anda:</p>
          <p style="font-size: 13px; color: #2563eb; word-break: break-all;">
            <a href="${verificationUrl}">${verificationUrl}</a>
          </p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0 20px;">
          <p style="font-size: 12px; color: #999; text-align: center;">Jika Anda tidak merasa mendaftar di SegForge, silakan abaikan email ini.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Terjadi kesalahan dari Resend API:", error);
      throw new Error("Gagal mengirim email verifikasi");
    }

    console.log("Email verifikasi berhasil dikirim ke: " + userEmail);
    return data;
  } catch (error) {
    console.error("Terjadi kesalahan saat mengirim email verifikasi:", error);
    throw new Error("Gagal mengirim email verifikasi");
  }
};
