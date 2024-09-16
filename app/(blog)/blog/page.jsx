import BlogList2 from "@/components/blog/BlogList2";
import Breadcumb from "@/components/blog/Breadcumb";
import MarqueeComponent from "@/components/common/Marquee";

import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import React from "react";

export const metadata = {
  title: "Blog | Tecvity",
};
export default function BlogPage2() {
  return (
    <>
      <Header3 />
      <Breadcumb />
      <BlogList2 />
      <MarqueeComponent />
      <Footer8 />
    </>
  );
}
