import React from "react";
import { allBlogs } from "@/data/blogs"; // Import all blogs data
import BlogList2 from "@/components/blog/BlogList2";
import Breadcumb from "@/components/blog/Breadcumb";
import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";

export async function generateMetadata({ params }) {
  return {
    title: `Tag | ${params.title} | Tecvity`,
  };
}

export default function TagPage({ params }) {
  const { title } = params;
  const filteredBlogs = allBlogs.filter(blog => blog.tags.includes(title));

  return (
    <>
      <Header3 />
      <Breadcumb breadcumbTitle={`Tag | ${params.title}`} />
      <BlogList2 blogs={filteredBlogs} blogTag={title}/>
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}