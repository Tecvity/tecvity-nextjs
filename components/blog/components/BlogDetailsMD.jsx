import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogSearchbar from "./BlogSearchbar";
import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Tags from "./Tags";
import RenderMDX from "./RenderMDX";
import BlogDetailsMDsub from "./BlogDetailsMDsub";
import { socialMediaLinks } from "@/data/socials";


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

export default async function BlogDetailsMD({ data, content }) {
  
  const blogs = await getAllBlogs(); // Fetch blogs dynamically

    const decodedBlogTitle = data.title.replace(/-/g, ' ').toLowerCase();

    const currentIndex = blogs.findIndex((blog) => blog.title.toLowerCase() === decodedBlogTitle.toLowerCase());
    const nextBlog = currentIndex >= 0 && currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;
    const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;

  return (
    <section className="blog__details-area space">
      <div className="container">
        <div className="blog__inner-wrap">
          <div className="row">
            <div className="col-70">
              <div className="blog__details-wrap">
                <div className="blog__details-content">
                  <div className="blog-post-meta">
                    <RenderMDX content={content} />
                    <div className="blog__details-bottom">
                      <div className="row align-items-center">
                        <div className="col-md-7">
                          <div className="blog-post-tags">
                            <ul className="list-wrap">
                              {data.tags.map((tag, i) => (
                                <li key={i}>
                                  <a
                                    href={`/blogs/tag/${tag
                                      .replace(/\s+/g, "-")
                                      .toLowerCase()}`}
                                  >
                                    {tag}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="post-share">
                            <h5 className="title">Share:</h5>
                            <div className="social-btn style3 justify-content-md-end">
                              {socialMediaLinks.slice(0, 3).map((elm, i) => (
                                <a
                                  key={i}
                                  href={
                                    // elm.iconClass === "fab fa-linkedin"
                                    //   ? linkedinShareUrl
                                    //   : elm.href
                                    ""
                                  }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span className="link-effect">
                                    <span className="effect-1">
                                      <i className={elm.iconClass}></i>
                                    </span>
                                    <span className="effect-1">
                                      <i className={elm.iconClass}></i>
                                    </span>
                                  </span>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="inner__page-nav mt-20 mb-n1">
                    <a href={prevBlog ? `/blogs/${prevBlog.title.replace(/\s+/g, "-").toLowerCase()}` : ""} className={`nav-btn ${!prevBlog ? "disabled" : ""}`}>
                      <i className="fa fa-arrow-left"></i>
                      <span>Previous Post</span>
                    </a>
                    <a href={nextBlog ? `/blogs/${nextBlog.title.replace(/\s+/g, "-").toLowerCase()}` : ""} className={`nav-btn ${!nextBlog ? "disabled" : ""}`}>
                      <span>Next Post</span>
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                  </div>
                </div>
                <BlogDetailsMDsub data={data} />
              </div>
            </div>
            <div className="col-30">
              <aside className="blog__sidebar">
                <BlogSearchbar />
                <Categories blogs={blogs} />
                <RecentPosts blogs={blogs} />
                <Tags blogs={blogs} />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

