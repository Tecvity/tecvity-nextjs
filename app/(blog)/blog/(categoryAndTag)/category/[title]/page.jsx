import React from "react";
import { allBlogs } from "@/data/blogs";
import BlogList2 from "@/components/blog/BlogList2";
import Breadcumb from "@/components/blog/Breadcumb";
import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";

export async function generateMetadata({ params }) {
  return {
    title: `Blog | ${params.title} | Tecvity`,
  };
}
export default function CategoryPage({params}) {

  const { title } = params;
  const filteredBlogs = allBlogs.filter(blog => blog.category.toLowerCase() === title.toLowerCase());

  return (
    <>
      <Header3 />
      <Breadcumb breadcumbTitle={`Blog | ${params.title}`}/>
      <BlogList2 blogs={filteredBlogs}/>
      <MarqueeComponent /> 
      <Footer8 />
    </>
  );
}
