import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import {
  generateEmailTemplateForClient,
  generateEmailTemplateForUser,
} from "@/utils/EmailTemplate";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req) {
  const { name, email, jobTitle, companyName, contactNumber } =
    await req.json();
  const title = "contact";
  const messageForClient = `
  <p style="font-size: 16px; color: #555;"><strong>Valuable customer insights derived from contact form:</strong></p>
            <p style="font-size: 16px; color: #555;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px; color: #555;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px; color: #555;"><strong>Email:</strong> ${jobTitle}</p>
            <p style="font-size: 16px; color: #555;"><strong>Email:</strong> ${companyName}</p>
            <p style="font-size: 16px; color: #555;"><strong>Email:</strong> ${contactNumber}</p>
  `;

  const messageForUser = `
  <p style="font-size: 16px; color: #555;">Dear <strong>${name}</strong>,</p>
  `;

  // !clientEmail
  if (!email && !process.env.EMAIL_ID) {
    return NextResponse.json(
      { success: false, message: "Recipient email(s) missing" },
      { status: 400 }
    );
  }

  const clientMailOptions = {
    from: `"${email}" <${"support@webibee.com"}>`,
    to: process.env.EMAIL_ID,
    subject: `New Customer Form Submitted - Contact Page`,
    html: generateEmailTemplateForClient(messageForClient),
    // bcc: ["reachout@penthusiasts.com"],
  };

  const userMailOptions = {
    from: `Fluorokraft - "${process.env.EMAIL_ID}" <support@webibee.com>`,
    to: email,
    subject: "Acknowledgment: We received your Submission",
    html: generateEmailTemplateForUser(messageForUser, title),
  };

  try {
    // Send acknowledgment email to the customer
    await transporter.sendMail(userMailOptions);

    // Send detailed email to the client
    await transporter.sendMail(clientMailOptions);

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Error sending emails" },
      { status: 500 }
    );
  }
}
