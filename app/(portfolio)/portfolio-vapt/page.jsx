import Header from "@/components/header/Header";
import Breadcumb from "@/components/portfolio/components/BaseBreadcrumb";
import ProjectsVAPT from "@/components/portfolio/components/VAPTPortfolio";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "VA/PT Portfolio",
};

export default function ProjectsVAPTPage() {
  return (
    <>
      <Header />
      <Breadcumb />
      <ProjectsVAPT />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
