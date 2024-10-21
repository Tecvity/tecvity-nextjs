import {
  sendEmail,
  triggerSESVerification,
  saveEmailToDB,
} from "./email.controller";
import { saveContactToDB } from "./contactForm.controller";
import { saveCommentToDB, getCommentsFromDB } from "./blogComment.controller";

export {
  sendEmail,
  triggerSESVerification,
  saveEmailToDB,
  saveContactToDB,
  saveCommentToDB,
  getCommentsFromDB,
};
