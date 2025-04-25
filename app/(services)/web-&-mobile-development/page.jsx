import Header from "@/components/header/Header";
import BaseBreadcrumb from "@/components/service/components/BaseBreadcrumb";
import Features from "@/components/service/components/Features";
import Video from "@/components/service/components/Video";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import { devServices } from "@/data/features";

export const metadata = {
  title: "Web & Mobile Development | Tecvity",
};

export default function WebAndMObileDev() {
  return (
    <>
      <Header />
      <BaseBreadcrumb Breadcrumb={"Web & Mobile Development"} />
      <Features featuresList={devServices} />
      <Video />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
