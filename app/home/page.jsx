// import SearchPopup from "@/components/header/unused/SearchPopup";
import Header from "@/components/header/Header";
import Hero from "@/components/home/components/Hero";
import About from "@/components/home/components/About";
import Faq from "@/components/home/components/Faq";
import Portfolio from "@/components/home/components/Portfolio";
import Team from "@/components/home/components/Team";
import Testimonials from "@/components/home/components/Testimonials";
// import Blogs from "@/components/home/components/Blogs";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Home  || Tecvity - Delivering Creative Technological Solutions",
};

export default function HomePage() {
  return (
    <>
      {/* <SearchPopup /> */}
      <Header />
      <Hero />
      <About />
      <Faq />
      <Portfolio />
      <Team />
      <Testimonials />
      {/* <Blogs /> */}
      <Footer />
    </>
  );
}
