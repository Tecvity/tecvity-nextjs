import { clients } from "@/data/clients";
import Image from "next/image";
import React from "react";

export default function Clients() {
  return (
    <div className="client-area-4 overflow-hidden space">
      <div className="container">        
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title text-dark">Our Clients</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <ul className="client-list-wrap">
              {clients.map((elm, i) => (
                <li key={i}>
                  <a href={elm.href}>
                    <span className="link-effect">
                      <span className="effect-1">
                        <Image
                          width={162}
                          height={35}
                          style={{
                            objectFit: "contain",
                            width: "162px",
                            height: "35px",
                          }}
                          src={elm.img}
                          alt="img"
                        />
                      </span>
                      <span className="effect-1">
                        <Image
                          width={162}
                          height={35}
                          style={{
                            objectFit: "contain",
                            width: "162px",
                            height: "35px",
                          }}
                          src={elm.img}
                          alt="img"
                        />
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
