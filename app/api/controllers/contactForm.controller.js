import { db } from "@/app/api/config";
import logger from "@/app/api/logger";

const saveContactToDB = async (tableName, contactData) => {
  const { email, submissionTimestamp, ...rest } = contactData;

  const params = {
    TableName: tableName,
    Item: {
      email,
      submissionTimestamp,
      ...rest,
    },
    ConditionExpression: "attribute_not_exists(email) AND attribute_not_exists(submissionTimestamp)", // Prevent duplicates based on both keys
  };

  try {
    await db.put(params).promise();
    return { success: true };
  } catch (error) {
    if (error.code === "ConditionalCheckFailedException") {
      return { success: false, message: "Contact submission already exists." };
    }
    logger.error(error);
    return { success: false, message: "An error occurred while saving the contact submission." };
  }
};

export { saveContactToDB };
