"use client";
import Image from "next/image";
import MobileMenuSocials from "./MobileMenuSocials";
import Link from "next/link";
import addGsap from "@/utils/addGsap";
import { useEffect } from "react";

export default function SideMenu({ isOpen, setIsOpen }) {
  useEffect(() => {
    addGsap();
  }, []);

  return (
    <div className={`sidemenu-wrapper  ${isOpen ? "show" : ""}`}>
      <div className="sidemenu-content">
        <button
          className="closeButton sideMenuCls"
          onClick={() => setIsOpen(false)}
        >
          <Image
            width={24}
            height={24}
            src="/assets/img/icon/close.svg"
            alt="icon"
          />
        </button>
        <div className="widget footer-widget">
          <div className="widget-about">
            <div className="footer-logo">
              <Link scroll={false} href="/">
                <Image
                  // width={86}
                  // height={24}
                  // src="/assets/img/logo-white.svg"
                  // alt="Ovation"
                />
              </Link>
            </div>
            <p className="about-text">
            Delivering Creative Technological Solutions
            </p>
            <div className="sidebar-wrap">
              <h6>Lahore, Pakistan</h6>
              
            </div>
            <div className="sidebar-wrap">
              <h6>
                <a href="tel:923088438733"> +92-308-8438733</a>
              </h6>
              <h6>
                <a href="mailto:hello@tecvity.co"> hello@tecvity.co</a>
              </h6>
            </div>
            <div className="social-btn style2">
              <MobileMenuSocials />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link
            scroll={false}
            href="/contact"
            className="chat-btn gsap-magnetic"
          >
            Let’s Talk with us
          </Link>
        </div>
      </div>
    </div>
  );
}
