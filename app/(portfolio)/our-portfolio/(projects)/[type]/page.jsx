import Header from "@/components/header/Header";
import Breadcumb from "@/components/portfolio/components/BaseBreadcrumb";
import PortfolioSub from "@/components/portfolio/components/PortfolioSub";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import { useEffect } from "react";
export default function ProjectsType({ params }) {
  const { type } = params;

  return (
    <>
      <Header />
      <Breadcumb />
      <PortfolioSub sub={type && type} />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
