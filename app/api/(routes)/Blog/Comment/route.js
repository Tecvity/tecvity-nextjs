import logger from "@/app/api/logger";
import { NextResponse } from "next/server";
import { isValidEmail } from "@/app/api/utils";
import { sendEmail, saveCommentToDB } from "@/app/api/controllers";
import { sourceEmail, ownerEmails } from "@/data/teamEmails"; 
import { createCommentObject } from "@/app/api/models"; 


const COMMENT_TABLE = "BlogComments";

export const POST = async (req) => {
  try {
    const { blog_id, name, email, comment, parent_comment_id } = await req.json();

    if (!blog_id || !name || !email || !comment) 
      throw new Error("All fields are required.");

    if (!isValidEmail(email)) 
      throw new Error("Invalid email format.");

    const commentData = createCommentObject({
        blog_id,
        name,
        email,
        comment,
        parent_comment_id,
      });
  
      logger.info(commentData);

    const saveResult = await saveCommentToDB(COMMENT_TABLE, commentData);

    if (!saveResult.success) 
      throw new Error(saveResult.message);

    const OWNER_SUBJECT = "New Comment on Blog Post";
    const OWNER_MESSAGE = `New comment from ${name} (${email}) on blog post ${blog_id}: "${comment}"`;

    await Promise.all(
      ownerEmails.map((ownerEmail) =>
        sendEmail(sourceEmail, ownerEmail, OWNER_SUBJECT, OWNER_MESSAGE)
      )
    );

    logger.info("Comment submitted successfully");
    return NextResponse.json(
      { message: "Comment submitted successfully", data: commentData },
      { status: 200 }
    );
  } catch (error) {
    let status = 500;
    if (error.message.includes("required") || error.message === "Invalid email format") 
      status = 400;

    logger.error(error.message);
    return NextResponse.json({ message: error.message }, { status });
  }
};
