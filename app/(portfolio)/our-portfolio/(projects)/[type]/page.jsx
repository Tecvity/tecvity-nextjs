import Header from "@/components/header/Header";
import Breadcumb from "@/components/portfolio/components/BaseBreadcrumb";
import PortfolioSub from "@/components/portfolio/components/PortfolioSub";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import PortfolioPd from "@/components/portfolio/components/PortfolioPd";
export default function ProjectsType({ params }) {
  const { type } = params;
  const isFullScreenSlideshow = 'pd' === type;

  return (
    <>
      <Header darkMode={isFullScreenSlideshow}/>
      {!isFullScreenSlideshow ? 
      <>
        <Breadcumb />
        <PortfolioSub sub={type && type} />
        <MarqueeComponent />
        <Footer />
      </> : <PortfolioPd  sub={type && type} />}
    </>
  );
}
