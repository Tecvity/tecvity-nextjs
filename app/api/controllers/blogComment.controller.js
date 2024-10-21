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

const getCommentsFromDB = async (tableName, blogId) => {
  const params = {
    TableName: tableName,
    KeyConditionExpression: "blog_id = :blog_id",
    ExpressionAttributeValues: {
      ":blog_id": blogId,
    },
  };

  try {
    const
      { Items } = await db.query(params).promise();
    return { success: true, comments: Items };
  } catch (error) {
    logger.error(error);
    return {
      success: false,
      message: "An error occurred while fetching the comments.",
    };
  }
}

export { saveCommentToDB, getCommentsFromDB };
