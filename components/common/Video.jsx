"use client";
import addGsap from "@/utils/addGsap";
import React, { useEffect, useState } from "react";

import ModalVideo from "react-modal-video";
import { useParallax } from "react-scroll-parallax";
export default function Video({ videoId = "9_vZoq7Idus", thumbnail = "/assets/img/service/new.jpg" }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    addGsap();
  }, []);

  return (
    <>
      <div className="video-area-1 overflow-hidden mb-5">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="video-wrap">
                <div
                  className="jarallax"
                  style={{
                    backgroundImage: `url(${thumbnail})`,
                    backgroundSize: "cover",
                    height: "70vh",
                    position: "absolute",
                  }} ></div>

                <div className="video-thumbnail position-relative d-flex justify-content-center align-items-center"
                  style={{
                    position: "relative",
                    zIndex: 5,
                    height: "70vh"
                  }}>
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
        videoId={videoId}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
