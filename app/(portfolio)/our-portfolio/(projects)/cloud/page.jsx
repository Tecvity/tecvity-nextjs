import Header from "@/components/header/Header";
import Breadcumb from "@/components/portfolio/components/BaseBreadcrumb";
import PortfolioSub from "@/components/portfolio/components/PortfolioSub";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import { CLOUDPortfolio } from "@/data/portfolio";


export const metadata = {
  title: "Cloud Security Portfolio",
};

export default function ProjectsCLOUDPage() {
  return (
    <>
      <Header />
      <Breadcumb />
      <PortfolioSub projectsList={CLOUDPortfolio}/>
      <MarqueeComponent />
      <Footer />
    </>
  );
}
