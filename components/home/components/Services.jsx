import { ourServices } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Services() {
  return (
    <div className="feature-area-1 space-bottom space-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title">What We Can<br/> Do for you</h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 align-items-center justify-content-center">
          {ourServices.slice(0,3).map((elm, i) => (
            <div key={i} className="col-xl-4 col-md-6">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <Image width="40" height="40" src={elm.iconSrc} alt="icon" />
                </div>
                <h4 className="feature-card-title">
                <a href={`/our-services/${elm.title.replace(/\s+/g, '-').replace(/\//g, '_').toLowerCase()}`}>{elm.title}</a>
                </h4>
                <p className="feature-card-text">{elm.text}</p>
                <Link
                  scroll={false}
                  href={`/our-services/${elm.title.replace(/\s+/g, '-').replace(/\//g, '_').toLowerCase()}`}
                  className="link-btn"
                >
                  <span className="link-effect">
                    <span className="effect-1">VIEW DETAILS</span>
                    <span className="effect-1">VIEW DETAILS</span>
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
          ))}
        </div>
      </div>
    </div>
  );
}
