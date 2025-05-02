// import SearchPopup from "@/components/header/unused/SearchPopup";
import Header from "@/components/header/Header";
import Hero from "@/components/common/Hero";
import MarqueeComponent from "@/components/home/components/Marquee";
import Services from "@/components/home/components/Services";
import Pricing from "@/components/home/components/Pricing";
import Cta from "@/components/home/components/Cta";
// import About from "@/components/home/components/About";
// import Faq from "@/components/home/components/Faq";
// import Portfolio from "@/components/home/components/Portfolio";
// import Team from "@/components/home/components/Team";
import Testimonials from "@/components/home/components/Testimonials";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Home  || Tecvity - Delivering Creative Technological Solutions",
};

export default function HomePage() {
  return (
    <>
      {/* <SearchPopup /> */}
      <Header darkMode={true}/>
      <Hero />
      <MarqueeComponent />
      <Services />
      <Testimonials />
      <Pricing/>
      <Cta />
      {/* <About />
      <Faq />
      <Portfolio />
      <Team /> */}
      {/* <Testimonials /> */}
      {/* <Blogs /> */}
      <Footer />
    </>
  );
}
