import { Resend } from "resend";
import Welcome from "@/emails/Welcome";
const resend = new Resend("re_9fS8WCrc_6VsSovN7u1pRLNXXSboBhKuo");

export async function POST() {
  try {
    console.log("Start sending email...");
    /* تصل البيانات على spam الايميل الالكتروني */
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ayhammohammed723@gmail.com",
      subject: "hello world",
      react: Welcome(), // تأكد من أن Welcome() يتم استدعاؤه بشكل صحيح
    });

    console.log("Email sent successfully");

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error while sending email:", error);

    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
