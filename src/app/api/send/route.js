import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email], // You can adjust the recipients here if needed
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      `,
    });
    console.log("Email sent successfully:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" });
  }
}
