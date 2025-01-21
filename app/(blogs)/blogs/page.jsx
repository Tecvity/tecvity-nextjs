import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "@/components/header/Header";
import Breadcumb from "@/components/blog/components/BaseBreadcrumb";
import BlogList from "@/components/blog/components/BlogList";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Blog | Tecvity",
};

// Fetch blogs during server-side rendering
async function getAllBlogs() {
  const blogsDirectory = path.join(process.cwd(), "data", "blogs");
  const files = fs.readdirSync(blogsDirectory);

  const blogs = files.map((fileName) => {
    const filePath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);

    return {
      ...data, // Front matter metadata
      content, // Full blog content
      slug: fileName.replace(/\.mdx?$/, ""), // Use filename as slug
    };
  });

  return blogs.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date
}

export default async function BlogPage2() {
  const blogs = await getAllBlogs(); // Fetch blogs dynamically

  return (
    <>
      <Header />
      <Breadcumb />
      <BlogList blogs={blogs} /> {/* Pass blogs data to BlogList2 */}
      <MarqueeComponent />
      <Footer />
    </>
  );
}
