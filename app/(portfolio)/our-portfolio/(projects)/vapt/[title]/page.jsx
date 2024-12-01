import Header from "@/components/header/Header";
import DetailBreadcrumb from "@/components/portfolio/components/DetailBreadcrumb";
import ProjectDetails from "@/components/portfolio/components/ProjectDetails";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import { VAPTPortfolio } from "@/data/portfolio";

export const metadata = {
  title:
    "Project Details | Tecvity",
};

//USE Static Side Genaration(SSG) if necessary

export default function ProjectPageDetails({ params }) {
  return (
    <>
      <Header />
      <DetailBreadcrumb portfolioTitle={params.title} />
      <ProjectDetails portfolioTitle={params.title} blogList={VAPTPortfolio}/>
      <MarqueeComponent />
      <Footer />
    </>
  );
}
