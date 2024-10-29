import Header from "@/components/header/Header";
import Breadcumb from "@/components/contact/Breadcumb";
import ContactInfo from "@/components/contact/ContactInfo";
import Contact from "@/components/common/Contact";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Contact || Frisk - Creative Agency & Portfolio Nextjs Template",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <Breadcumb />
      <ContactInfo />
      <Contact />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
