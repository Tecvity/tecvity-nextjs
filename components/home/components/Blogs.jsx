import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

function sortByDateDescending(posts) {
  return posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
}

export default function Blogs() {
  // Read all blog markdown files
  const blogDir = path.join(process.cwd(), "data", "blogs");
  const blogFiles = fs.readdirSync(blogDir);

  // Process each Markdown file to extract its metadata
  const blogs = blogFiles.map((file) => {
    const filePath = path.join(blogDir, file);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: file.replace(/\.mdx?$/, ""), // Use the filename as the slug
    };
  });

  // Sort blogs by date and get the three most recent ones
  const recentThreePosts = sortByDateDescending(blogs).slice(0, 3);

  return (
    <section className="blog-area space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-6 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title">Read Our Articles</h2>
            </div>
          </div>
        </div>
        <div className="row gy-40 justify-content-center">
          {recentThreePosts.map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="blog-card">
                <div className="blog-img">
                  <Link scroll={false} href={`/blog/${elm.slug}`}>
                    <Image
                      width={416}
                      height={314}
                      src={elm.image || "/default-blog-image.jpg"} // Use a fallback image if none is provided
                      alt={elm.title || "Blog Image"}
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="post-meta-item blog-meta">
                    <a href="#">{elm.date}</a>
                    <a href={`#`}>
                      {elm.category}
                    </a>
                  </div>
                  <h4 className="blog-title">
                    <Link scroll={false} href={`/blog/${elm.slug}`}>
                      {elm.title}
                    </Link>
                  </h4>
                  <Link scroll={false} href={`/blog/${elm.slug}`} className="link-btn">
                    <span className="link-effect">
                      <span className="effect-1">READ MORE</span>
                      <span className="effect-1">READ MORE</span>
                    </span>
                    <Image
                      width={13}
                      height={13}
                      src="/assets/img/icon/arrow-left-top.svg"
                      alt="icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
