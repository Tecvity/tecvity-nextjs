"use client";
import addGsap from "@/utils/addGsap";
import React, { useEffect, useState } from "react";

import ModalVideo from "react-modal-video";
import { useParallax } from "react-scroll-parallax";
export default function Video() {
  const [isOpen, setIsOpen] = useState(false);
  const parallax = useParallax({
    speed: -20,
  });
  useEffect(() => {
    addGsap();
  }, []);

  return (
    <>
      <div className="video-area-1 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="video-wrap">
                <div
                  className="jarallax"
                  ref={parallax.ref}
                  style={{
                    backgroundImage: "url(/assets/img/service/s_vbg.png)",
                    backgroundSize: "cover",
                    height: "100vh",
                    position: "absolute",
                  }} ></div>

                <div className="video-thumbnail position-relative d-flex justify-content-center align-items-center"
                  style={{
                    position: "relative",
                    zIndex: 5,
                    height: "100vh"
                  }}>

                  <img src="https://img.youtube.com/vi/9_vZoq7Idus/default.jpg"               
                    className="video-thumbnail img-fluid"
                    style={{
                      width: "50vw",
                      height: "auto",
                      borderRadius: "8px",
                      opacity: 0.5,
                      maxWidth: "600px",
                    }}
                  />
                  <div
                    onClick={() => setIsOpen(true)}
                    className="play-btn circle-btn btn background-image">
                      <i class="fas fa-play"></i>  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 1 }}
        isOpen={isOpen}
        videoId="9_vZoq7Idus"
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
