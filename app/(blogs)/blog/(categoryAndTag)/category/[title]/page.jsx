"use client"
import BlogList from "@/components/blog/components/BlogList";
import Breadcumb from "@/components/blog/components/BaseBreadcrumb";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { useGetData } from "@/utils/hooks";
import { useEffect } from "react";

// export async function generateMetadata({ params }) {
//   return {
//     title: `Blog | ${params.title} | Tecvity`,
//   };
// }
export default function CategoryPage({ params }) {
  const { title } = params;
  // const {
  //   data: filteredBlogs,
  //   isLoading,
  //   error,
  //   getData,
  // } = useGetData();

  // useEffect(() => {
  //   getData(`/api/Blog?category=${title}`);
  // }, [title]);

  // useEffect(() => {
    
  //   console.log("Filtered Blogs:", filteredBlogs);
  // }, [filteredBlogs]);

  return (
    <>
      <Header />
      <Breadcumb breadcumbTitle={`Blog | ${title}`} />
      <BlogList category={title} />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
