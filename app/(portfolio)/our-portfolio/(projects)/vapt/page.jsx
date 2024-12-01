import Header from "@/components/header/Header";
import Breadcumb from "@/components/portfolio/components/BaseBreadcrumb";
import PortfolioSub from "@/components/portfolio/components/PortfolioSub";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import { VAPTPortfolio } from "@/data/portfolio";

export const metadata = {
  title: "VA/PT Portfolio",
};

export default function ProjectsVAPTPage() {
  return (
    <>
      <Header />
      <Breadcumb />
      <PortfolioSub projectsList={VAPTPortfolio}/>
      <MarqueeComponent />
      <Footer />
    </>
  );
}
