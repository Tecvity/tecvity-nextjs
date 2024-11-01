import Header from "@/components/header/Header";
import Breadcumb from "@/components/blog/components/BaseBreadcrumb";
import BlogList from "@/components/blog/components/BlogList";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Blog | Tecvity",
};

export default function BlogPage2() {
  return (
    <>
      <Header />
      <Breadcumb />
      <BlogList />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
