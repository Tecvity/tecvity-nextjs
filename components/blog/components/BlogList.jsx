"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import BlogSerchbar from "./BlogSearchbar";
import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Tags from "./Tags";
import Image from "next/image";
import {useGetData} from "@/utils/hooks";

const blogsPerPage = 6;

export default function BlogList({currrent = 1, limit = blogsPerPage, category = '', tag = ''}) {
  const { data: pagination, isLoading, error, getData: getPagination } = useGetData();
  const { data: meta, getData: getMeta } = useGetData();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=>{
    getPagination(`/api/Blog?page=${currentPage}&limit=${blogsPerPage}&category=${category}&tag=${tag}`);
    getMeta(`/api/Blog/Meta`);
  },[currentPage])

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
                  {pagination && pagination.blogs.map((blog, i) => (
                    <div key={i} className="col-md-6">
                      <div className="blog-post-item-two">
                        <div className="blog-post-thumb">
                          <Link scroll={false} href={`/blog/${blog.slug}`}>
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
                                  href={`/blog/category/${blog.category
                                    .replace(/\s+/g, "-")
                                    .toLowerCase()}`}
                                >
                                  {blog.category}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h4 className="title">
                            <Link scroll={false} href={`/blog/${blog.slug}`}>
                              {blog.title}
                            </Link>
                          </h4>
                          <Link
                            scroll={false}
                            href={`/blog/${blog.slug}`}
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
                  currentPage={pagination && pagination.currentPage}
                  totalPages={pagination && pagination.totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
            <div className="col-30">
              <aside className="blog__sidebar">
                <BlogSerchbar />
                <Categories categoriesData={meta && meta.categories} />
                <RecentPosts recent={meta && meta.recent} />
                <Tags tags={meta && meta.tags} />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}