"use client";
import Link from "next/link";
import React, { useState } from "react";
import Pagination from "./Pagination";
import BlogSerchbar from "./BlogSearchbar";
import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Tags from "./Tags";
import Image from "next/image";

const blogsPerPage = 6;

export default function BlogList2({ blogs }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="blog__area space">
      <div className="container">
        <div className="blog__inner-wrap">
          <div className="row">
            <div className="col-70">
              <div className="blog-post-wrap">
                <div className="row gy-30 gutter-24">
                  {currentBlogs.map((blog, i) => (
                    <div key={i} className="col-md-6">
                      <div className="blog-post-item-two">
                        <div className="blog-post-thumb">
                          <Link scroll={false} href={`/blogs/${blog.slug}`}>
                            <Image
                              width={856}
                              height={600}
                              src={blog.image || "/default-blog-image.jpg"}
                              alt={blog.title || "Blog Image"}
                            />
                          </Link>
                        </div>
                        <div className="blog-post-content">
                          <div className="blog-post-meta">
                            <ul className="list-wrap">
                              <li>{blog.date}</li>
                              <li>
                                <a
                                  href={`/blogs/category/${blog.category
                                    .replace(/\s+/g, "-")
                                    .toLowerCase()}`}
                                >
                                  {blog.category}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h4 className="title">
                            <Link scroll={false} href={`/blogs/${blog.slug}`}>
                              {blog.title}
                            </Link>
                          </h4>
                          <Link
                            scroll={false}
                            href={`/blogs/${blog.slug}`}
                            className="link-btn"
                          >
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
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
            <div className="col-30">
              <aside className="blog__sidebar">
                <BlogSerchbar />
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
}