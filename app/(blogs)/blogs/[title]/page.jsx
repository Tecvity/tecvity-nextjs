import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Header from "@/components/header/Header";
import DetailBreadcrumb from "@/components/blog/components/DetailBreadcrumb";
import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footer/Footer";
import BlogDetailsMD from '@/components/blog/components/BlogDetailsMD';

export const metadata = {
  title: "Blog Details || Tecvity - Delivering Creative Technological Solutions",
};

export default async function BlogPageDetails({ params }) {
  const { title } = params;
  const filePath = path.join(process.cwd(), 'app', 'blogs-markdown', `${title}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContents);

  return (
    <>
      <Header />
      <DetailBreadcrumb blogTitle={data.title} />
      <BlogDetailsMD data={data} content={content}/>
      <MarqueeComponent />
      <Footer />
    </>
  );
}
