import Header from "@/components/header/Header";
import Hero from "@/components/common/Hero";
import BaseBreadcrumb from "@/components/service/components/BaseBreadcrumb";
import Features from "@/components/service/components/Features";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import { desServices } from "@/data/features";
import Portfolio from "@/components/service/components/Portfolio";
import Testimonials from "@/components/service/components/Testimonials";
import Clients from "@/components/service/components/Clients";
import Cta from "@/components/service/components/Cta"
import { serviceHero } from "@/data/features";

export const metadata = {
  title: "Branding & Logo Design | Tecvity",
};

export default function BrandingAndLogoDes() {
  return (
    <>
      <Header darkMode={true}/>
      <Hero bgImage={serviceHero.bgImage} title={serviceHero.title}/>
      {/* <BaseBreadcrumb Breadcrumb={"Branding & Logo Design"}/> */}
      <Features featuresList={desServices} />
      {/* testimonials */}
      <Portfolio />
      <Testimonials />
      <Clients/>
      <Cta/>
      {/* <Video />
      <MarqueeComponent /> */}
      <Footer />
    </>
  );
}
