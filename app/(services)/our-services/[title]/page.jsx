import Header from "@/components/header/Header";
import ServiceDetails from "@/components/service/components/ServiceDetails";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";

//USE Static Side Genaration(SSG) if necessary

export const metadata = {
  title:
    "Service Details || Tecvity - Delivering Creative Technological Solutions",
};

export default function ServicePageDetails({ params }) {
  return (
    <>
      <Header />
      <ServiceDetails serviceTitle={params.title} />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
