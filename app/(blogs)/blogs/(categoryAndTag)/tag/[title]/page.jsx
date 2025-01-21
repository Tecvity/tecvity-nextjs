import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogList from "@/components/blog/components/BlogList";
import Breadcumb from "@/components/blog/components/BaseBreadcrumb";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

// Fetch blogs based on a tag
async function getBlogsByTag(tag) {
  const blogsDirectory = path.join(process.cwd(), "data", "blogs");
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
    .filter((blog) =>
      blog.tags?.some((blogTag) => blogTag.toLowerCase() === tag.toLowerCase())
    );

  return filteredBlogs;
}

export default async function TagPage({ params }) {
  const { title } = params;
  const filteredBlogs = await getBlogsByTag(title);

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
