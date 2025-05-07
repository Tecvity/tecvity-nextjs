"use client";
import ImageSlider from "./ImageSlider";
import React, { useEffect, useState } from "react";
import RenderMDX from "./RenderMDX";
import { serialize } from 'next-mdx-remote/serialize';
export default function ProjectDetails({ project }) {
  const [serializedContent, setSerializedContent] = useState(null);
  const [serializedInfo, setSerializedInfo] = useState(null);
  
  const [ itemImages, setItemImages ] = useState([])
  useEffect(() => {
    if (project && project.portfolio) {
      setItemImages(project.portfolio.itemsImages);
      fetchSerializedContent();
      fetchSerializedInfo();
    }
  }, [project]);

  const fetchSerializedContent = async () => {
    const serialized = await getSerializedContent(project?.portfolio?.content);
    setSerializedContent(serialized);
  };

  const getSerializedContent = async (data) => {
    if (!data) return null;
    
    const serialized = await serialize(data);
    return serialized;
  };

  const fetchSerializedInfo = async () => {
    const { category, client, date } = project?.portfolio || {};
    const infoMarkdown = `
    - <span>Category:</span> ${category || "-"}
    - <span>Client:</span> ${client || "-"}
    - <span>Date:</span> ${date || "-"}
    `;
    const serialized = await getSerializedContent(infoMarkdown);
    setSerializedInfo(serialized);
  };

  return (
    <div className="project-details-page-area space">
      <div className="container">
      <ImageSlider itemImages={itemImages} />
        <div className="row justify-content-between flex-row-reverse">
          
           <div className="col-xl-3 col-lg-4">
            <div className="project-details-info mb-lg-0 mb-40">
              {/* <ul className="list-wrap">
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
              </ul> */}
              {serializedInfo && <RenderMDX content={serializedInfo} />}
            </div>
          </div>
          <div className="col-lg-8">
          <div className="title-area mb-35">
            <RenderMDX content={serializedContent} />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="inner__page-nav space-top mt-n1 mb-n1">
              <a href={project && project.prev ? `/our-portfolio/${project.portfolio.type}/${project.prev}` : ""} className={`nav-btn ${!project?.prev ? "disabled" : ""}`}>
                <i className="fa fa-arrow-left"></i>
                <span>
                  <span className="link-effect">
                    <span className="effect-1">Previous</span>
                    <span className="effect-1">Previous</span>
                  </span>
                </span>
              </a>
              <a href={project && project.next ? `/our-portfolio/${project.portfolio.type}/${project.next}` : ""} className={`nav-btn ${!project?.next ? "disabled" : ""}`}>
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
