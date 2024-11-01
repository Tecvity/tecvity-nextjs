import Header from "@/components/header/Header";
import Breadcumb from "@/components/portfolio/components/BaseBreadcrumb";
import Projects from "@/components/portfolio/components/Projects";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Project 1 || Frisk - Creative Agency & Portfolio Nextjs Template",
};

export default function Project() {
  return (
    <>
      <Header />
      <Breadcumb />
      <Projects />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
