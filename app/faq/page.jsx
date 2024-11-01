import Header from "@/components/header/Header";
import Breadcrumb from "@/components/faq/Breadcrumb";
import Faq from "@/components/faq/Faq";
import ContactInfo from "@/components/faq/ContactInfo";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Faq || Frisk - Creative Agency & Portfolio Nextjs Template",
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Faq />
      <ContactInfo />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
