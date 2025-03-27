import Header from "@/components/header/Header";
import Breadcumb from "@/components/portfolio/components/BaseBreadcrumb";
import PortfolioSub from "@/components/portfolio/components/PortfolioSub";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import { DevPortfolio } from "@/data/portfolio";


export const metadata = {
  title: "Dev Portfolio",
};

export default function ProjectsDSOPage() {
  return (
    <>
      <Header />
      <Breadcumb />
      <PortfolioSub projectsList={DevPortfolio}/>
      <MarqueeComponent />
      <Footer />
    </>
  );
}
