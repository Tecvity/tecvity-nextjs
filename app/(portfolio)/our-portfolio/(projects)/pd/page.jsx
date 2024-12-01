import Header from "@/components/header/Header";
import Breadcumb from "@/components/portfolio/components/BaseBreadcrumb";
import PortfolioSub from "@/components/portfolio/components/PortfolioSub";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import { PDPortfolio } from "@/data/portfolio";

export const metadata = {
  title: "PD Portfolio",
};
export default function ProjectsVAPTPage() {
  return (
    <>
      <Header />
      <Breadcumb />
      <PortfolioSub projectsList={PDPortfolio}/>
      <MarqueeComponent />
      <Footer />
    </>
  );
}
