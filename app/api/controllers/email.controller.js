import { db, ses } from "@/app/api/config";
import logger from "@/app/api/logger";

const sendEmail = async (sourceEmail, recipientEmails, subject, message) => {
  const params = {
    Destination: {
      ToAddresses: [recipientEmails],
    },
    Message: {
      Body: {
        Text: { Data: message },
      },
      Subject: { Data: subject },
    },
    Source: sourceEmail,
  };
//Request production access to send emails to not verified users
//
  try {
    logger.info(await ses.sendEmail(params).promise());
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    logger.info(error);
    return {
      success: false,
      message: `Failed to send email: ${error.message}`,
    };
  }
};

const triggerSESVerification = async (email) => {
  const params = { EmailAddress: email };
  try {
    await ses.verifyEmailAddress(params).promise();
    return { success: true };
  } catch (error) {
    logger.error(`Failed to send verification email to ${email}: ${error.message}`);
    return { success: false, message: error.message };
  }
};


const saveEmailToDB = async (tableName, item) => {
  const params = {
    TableName: tableName,
    Item: item,
    ConditionExpression: "attribute_not_exists(email)", // Prevent duplicates
  };

  try {
    await db.put(params).promise();
    return { success: true };
  } catch (error) {
    if (error.code === "ConditionalCheckFailedException") {
      return { success: false, message: "Email is already subscribed." };
    }
    logger.error(error);
    return { success: false, message: "An error occurred while saving the email." };
  }
};


export { sendEmail, triggerSESVerification, saveEmailToDB };