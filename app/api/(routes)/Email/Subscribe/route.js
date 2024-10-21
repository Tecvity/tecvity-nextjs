import logger from "@/app/api/logger";
import { NextResponse } from "next/server";
import { isValidEmail } from "@/app/api/utils";
import { createSubscriptionObject } from "@/app/api/models";
import { sendEmail, saveEmailToDB } from "@/app/api/controllers";
import { sourceEmail, teamEmails } from "@/data/teamEmails";

const EMAIL_SUBSCRIBERS_TABLE = "EmailSubscribers";
const OWNER_EMAIL = teamEmails;
const SOURCE_EMAIL = sourceEmail;


export const POST = async (req) => { 
  try {
    const { email } = await req.json();

    if (!email || !isValidEmail(email)) 
      throw new Error("Invalid email format");

    const subscription = createSubscriptionObject(email);
    const saveResult = await saveEmailToDB(EMAIL_SUBSCRIBERS_TABLE, subscription);

    if (!saveResult.success)
      throw new Error(saveResult.message);

    await sendEmail(SOURCE_EMAIL, email, "Subscribed to Tecvity", "Congratulations! You have successfully subscribed to Tecvity newsletter.");
    await Promise.all(
      OWNER_EMAIL.map((ownerEmail) => 
        sendEmail(SOURCE_EMAIL, ownerEmail, "New subscriber", `New subscriber: ${email}`)
      )
    );

    logger.info("Email subscribed successfully");
    return NextResponse.json({ message: "Email subscribed successfully" }, { status: 200 });

  } catch (error) {
    let status = 500;
    if (error.message === "Invalid email format") {
      status = 400;
    } else if (error.message === "Email is already subscribed.") {
      status = 409;
    }
    logger.error(error.message);
    return NextResponse.json({ message: error.message }, { status });
  }
};
