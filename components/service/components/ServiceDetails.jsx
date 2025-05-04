"use client";

import { allFeatures } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ServiceCards from "./ServiceCards";
import RenderMDX from "./RenderMDX";
import { serialize } from "next-mdx-remote/serialize";

export default function ServiceDetails({ serviceItem }) {

  const [serializedContent, setSerializedContent] = useState(null);

  useEffect(() => {
    if (serviceItem?.content) {
      const serializeContent = async () => {
        const result = await serialize(serviceItem.content);
        setSerializedContent(result);
      };
      serializeContent();
    }
  }, [serviceItem]);

  return (
    <div className="service-details-page mb-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {serializedContent && <RenderMDX content={serializedContent} />}
          <div className="col-xl-8">
             <ServiceCards cards={serviceItem?.cards}/>
            <div className="col-auto d-lg-block">
              <div className="service-portfolio-button">
                <Link scroll={false} href={`${serviceItem?.portfolioLink || "#"}`} className={`btn ${!serviceItem?.portfolioLink ? "disabled" : ""}`}>
                  <span className="link-effect">
                    <span className="effect-1">SHOW PROJECTS</span>
                    <span className="effect-1">SHOW PROJECTS</span>
                  </span>
                </Link>
                {serviceItem?.button}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
