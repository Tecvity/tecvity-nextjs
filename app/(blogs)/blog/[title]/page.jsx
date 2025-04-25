"use client"
import { useEffect } from "react";
import Header from "@/components/header/Header";
import DetailBreadcrumb from "@/components/blog/components/DetailBreadcrumb";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import BlogDetailsMD from '@/components/blog/components/BlogDetailsMD';
import { useGetData } from '@/utils/hooks';

export default function BlogPageDetails({ params }) {
  const { title } = params;
  const { data , isLoading, error, getData } = useGetData();
  useEffect(() => {
    getData(`/api/Blog/${title}/Data`)
  }, [title]);

  return (
    <>
      <Header />
      {data && <DetailBreadcrumb blogTitle={data.blog.title} />}
      {data && <BlogDetailsMD data={data.blog} content={data.blog.content}/>}
      <MarqueeComponent />
      <Footer />
    </>
  );
}
