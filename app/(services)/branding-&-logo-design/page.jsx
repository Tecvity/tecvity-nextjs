import Header from "@/components/header/Header";
import BaseBreadcrumb from "@/components/service/components/BaseBreadcrumb";
import Features from "@/components/service/components/Features";
import Video from "@/components/service/components/Video";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import { desServices } from "@/data/features";

export const metadata = {
  title: "Branding & Logo Design | Tecvity",
};

export default function BrandingAndLogoDes() {
  return (
    <>
      <Header />
      <BaseBreadcrumb Breadcrumb={"Branding & Logo Design"}/>
      <Features featuresList={desServices} />
      <Video />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
