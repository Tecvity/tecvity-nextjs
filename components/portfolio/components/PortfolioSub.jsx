"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, use } from "react";
import { useGetData } from "@/utils/hooks";

const projectVisibilityFactor = 8;
export default function Portfolio({sub}) {
  const { data , isLoading: pLoading, error: pError, getData: getPortfolio } = useGetData();
  const [ projects, setProjects ] = useState([]);
  const [ page, setPage ] = useState(1);
  
  useEffect(() => {
    if(!sub) return;
    if(sub){
      getPortfolio(`/api/Portfolio/${sub}?limit=${projectVisibilityFactor}&page=${page}`);
    }
  }, [page]);

  useEffect(() => {
    if(page > 1) {
      setProjects((prev) => [...prev, ...data?.portfolio]);
    } else {
      setProjects(data?.portfolio);
    }
  }, [data]);

  const loadMoreProjects = () => {
    setPage((prev) => prev + 1);
  };

  const hasMoreProjects = page < data?.totalPages;

  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div className="row gy-40 gx-60 justify-content-center">
          {projects && projects.map((elm, i) => (
            <div key={i} className="col-xl-6 col-lg-6">
              <div className="portfolio-wrap">
                <div className="portfolio-thumb">
                  <Link scroll={false} href={`/our-portfolio/${elm.type}/${elm.slug}`}>
                    <Image
                      width={618}
                      height={470}
                      src={elm.imageSrc}
                      alt="portfolio"
                    />
                  </Link>
                </div>
                <div className="portfolio-details">
                  <h3 className="portfolio-title mb-3">
                    <Link scroll={false} href={`/our-portfolio/${elm.type}/${elm.slug}`}>
                      {elm.title}
                    </Link>
                  </h3>
                  <ul className="portfolio-meta">
                    {elm.categoryLinks.map((elm2, i2) => (
                      <li key={i2}>
                        <a href="#">{elm2}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
          <div className="btn-wrap justify-content-center mt-60">
            <button
              scroll={false}
              className="btn"
              type="button"
              onClick={loadMoreProjects}
              disabled={!hasMoreProjects}
            >
              <span className="link-effect">
                <span className="effect-1">LOAD MORE</span>
                <span className="effect-1">LOAD MORE</span>
              </span>
            </button>
          </div>
      </div>
    </div>
  );
}
