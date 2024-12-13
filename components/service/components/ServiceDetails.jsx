"use client";

import { allFeatures } from "@/data/features";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetails({ serviceTitle }) {
  const decodedServiceTitle = decodeURIComponent(serviceTitle.replace(/-/g, ' ').replace(/_/g, '/'));
  const serviceItem =
    allFeatures.filter((elm) => elm.title.toLowerCase() == decodedServiceTitle.toLowerCase())[0] || allFeatures[1];

    const getRandomIcon = () => {
      const icons = [
        "feature-icon1-1",
        "feature-icon1-2",
        "feature-icon1-3",
        "feature-icon1-4",
        "feature-icon1-5",
        "feature-icon1-6"
      ];
      const randomIndex = Math.floor(Math.random() * icons.length);
      return `/assets/img/icon/${icons[randomIndex]}.svg`;
    };
    

  return (
    <div className="service-details-page">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-12">
            <div className="service-inner-thumb mb-80 wow img-custom-anim-top animated">
              <Image
                width={1296}
                height={700}
                className="w-100"
                src={serviceItem?.imageSrc1}
                alt="img"
              />
            </div>
          </div>
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title">{serviceItem?.title}</h2>
              <p className="sec-text mt-30">{serviceItem?.para1}</p>
              <p className="sec-text mt-30">{serviceItem?.para2}</p>
            </div>
            <h3>{serviceItem?.heading1}</h3>
            <p className="sec-text mb-n1">
            {serviceItem?.para3}
            </p>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-80">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: `url(${serviceItem?.imageSrc2})`,
                    overflow: "hidden",
                  }}
                ></div>
                <a
                  href="https://www.youtube.com/watch?v=vvNwlRLjLkU"
                  className="play-btn popup-video background-image"
                ></a>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <p className="sec-text mt-n1 mb-40">
            {serviceItem?.para4}
            </p>
            <h3>{serviceItem?.heading2}</h3>
            <p className="sec-text mt-30">
            {serviceItem?.para5}
            </p>
            <p className="sec-text mb-40 mt-30">
            {serviceItem?.para6}
            </p>
            {/* <div className="row gy-4">
              <div className="col-md-6">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Image
                      width={40}
                      height={40}
                      src="/assets/img/icon/feature-icon1-3.svg"
                      alt="icon"
                    />
                  </div>
                  <h4 className="feature-card-title">
                    <Link scroll={false} href="/our-portfolio">
                      Custom Solution
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    We care success relationships fuel success we love building
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Image
                      width={40}
                      height={40}
                      src="/assets/img/icon/feature-icon1-6.svg"
                      alt="icon"
                    />
                  </div>
                  <h4 className="feature-card-title">
                    <Link scroll={false} href="/our-portfolio">
                      In-time Result
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    We care success relationships fuel success we love building
                  </p>
                </div>
              </div>
            </div> */}
            <div className="row gy-4">
              {serviceItem?.cards?.map((card, index) => (
                <div key={index} className="col-md-6">
                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <Image
                        width={40}
                        height={40}
                        src={getRandomIcon()}
                        alt="icon"
                      />
                    </div>
                    <h4 className="feature-card-title">
                      <Link scroll={false} href={card.link || "/our-portfolio"}>
                        {card.title}
                      </Link>
                    </h4>
                    <p className="feature-card-text mb-n2">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="sec-text mb-n1 mt-40 space-bottom">
            {serviceItem?.para7}
            <div className="col-auto d-none d-lg-block">
                  <div className="service-portfolio-button">
                    <Link scroll={false} href="/our-portfolio/pd" className="btn">
                      <span className="link-effect">
                        <span className="effect-1">SHOW PROJECTS</span>
                        <span className="effect-1">SHOW PROJECTS</span>
                      </span>
                    </Link>
                    {serviceItem?.button}
                  </div>
            </div>      
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
