import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import Breadcumb from "@/components/portfolio/Breadcumb";

import ProjectsVAPT from "@/components/portfolio/VAPTPortfolio";
import React from "react";
export const metadata = {
  title: "VA/PT Portfolio",
};
export default function ProjectsVAPTPage() {
  return (
    <>
      <Header3 />
      <Breadcumb />
      <ProjectsVAPT />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
