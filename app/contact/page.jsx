import Header from "@/components/header/Header";
import Breadcrumb from "@/components/contact/Breadcrumb";
import ContactInfo from "@/components/contact/ContactInfo";
import Contact from "@/components/common/Contact";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Contact || Tecvity - Delivering Creative Technological Solutions",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <ContactInfo />
      <Contact />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
