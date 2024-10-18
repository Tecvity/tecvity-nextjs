import { NextResponse } from "next/server";
import { isValidEmail } from "@/app/api/utils";
import logger from "@/app/api/log";

const saveEmailToDB = async (email) => {
  // Replace this with actual database logic (e.g., MongoDB, AWS DynamoDB, etc.)
  // Example with MongoDB: await db.collection('subscribers').insertOne({ email });
  logger.info(`Email Recieved to subscribe: ${email}`);
  return { success: true };
};

export const POST = async (req) => {
  try {
    const requestBody = await req.text();
    const { email } = JSON.parse(requestBody);

    if (!email) 
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    if (!isValidEmail(email)) 
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 });

    // Optional: Check if the email already exists in the database
    // const existingEmail = await db.collection('subscribers').findOne({ email });
    // if (existingEmail) {
    //   return NextResponse.json({ message: "Email is already subscribed" }, { status: 400 });
    // }

    const result = await saveEmailToDB(email);

    if (result.success) {
      return NextResponse.json({
        message: "Successfully subscribed",
        status: 200,
      });
    }

    return NextResponse.json({ message: "Failed to subscribe" }, { status: 500 });
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
