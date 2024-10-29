import { allBlogs } from "@/data/blogs";
import BlogList2 from "@/components/blog/components/BlogList";
import Breadcumb from "@/components/blog/components/BaseBreadcrumb";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export async function generateMetadata({ params }) {
  return {
    title: `Blog | ${params.title} | Tecvity`,
  };
}
export default function CategoryPage({ params }) {
  const { title } = params;
  const filteredBlogs = allBlogs.filter(
    (blog) => blog.category.toLowerCase() === title.toLowerCase()
  );

  return (
    <>
      <Header />
      <Breadcumb breadcumbTitle={`Blog | ${params.title}`} />
      <BlogList2 blogs={filteredBlogs} />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
