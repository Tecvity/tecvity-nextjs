import Header from "@/components/header/Header";
import Breadcumb from "@/components/team/components/Breadcrumb";
import Team from "@/components/team/components/Team";
import Contact from "@/components/team/components/Contact";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Team || Frisk - Creative Agency & Portfolio Nextjs Template",
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <Breadcumb />
      <Team />
      <Contact />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
