"use client"
import BlogSearchbar from "./BlogSearchbar";
// import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
// import Tags from "./Tags";
import RenderMDX from "./RenderMDX";
import BlogDetailsMDsub from "./BlogDetailsMDsub";
import { socialMediaLinks } from "@/data/socials";
import { serialize } from 'next-mdx-remote/serialize';
import { useGetData } from "@/utils/hooks";
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";

export default function BlogDetailsMD({ data, content }) {
    const [serializedContent, setSerializedContent] = useState(null);
    const { data: navigation , isLoading: navLoading, error: navError, getData: getNavigation } = useGetData();
    const { data: meta , isLoading: metaLoading, error: metaError, getData: getMeta } = useGetData();
  
    useEffect(() => {
      getNavigation(`/api/Blog/${data.slug}/AdjacentBlogs`);
      getMeta(`/api/Blog/Meta`);
      const serializeContent = async () => {
        if (content) {
          const serialized = await serialize(content);
          setSerializedContent(serialized);
        }
      };
      serializeContent();
    }, []);
    if(isLoading) {
      return <Loader />;
    }
  return (
    <section className="blog__details-area space">
      <div className="container">
        <div className="blog__inner-wrap">
          <div className="row">
            <div className="col-70">
              <div className="blog__details-wrap">
                <div className="blog__details-content">
                  <div className="blog-post-meta">
                    <RenderMDX content={serializedContent} />
                    <div className="blog__details-bottom">
                      <div className="row align-items-center">
                        <div className="col-md-7">
                          <div className="blog-post-tags">
                            <ul className="list-wrap">
                              {data.tags.map((tag, i) => (
                                <li key={i}>
                                  <a
                                    href={`#`}
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
                    <a href={navigation ? `/blog/${navigation.previous}` : ""} className={`nav-btn ${navigation && !navigation.previous ? "disabled" : ""}`}>
                      <i className="fa fa-arrow-left"></i>
                      <span>Previous Post</span>
                    </a>
                    <a href={navigation ? `/blog/${navigation.next}` : ""} className={`nav-btn ${navigation &&!navigation.next ? "disabled" : ""}`}>
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
                {/* <Categories categoriesData={meta && meta.categories} /> */}
                <RecentPosts recent={meta && meta.recent} />
                {/* <Tags tags={meta && meta.tags} />  */}
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

