import { socialMediaLinks, socialMediaSvgLinks } from "@/data/socials";
import React from "react";

export default function Socials() {
  return (
    <>
      {socialMediaLinks.map((link) => (
        <a key={link.id} href={link.href}>
          <span className="link-effect">
            <span className="effect-1">
              <i className={link.iconClass}></i>
            </span>
            <span className="effect-1">
              <i className={link.iconClass}></i>
            </span>
          </span>
        </a>
      ))}
    </>
  );
}
