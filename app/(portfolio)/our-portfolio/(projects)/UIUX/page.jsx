import Header from "@/components/header/Header";
import Breadcumb from "@/components/portfolio/components/BaseBreadcrumb";
import PortfolioSub from "@/components/portfolio/components/PortfolioSub";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import { UIUXPortfolio } from "@/data/portfolio";

export const metadata = {
  title: "PD Portfolio",
};
export default function ProjectsUIUXPage() {
  return (
    <>
      <Header />
      <Breadcumb />
      <PortfolioSub projectsList={UIUXPortfolio}/>
      <MarqueeComponent />
      <Footer />
    </>
  );
}
