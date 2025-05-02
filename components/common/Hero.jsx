"use client";
import Image from "next/image";
import BookingModal from "./BookingModal"
import { useState } from "react";
import { clientImages } from "@/data/clients";

export default function Hero({ bgImage = "/assets/img/hero/bg-sample.jpg", title = "We build fast, secure and scalable software" }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="hero-wrapper hero-1" id="hero">
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="hero-slider background-image por" style={{ backgroundImage: `url(${bgImage})`}} >
      <div className="container">
        <div className="hero-style1">
        <div className="text-center mb-4 light-color fa-1x"><span className="glow-dot me-2"></span>  Top Rated Agency on Upwork</div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12 text-center w-25rem">
            <div className="text-center justify-content-center">
                <h1 className="hero-title wow img-custom-anim-top animated text-smoke">
                  {/* We build fast,<br /> secure and scalable <br /> software */}
                  {title}
                </h1>
              </div>
            </div>
            <div>
              <div className="btn-group justify-content-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn style2 wow img-custom-anim-right animated"
                >
                  <span className="link-effect">
                    <span className="effect-1">VIEW OUR WORKS</span>
                    <span className="effect-1">VIEW OUR WORKS</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-thumb-group img-custom-anim-right wow animated justify-content-center">
              {clientImages.map((img, index) => (
                <Image
                  key={index}
                  width={60}
                  height={60}
                  className={img.className}
                  src={img.src}
                  alt={`img-${index + 1}`}
                />
              ))}
              <p>
                More than <span className="counter-number">10</span>k+
                trusted customers
              </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
