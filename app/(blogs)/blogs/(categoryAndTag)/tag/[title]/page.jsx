import { allBlogs } from "@/data/blogs";
import { tags } from "@/data/categories-tags";
import BlogList from "@/components/blog/components/BlogList";
import Breadcumb from "@/components/blog/components/BaseBreadcrumb";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

// export async function generateMetadata({ params }) {
//   return {
//     title: `Tag | ${params.title} | Tecvity`,
//   };
// }

export default function TagPage({ params }) {
  const { title } = params;
  const filteredTitle = tags.filter(
    (tag) => tag.text.toLowerCase() === title.toLowerCase()
  );
  const filteredBlogs = allBlogs.find((blog) => blog.tags?.includes(filteredTitle.text));

  return (
    <>
      <Header />
      <Breadcumb breadcumbTitle={`Tag | ${title}`} />
      <BlogList blogs={filteredBlogs} blogTag={title} />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
