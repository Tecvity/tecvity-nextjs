"use client";

import { testimonialData } from "@/data/testimonials";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false,
        },
      },
      // ... add more responsive settings
    ],
  };
  return (
    <div className="testimonial-area-1 space dark-bg shape-mockup-wrap">
      <div className="title-area justify-content-center text-center">
        <h2 className="light-color">Testimonials</h2>
      </div>
      
      <div>
      <div
        className="testimonial-img-1-1 shape-mockup wow img-custom-anim-right animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ right: "190px", top: "257px"}}
      >
        <Image
          width={416}
          height={460}
          src="/assets/img/testimonial/testimonial_3.jpg"
          alt="img"
        />
      </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Slider
              className="row global-carousel testi-slider3"
              {...settings}
            >
              {testimonialData.map((testimonial) => (
                <div key={testimonial.id} className="col-lg-4 sliderItem2">
                  <div className="testi-box style3">
                    <div className="quote-icon">
                      <Image
                        width={52}
                        height={32}
                        src="/assets/img/icon/quote.svg"
                        alt="icon"
                      />
                    </div>
                    <p className="testi-box_text">“{testimonial.text}”</p>
                    <div className="testi-box_profile">
                      <h4 className="testi-box_name">{testimonial.name}</h4>
                      <span className="testi-box_desig">
                        {testimonial.designation}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* <div>
      <div
        className="testimonial-img-1-1 shape-mockup wow img-custom-anim-right animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ right: "190px", top: "257px"}}
      >
        <Image
          width={416}
          height={460}
          src="/assets/img/testimonial/testimonial_3.jpg"
          alt="img"
        />
      </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Slider
              className="row global-carousel testi-slider3"
              {...settings}
            >
              {testimonialData.map((testimonial) => (
                <div key={testimonial.id} className="col-lg-4 sliderItem2">
                  <div className="testi-box style3">
                    <div className="quote-icon">
                      <Image
                        width={52}
                        height={32}
                        src="/assets/img/icon/quote.svg"
                        alt="icon"
                      />
                    </div>
                    <p className="testi-box_text">“{testimonial.text}”</p>
                    <div className="testi-box_profile">
                      <h4 className="testi-box_name">{testimonial.name}</h4>
                      <span className="testi-box_desig">
                        {testimonial.designation}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div> */}

    </div>
  );
}
