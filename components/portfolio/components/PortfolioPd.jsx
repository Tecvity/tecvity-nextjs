"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { useGetData } from "@/utils/hooks";

const projectVisibilityFactor = 6;

export default function Portfolio({ sub }) {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const { data, isLoading, error, getData } = useGetData();
  const sliderRef = useRef(null);

  // Fetch projects
  useEffect(() => {
    if (!sub) return;
    getData(`/api/Portfolio/${sub}?limit=${projectVisibilityFactor}&page=${page}`);
  }, [sub, page]);

  // Update project list
  useEffect(() => {
    if (!data || !data.portfolio) return;
    if (page === 1) {
      setProjects(data.portfolio);
    } else {
      setProjects((prev) => [...prev, ...data.portfolio]);
    }
  }, [data]);

  // Slick slider settings
  const slickSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
    draggable: true,
    swipe: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          verticalSwiping: false,
          swipe: true,
          swipeToSlide: true,
        },
      },
    ],
  };

  // Mouse wheel scroll
  const handleWheel = (e) => {
    if (sliderRef.current) {
      if (e.deltaY > 0) {
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickPrev();
      }
    }
  };

  const loadMoreProjects = () => {
    setPage((prev) => prev + 1);
  };

  const hasMoreProjects = page < (data?.totalPages || 1);

  return (
    <div className="project-area-12 overflow-hidden">
      <div className="container-fluid p-0">
        <div
          className="project-slider-showcase-wrap style2"
          onWheel={handleWheel}
        >
          <Slider
            ref={sliderRef}
            {...slickSettings}
            className="row g-0 global-carousel project-slider-showcase"
          >
            {projects.map((elm, i) => (
              <div className="col-lg-4" key={i}>
                <div className="portfolio-wrap style12">
                  <div className="portfolio-thumb">
                    <Image
                      width={1920}
                      height={800}
                      src={elm.imageSrc}
                      alt="portfolio"
                    />
                  </div>
                  <div className="portfolio-details">
                    <div className="media-left">
                      <ul className="portfolio-meta">
                        {elm.categoryLinks?.map((cat, i2) => (
                          <li key={i2}>
                            <a href="#">{cat}</a>
                          </li>
                        ))}
                      </ul>
                      <h3 className="portfolio-title">
                        <Link scroll={false} href={`/our-portfolio/${elm.type}/${elm.slug}`}>
                          {elm.title}
                        </Link>
                      </h3>
                    </div>
                    <div className="portfolio-details-btn">
                      <Link
                        scroll={false}
                        href={`/our-portfolio/${elm.type}/${elm.slug}`}
                        className="link-btn"
                      >
                        <span className="link-effect">
                          <span className="effect-1">VIEW PROJECT</span>
                          <span className="effect-1">VIEW PROJECT</span>
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
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
