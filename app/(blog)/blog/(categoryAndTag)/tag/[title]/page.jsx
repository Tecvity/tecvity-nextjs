import { allBlogs } from "@/data/blogs"; // Import all blogs data
import BlogList2 from "@/components/blog/components/BlogList";
import Breadcumb from "@/components/blog/components/BaseBreadcrumb";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export async function generateMetadata({ params }) {
  return {
    title: `Tag | ${params.title} | Tecvity`,
  };
}

export default function TagPage({ params }) {
  const { title } = params;
  const filteredBlogs = allBlogs.filter((blog) => blog.tags.includes(title));

  return (
    <>
      <Header />
      <Breadcumb breadcumbTitle={`Tag | ${params.title}`} />
      <BlogList2 blogs={filteredBlogs} blogTag={title} />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
