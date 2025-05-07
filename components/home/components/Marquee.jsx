import { clients } from "@/data/clients";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="slider__marquee clearfix marquee-wrap theme-bg">
        <div className="marquee_mode marquee__group">
          <Marquee pauseOnHover={true}>
            {clients.slice(0, 6).map((elm, i) => (
              <h6 key={i} className="item m-item">
                <a href={elm.href}>
                  <span>
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
              </h6>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
