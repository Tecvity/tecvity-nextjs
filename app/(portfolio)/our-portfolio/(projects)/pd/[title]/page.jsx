import Header from "@/components/header/Header";
import DetailBreadcrumb from "@/components/portfolio/components/DetailBreadcrumb";
import ProjectDetails from "@/components/portfolio/components/ProjectDetails";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import { PDPortfolio } from "@/data/portfolio";

export const metadata = {
  title:
    "Project Details | Tecvity",
};

//USE Static Side Genaration(SSG) if necessary

export default function ProjectPageDetails({ params }) {
  const decodedProjectTitle = decodeURIComponent(params.title);
  return (
    <>
      <Header />
      <DetailBreadcrumb portfolioTitle={decodedProjectTitle} />
      <ProjectDetails portfolioTitle={decodedProjectTitle} blogList={PDPortfolio}/>
      <MarqueeComponent />
      <Footer />
    </>
  );
}
