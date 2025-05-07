"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Comments from "@/components/blog/components/Comments";
import CommentReply from "@/components/blog/components/CommentReply";
import { useGetData } from "@/utils/hooks";
import Loader from "@/components/common/Loader";

const BlogDetailsMDsub = ({ data }) => {
  const { data: comments = [], isLoading, error, getData } = useGetData();
  const [linkedinShareUrl, setLinkedinShareUrl] = useState("");

  useEffect(() => {
    getData(`/api/Blog/${data.id}/Comments`);
    const url = encodeURIComponent(
      `${window.location.origin}/blog/${data.title}`
    );
    setLinkedinShareUrl(
      `https://www.linkedin.com/shareArticle?mini=true&url=${url}&source=LinkedIn`
    );
  }, []);
  if(isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="blog__avatar-wrap">
        <div className="blog__avatar-img">
          <a href="#">
            <Image width={196} height={180} src={data.authorImage ? data.authorImage : "/assets/img/team/team.png" } alt="img" />
          </a>
        </div>
        <div className="blog__avatar-info">
          <h4 className="name">
            <a href={data.authorProfile ?? "#"}>{data.author}</a>
          </h4>
          <p>{data.authorQuote}</p>
        </div>
      </div>
      {!isLoading && !error ? <Comments comments={comments} /> : null}
      {isLoading && <p>Loading Comments...</p>}
      {error && <p>Something went wrong. Please try again later.</p>}
      <CommentReply blogId={data.id} />
    </>
  );
};

export default BlogDetailsMDsub;
