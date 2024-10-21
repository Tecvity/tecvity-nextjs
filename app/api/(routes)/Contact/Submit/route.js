import logger from "@/app/api/logger";
import { NextResponse } from "next/server";
import { isValidEmail } from "@/app/api/utils";
import { sendEmail, saveContactToDB } from "@/app/api/controllers";
import { sourceEmail, ownerEmails } from "@/data/teamEmails";
import { createContactFormObject } from "@/app/api/models";

const CONTACT_FORM_TABLE = "ContactForms";
const OWNER_EMAIL = ownerEmails;
const SOURCE_EMAIL = sourceEmail;

export const POST = async (req) => {
  try {
    const { firstname, lastname, email, message } = await req.json();

    if (!firstname || !lastname || !email || !message)
      throw new Error("All fields are required.");

    if (!isValidEmail(email)) throw new Error("Invalid email format.");

    const contactData = createContactFormObject({
      firstname,
      lastname,
      email,
      message,
    });
    const saveResult = await saveContactToDB(CONTACT_FORM_TABLE, contactData);

    if (!saveResult.success) throw new Error(saveResult.message);

    const USER_SUBJECT = "Thanks for reaching out!";
    const USER_MESSAGE = "Thank you for contacting us. We will get back to you soon.";
    const OWNER_SUBJECT = "New Contact Form Submission";
    const OWNER_MESSAGE = `New contact submission from ${firstname} ${lastname} (${email}) with message: ${message}`;

    await sendEmail(SOURCE_EMAIL, email, USER_SUBJECT, USER_MESSAGE);
    await Promise.all(
      OWNER_EMAIL.map((ownerEmail) =>
        sendEmail(SOURCE_EMAIL, ownerEmail, OWNER_SUBJECT, OWNER_MESSAGE)
      )
    );

    logger.info("Contact form submitted successfully");
    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    let status = 500;
    if (
      error.message.includes("required") ||
      error.message === "Invalid email format"
    )
      status = 400;

    logger.error(error.message);
    return NextResponse.json({ message: error.message }, { status });
  }
};
