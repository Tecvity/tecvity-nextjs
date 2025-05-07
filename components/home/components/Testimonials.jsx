"use client";

import { testimonialData } from "@/data/testimonials";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Video from "@/components/common/Video";

export default function Testimonials() {

  const sliderOptions = {
    slidesToShow: 2,
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="testimonial-area-8 space dot-style2 bg-title">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title text-smoke">Testimonials</h2>
            </div>
          </div>
        </div>
        
      <Video />
        <Slider
          {...sliderOptions}
          className="row global-carousel testi-slider3 dot-style2 border-in"
        >
          {testimonialData.map((elm, i) => (
            <div key={i} className="col-lg-6 sliderItem2">
              <div className="testi-box style3">
                <div className="quote-icon">
                  <Image
                    width={52}
                    height={32}
                    src="/assets/img/icon/quote.svg"
                    alt="icon"
                  />
                </div>
                <p className="testi-box_text">“{elm.text}”</p>
                {/* <div className="border hero-thumb-group">
                <Image
                    width={32}
                    height={32}
                    src="/assets/img/testimonial/pp3.png"
                    alt="icon"
                  /> */}
                <div className="testi-box_profile">
                  <h4 className="testi-box_name">{elm.name}</h4>
                  <span className="testi-box_desig">{elm.designation}</span>
                </div>
                {/* </div> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
