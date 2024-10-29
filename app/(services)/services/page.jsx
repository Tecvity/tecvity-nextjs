import Header from "@/components/header/Header";
import BaseBreadcrumb from "@/components/service/components/BaseBreadcrumb";
import Features from "@/components/service/components/Features";
import Video from "@/components/service/components/Video";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Our Services | Tecvity",
};

export default function ServicePage1() {
  return (
    <>
      <Header />
      <BaseBreadcrumb />
      <Features />
      <Video />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
