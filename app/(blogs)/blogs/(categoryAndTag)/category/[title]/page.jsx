import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogList from "@/components/blog/components/BlogList";
import Breadcumb from "@/components/blog/components/BaseBreadcrumb";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export async function generateMetadata({ params }) {
  return {
    title: `Blog | ${params.title} | Tecvity`,
  };
}

// Fetch blogs from Markdown files
async function getBlogsByCategoryOrTag(categoryOrTag) {
  const blogsDirectory = path.join(process.cwd(), "app", "blogs-markdown");
  const files = fs.readdirSync(blogsDirectory);

  const filteredBlogs = files
    .map((fileName) => {
      const filePath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContents); // Extract front matter

      return {
        ...data,
        slug: fileName.replace(/\.mdx$/, ""), // Use the file name as the slug
      };
    })
    .filter((blog) => {
      const normalizedCategory = blog.category.toLowerCase();
      const normalizedTags = blog.tags.map((tag) => tag.toLowerCase());
      const normalizedParam = categoryOrTag.toLowerCase();

      return (
        normalizedCategory === normalizedParam ||
        normalizedTags.includes(normalizedParam)
      );
    });

  return filteredBlogs;
}

export default async function CategoryPage({ params }) {
  const { title } = params;
  const filteredBlogs = await getBlogsByCategoryOrTag(title);

  return (
    <>
      <Header />
      <Breadcumb breadcumbTitle={`Blog | ${params.title}`} />
      <BlogList blogs={filteredBlogs} />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
