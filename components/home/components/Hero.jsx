"use client";
import Image from "next/image";
import Link from "next/link";
import BookingModal from "./BookingModal"
import { useState } from "react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="hero-wrapper hero-1" id="hero">
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="hero-slider background-image por" style={{ backgroundImage: "url(/assets/img/service/bg-sample.jpg"}} >
      <div className="container">
        <div className="hero-style1">
        <div className="text-center mb-4 light-color fa-1x"><span className="glow-dot me-2"></span>  Top Rated Agency on Upwork</div>
          <div className="row">
            <div className="col-lg-12">
            <div className="text-center justify-content-center">
                <h1 className="hero-title wow img-custom-anim-top animated text-smoke">
                  We build fast,<br /> secure and scalable <br /> software
                </h1>
              </div>
            </div>
            <div>
              <div className="btn-group justify-content-center">
                <Link
                  scroll={false}
                  href="/our-portfolio"
                  className="btn style2 wow img-custom-anim-right animated"
                >
                  <span className="link-effect">
                    <span className="effect-1">VIEW OUR WORKS</span>
                    <span className="effect-1">VIEW OUR WORKS</span>
                  </span>
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn style3 wow img-custom-anim-right animated"
                >
                  <span className="link-effect">
                    <span className="effect-1">BOOK A FREE CALL</span>
                    <span className="effect-1">BOOK A FREE CALL</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-thumb-group img-custom-anim-right wow animated justify-content-center">
              <Image
                width={60}
                height={60}
                className="img1"
                src="/assets/img/hero/hero-counter1-1.png"
                alt="img"
              />
              <Image
                width={60}
                height={60}
                className="img2"
                src="/assets/img/hero/hero-counter1-2.png"
                alt="img"
              />
              <Image
                width={60}
                height={60}
                className="img2"
                src="/assets/img/hero/hero-counter1-2.png"
                alt="img"
              />
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
