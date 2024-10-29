import Header from "@/components/header/Header";
import BlogDetails from "@/components/blog/components/BlogDetails";
import DetailBreadcumb from "@/components/blog/components/DetailBreadcrumb";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";

//USE Static Side Genaration(SSG) if necessary

export const metadata = {
  title: "Blog Details || Frisk - Creative Agency & Portfolio Nextjs Template",
};

export default function BlogPageDetails({ params }) {
  return (
    <>
      <Header />
      <DetailBreadcumb blogTitle={params.title} />
      <BlogDetails blogTitle={params.title} />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
