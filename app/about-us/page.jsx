import Header from "@/components/header/Header";
import Breadcrumb from "@/components/about/components/Breadcrumb";
import Facts from "@/components/about/components/Facts";
import Features from "@/components/about/components/Features";
import Awards from "@/components/about/components/Awards";
import Team from "@/components/about/components/Team";
import Contact from "@/components/common/Contact";
import Clients from "@/components/about/components/Clients";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "About Us | Tecvity",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Facts />
      <Features />
      {/* <Awards /> */}
      <Team />
      <Contact />
      <Clients />{/*to add clients remove placeholders */}
      <MarqueeComponent />
      <Footer />
    </>
  );
}
