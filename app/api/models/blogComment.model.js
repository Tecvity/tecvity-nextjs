import { v4 as uuidv4 } from 'uuid';

const createCommentObject = ({ blog_id, name, email, comment, parent_comment_id }) => ({
  comment_id: uuidv4(),
  blog_id,
  name,
  email,
  comment,
  submissionTimestamp: new Date().toISOString(),
  parent_comment_id: parent_comment_id,
});

export default createCommentObject;
