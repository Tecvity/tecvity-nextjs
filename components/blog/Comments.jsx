import Image from "next/image";
import React, { useState } from "react";
import { formatTimestamp } from "@/utils/helpers";
import CommentReply from "./CommentReply";

// Helper function to group comments by parent_comment_id
const buildCommentTree = (comments = []) => {
  if (!Array.isArray(comments)) {
    console.error(
      "Invalid comments data. Expected an array but received:",
      comments
    );
    return [];
  }

  const commentMap = {};

  comments.forEach((comment) => {
    if (comment && comment.comment_id) {
      commentMap[comment.comment_id] = { ...comment, replies: [] };
    }
  });

  const commentTree = [];
  comments.forEach((comment) => {
    if (comment && comment.parent_comment_id) {
      commentMap[comment.parent_comment_id]?.replies.push(
        commentMap[comment.comment_id]
      );
    } else if (comment && comment.comment_id) {
      commentTree.push(commentMap[comment.comment_id]);
    }
  });

  return commentTree;
};

// Recursively render comments and their replies
const CommentItem = ({ comment, onReplyClick, activeReply }) => (
  <li key={comment.comment_id}>
    <div className="comments-box">
      <div className="comments-avatar">
        <Image
          width={110}
          height={100}
          src="/assets/img/blog/comment01.png"
          alt="Avatar"
        />
      </div>
      <div className="comments-text">
        <div className="avatar-name">
          <span className="date">{formatTimestamp(comment.submission_timestamp)}</span>
          <h6 className="name">{comment.name}</h6>
        </div>
        <p>{comment.comment}</p>
        <a
          href="#"
          className="link-btn"
          onClick={(e) => {
            e.preventDefault();
            onReplyClick(comment.comment_id);
          }}
        >
          <span className="link-effect">
            <span className="effect-1">REPLY</span>
            <span className="effect-1">REPLY</span>
          </span>
          <Image
            width={13}
            height={13}
            src={activeReply === comment.comment_id ? "/assets/img/icon/close-dark.svg" : "/assets/img/icon/arrow-left-top.svg"}
            alt="Reply icon"
          />
        </a>
      </div>
    </div>

    {/* Render replies recursively */}
    {comment.replies.length > 0 && (
      <ul className="children">
        {comment.replies.map((reply) => (
          <CommentItem
            key={reply.comment_id}
            comment={reply}
            onReplyClick={onReplyClick}
            activeReply={activeReply}
          />
        ))}
      </ul>
    )}

    {/* Render CommentReply component if this comment is being replied to */}
    {activeReply === comment.comment_id && (
      <>
        <CommentReply blogId={comment.blog_id} parentCommentId={comment.comment_id} parentName={comment.name}/>
        <br />
      </>
      
    )}
  </li>
);

export default function Comments({ comments = [], blogItem }) {
  const [activeReply, setActiveReply] = useState(null); // Track the comment for which "Reply" is clicked

  const safeComments = Array.isArray(comments) ? comments : [];
  const commentTree = buildCommentTree(safeComments);

  // Handle Reply button click
  const handleReplyClick = (commentId) => {
    setActiveReply(commentId === activeReply ? null : commentId); // Toggle reply box
  };

  return (
    <div className="comments-wrap">
      <h4>Comments:</h4>
      <br/>
      <div className="latest-comments">
        {commentTree.length > 0 ? (
          <ul className="list-wrap">
            {commentTree.map((comment) => (
              <CommentItem
                key={comment.comment_id}
                comment={comment}
                onReplyClick={handleReplyClick}
                activeReply={activeReply}
              />
            ))}
          </ul>
        ) : (
          <h4>Be the First one to comment!</h4>
        )}
      </div>
    </div>
  );
}