"use client";

import { useState, useEffect } from "react";
import { usePostData } from "@/utils/hooks";

export default function CommentReplay({blogId, parentCommentId = null, parentName = null}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const { response, isLoading, error, postData, reset } = usePostData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if(response) {
      setFormData({
        name: "",
        email: "",
        comment: "",
      });
    }
  }, [isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentData = {
      blog_id: blogId.toString(),
      parent_comment_id: parentCommentId,
      ...formData,
    };
    await postData("/api/Blog/Comment", commentData);
  };

  return (
    <div className="comment-respond">
      <h3 className="comment-reply-title">Leave a Reply {parentName && `to ${parentName}`}</h3>
      <form onSubmit={handleSubmit} className="comment-form">
        <p className="comment-notes">
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control style-border"
                name="name"
                id="name"
                placeholder="Full name*"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="email"
                className="form-control style-border"
                name="email"
                id="email"
                placeholder="Email address*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <textarea
                name="comment"
                placeholder="Write your comment *"
                id="contactForm"
                className="form-control style-border style2"
                value={formData.comment}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
        </div>
        
        <div className="form-btn col-12">
          <button type="submit" className="btn mt-25" disabled={isLoading}>
            <span className="link-effect">
              <span className="effect-1">
                {isLoading ? "Posting..." : "POST COMMENT"}
              </span>
              <span className="effect-1">
                {isLoading ? "Posting..." : "POST COMMENT"}
              </span>
            </span>
          </button>
        </div>
        {error && <p className="error-message">Error: {error.message}</p>}
        {response && !isLoading && !error ? <p className="success-message">Comment posted!</p>: null}
      </form>
    </div>
  );
}