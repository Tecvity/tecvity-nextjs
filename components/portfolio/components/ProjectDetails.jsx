"use client";
import { allPortfolio } from "@/data/portfolio";
import ImageSlider from "./ImageSlider";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
export default function ProjectDetails({ portfolioTitle }) {
  const decodedProjectTitle = portfolioTitle.replace(/-/g, ' ');
  const portfolioItem =
  allPortfolio.filter((elm) => elm.title == decodedProjectTitle)[0] || allPortfolio[1];

  const currentIndex = allPortfolio.findIndex((project) => project.title === decodedProjectTitle);
  const nextProject = currentIndex >= 0 && currentIndex < allPortfolio.length - 1 ? allPortfolio[currentIndex + 1] : null;
  const prevProject = currentIndex > 0 ? allPortfolio[currentIndex - 1] : null;
  
  const itemsImages = portfolioItem.itemsImages;

  return (
    <div className="project-details-page-area space">
      <div className="container">
      <ImageSlider itemImages={itemsImages} />
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
              <a href={prevProject ? `/project-details/${prevProject.title.replace(/\s+/g, '-')}` : ""} className={`nav-btn ${!prevProject ? "disabled" : ""}`}>
                <i className="fa fa-arrow-left"></i>
                <span>
                  <span className="link-effect">
                    <span className="effect-1">Previous</span>
                    <span className="effect-1">Previous</span>
                  </span>
                </span>
              </a>
              <a href={nextProject ? `/project-details/${nextProject.title.replace(/\s+/g, '-')}` : ""} className={`nav-btn ${!nextProject ? "disabled" : ""}`}>
                <span>
                  <span className="link-effect">
                    <span className="effect-1">Next</span>
                    <span className="effect-1">Next</span>
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
