import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="hero-wrapper hero-1" id="hero">
      <div className="container">
        <div className="hero-style1">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title wow img-custom-anim-left text-lg-end animated">
               Creating The
              </h1>
              <h1 className="hero-title wow text-lg-center img-custom-anim-left animated">
               Best Digital
              </h1>
              <h1 className="hero-title text-lg-end wow img-custom-anim-right animated">
                 Solution
              </h1>
            </div>
            
       

            <div className="col-lg-6 offset-lg-6">
              <p className="hero-text wow img-custom-anim-right animated">
                We are digital agency that helps businesses develop immersive
                and engaging user experiences that drive top level growth
              </p>
              {/* <div className="btn-group fade_right">
                <Link
                  scroll={false}
                  href="/project"
                  className="btn wow img-custom-anim-right animated"
                >
                  <span className="link-effect">
                    <span className="effect-1">VIEW OUR WORKS</span>
                    <span className="effect-1">VIEW OUR WORKS</span>
                  </span>
                </Link>
              </div> */}
             
            
            </div>
            
            <div class="flex flex-row gap-6 my-6">
  <div class="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-6">
    <div class="flex items-center mb-4">
      <h5 class="ml-3 text-slate-800 text-xl font-semibold">
        Website Review Check
      </h5>
    </div>
    <p class="block text-slate-600 leading-normal font-light mb-4">
      Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.
    </p>
    <div>
      <a href="#" class="text-slate-800 font-semibold text-sm hover:underline flex items-center">
        Learn More    
      </a>
    </div>
  </div>
  <div class="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-6">
    <div class="flex items-center mb-4">
      <h5 class="ml-3 text-slate-800 text-xl font-semibold">
        Website Review Check
      </h5>
    </div>
    <p class="block text-slate-600 leading-normal font-light mb-4">
      Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.
    </p>
    <div>
      <a href="#" class="text-slate-800 font-semibold text-sm hover:underline flex items-center">
        Learn More    
      </a>
    </div>
  </div>
  <div class="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 p-6">
    <div class="flex items-center mb-4">
      <h5 class="ml-3 text-slate-800 text-xl font-semibold">
        Website Review Check
      </h5>
    </div>
    <p class="block text-slate-600 leading-normal font-light mb-4">
      Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.
    </p>
    <div>
      <a href="#" class="text-slate-800 font-semibold text-sm hover:underline flex items-center">
        Learn More    
      </a>
    </div>
  </div>
</div>


          </div>
          
          {/* <div className="hero-year-tag wow img-custom-anim-left animated">
            <Image
              width={40}
              height={40}
              src="/assets/img/icon/worldwide.svg"
              alt="img"
            />
            <h6>Agency of this year worldwide</h6>
          </div> */}
          
        </div>
      </div>
    </div>
  );
}
