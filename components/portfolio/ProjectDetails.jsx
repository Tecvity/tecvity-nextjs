"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
export default function ProjectDetails({ portfolioTitle }) {
  const decodedProjectTitle = portfolioTitle.replace(/-/g, ' ');
  const portfolioItem =
  allPortfolio.filter((elm) => elm.title == decodedProjectTitle)[0] || allPortfolio[1];
  const itemsImages = [
    "/assets/img/portfolio/portfolio_inner_1.png",
    "/assets/img/portfolio/portfolio_inner_2.png",
  ];
  const slideroptions = {
    arrows: true,
    autoplay: true,
    prevArrow: (
      <button type="button" className="slick-prev slick-arrow">
        <i className="fas fa-arrow-left"></i>
      </button>
    ),

    nextArrow: (
      <button type="button" className="slick-next slick-arrow">
        <i className="fas fa-arrow-right"></i>
      </button>
    ),
  };
  return (
    <div className="project-details-page-area space">
      <div className="container">
        <Slider className="row global-carousel default" {...slideroptions}>
          {itemsImages.map((elm, i) => (
            <div key={i} className="col-xl-12">
              <div className="project-inner-thumb mb-80 wow img-custom-anim-top animated">
                <Image
                  width={1296}
                  height={700}
                  className="w-100"
                  src={elm}
                  alt="img"
                />
              </div>
            </div>
          ))}
        </Slider>

        <div className="row justify-content-between flex-row-reverse">
          <div className="col-xl-3 col-lg-4">
            <div className="project-details-info mb-lg-0 mb-40">
              <ul className="list-wrap">
                <li>
                  <span>Category:</span>{portfolioItem.category}
                </li>
               {portfolioItem.tech && <li>
                  <span>Technology:</span>{portfolioItem.tech}
                </li>}
              { portfolioItem.service &&  <li>
                  <span>Service:</span>{portfolioItem.service}
                </li>}
               { portfolioItem.client && <li>
                  <span>Client:</span>{portfolioItem.client}
                </li>}
                {portfolioItem.date && <li>
                  <span>Date:</span>{portfolioItem.date}
                </li>}
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h2 className="sec-title">{portfolioItem.title}</h2>
              <p className="sec-text mt-30">
                {portfolioItem?.para1}
              </p>
              <p className="sec-text mt-30">
                {portfolioItem?.para2}
              </p>
            </div>
            <h3>Challenge</h3>
            <p className="sec-text mb-n1">
              {portfolioItem?.challenge}
            </p>
            <h3 className="mt-35">Final Result</h3>
            <p className="sec-text mb-n1">
             {portfolioItem?.finalResult}
            </p>
          </div>
          <div className="col-lg-12">
            <div className="inner__page-nav space-top mt-n1 mb-n1">
              <a href="#" className="nav-btn">
                <i className="fa fa-arrow-left"></i>
                <span>
                  <span className="link-effect">
                    <span className="effect-1">Previous Project</span>
                    <span className="effect-1">Previous Project</span>
                  </span>
                </span>
              </a>
              <a href="#" className="nav-btn">
                <span>
                  <span className="link-effect">
                    <span className="effect-1">Next Project</span>
                    <span className="effect-1">Next Project</span>
                  </span>
                </span>
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
