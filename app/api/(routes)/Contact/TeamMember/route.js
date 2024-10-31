import logger from "@/app/api/logger";
import { NextResponse } from "next/server";
import { isValidEmail } from "@/app/api/utils";
import { sendEmail, saveContactToDB } from "@/app/api/controllers";
import { sourceEmail } from "@/data/teamEmails"; // Ensure teamEmails exports sourceEmail
import { createContactFormObject } from "@/app/api/models";

const CONTACT_FORM_TABLE = "ContactForms";
const SOURCE_EMAIL = sourceEmail;

export const POST = async (req) => {
  try {
    const { firstname, lastname, email, message, teamEmail } = await req.json();

    // Validate input fields
    if (!firstname || !lastname || !email || !message || !teamEmail) {
      throw new Error("All fields are required.");
    }

    if (!isValidEmail(email) || !isValidEmail(teamEmail)) {
      throw new Error("Invalid email format.");
    }

    // Save contact form data to the database
    const contactData = createContactFormObject({
      firstname,
      lastname,
      email,
      message,
    });
    const saveResult = await saveContactToDB(CONTACT_FORM_TABLE, contactData);

    if (!saveResult.success) {
      throw new Error(saveResult.message);
    }

    // Define email content
    const USER_SUBJECT = "Thanks for reaching out!";
    const USER_MESSAGE = `Your email has been sent to ${teamEmail}. We will get back to you soon.`;
    const TEAM_SUBJECT = "New Contact Form Submission";
    const TEAM_MESSAGE = `New contact submission from ${firstname} ${lastname} (${email}) with message: ${message}`;

    // Send emails to the form submitter and the team member
    await sendEmail(SOURCE_EMAIL, email, USER_SUBJECT, USER_MESSAGE);
    await sendEmail(SOURCE_EMAIL, teamEmail, TEAM_SUBJECT, TEAM_MESSAGE);

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
    ) {
      status = 400;
    }

    logger.error(error.message);
    return NextResponse.json({ message: error.message }, { status });
  }
};
