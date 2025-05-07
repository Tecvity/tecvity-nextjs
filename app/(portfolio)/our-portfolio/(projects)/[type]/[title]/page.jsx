"use client";
import Header from "@/components/header/Header";
import DetailBreadcrumb from "@/components/portfolio/components/DetailBreadcrumb";
import ProjectDetails from "@/components/portfolio/components/ProjectDetails";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import { useEffect } from "react";
import { useGetData } from "@/utils/hooks";
import Loader from "@/components/common/Loader";

export default function ProjectPageDetails({ params }) {
  const { title, type } = params;
  const { data , isLoading, error, getData } = useGetData();
  useEffect(() => {
    getData(`/api/Portfolio/${type}/${title}`)
  }, [title]);

  if(isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      {data && <DetailBreadcrumb portfolioTitle={data.portfolio?.title} />}
      {data && <ProjectDetails project={data}/>}
      <MarqueeComponent />
      <Footer />
    </>
  );
}
