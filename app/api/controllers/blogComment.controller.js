import { db } from "@/app/api/config";
import logger from "@/app/api/logger";

const saveCommentToDB = async (tableName, commentData) => {
  const { comment_id, submissionTimestamp, ...rest } = commentData;

  const params = {
    TableName: tableName,
    Item: {
      comment_id,
      submissionTimestamp,
      ...rest,
    },
    ConditionExpression: "attribute_not_exists(comment_id)",
  };

  try {
    await db.put(params).promise();
    return { success: true };
  } catch (error) {
    if (error.code === "ConditionalCheckFailedException") {
      return { success: false, message: "Comment submission already exists." };
    }
    logger.error(error);
    return {
      success: false,
      message: "An error occurred while saving the comment submission.",
    };
  }
};

export { saveCommentToDB };
