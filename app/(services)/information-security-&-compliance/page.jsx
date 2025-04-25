import Header from "@/components/header/Header";
import BaseBreadcrumb from "@/components/service/components/BaseBreadcrumb";
import Features from "@/components/service/components/Features";
import Video from "@/components/service/components/Video";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import { secServices } from "@/data/features";

export const metadata = {
  title: "Information Security & Compliance | Tecvity",
};

export default function InfoSecurityAndComp() {
  return (
    <>
      <Header />
      <BaseBreadcrumb Breadcrumb={"Information Security & Compliance"}/>
      <Features featuresList={secServices}/>
      <Video />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
