"use client";
import { useState, useEffect } from "react";
import Socials from "./components/Socials";
import Image from "next/image";
import FooterLinks from "./components/FooterLinks";
import { usePostData } from "@/utils/hooks";
// import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { response, isLoading, error, postData, reset } = usePostData();

  useEffect(() => {
    if (response) {
      setEmail("");
    }
  }, [isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await postData("/api/Email/Subscribe", { email });

    if (result && result.message) {
      setEmail("");
    }
  };

  return (
    <>
      <footer className="footer-wrapper footer-layout2 overflow-hidden">
        <div className="container">
          {/* <div className="footer-top space">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6">
                <h2 className="footer-top-title">Let’s Work Together</h2>
              </div>
              <div className="col-lg-5">
                <div className="footer-top-wrap">
                  <p className="mb-30">
                    We are software agency that helps businesses design, develop
                    and secure their infrastructure.
                  </p>
                  <Link scroll={false} href="/contact" className="btn">
                    <span className="link-effect">
                      <span className="effect-1">LET'S TALK WITH US</span>
                      <span className="effect-1">LET'S TALK WITH US</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          <div className="widget-area space-top">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-5 col-lg-6">
                <div className="widget widget-newsletter footer-widget">
                  <h3 className="widget_title">
                    Get valuable strategy, culture and brand insights straight
                    to your inbox
                  </h3>
                  <form onSubmit={handleSubmit} className="newsletter-form">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Your email here"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn" disabled={isLoading}>
                      <Image
                        width={13}
                        height={13}
                        src="/assets/img/icon/arrow-left-top.svg"
                        alt="icon"
                      />
                    </button>
                  </form>
                  {isLoading && <p>Loading...</p>}
                  {error && (
                    <p style={{ color: "red" }}>
                      {error?.response?.data.message}
                    </p>
                  )}
                  {response && !error && !isLoading ? (
                    <p>Successfully subscribed!</p>
                  ) : null}
                  <p>
                    Register to receive emails from Tecvity.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-xl-2 col-lg-3">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Links</h3>
                  <div className="menu-all-pages-container list-column2">
                    <ul className="menu">
                      <FooterLinks />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto col-lg-4">
                <div className="widget footer-widget widget-contact">
                  <h3 className="widget_title">Contact</h3>
                  <ul className="contact-info-list">
                    <li>
                      Venture Drive, Model Town, Lahore <br /> Pakistan
                    </li>
                    <li>
                      <a href="tel:923088438733">+92 308 8438733</a>
                      <br />
                      <a href="mailto:hello@tecvity.co">hello@tecvity.co</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright-wrap">
            <div className="row gy-3 justify-content-between align-items-center">
              <div className="col-md-6">
                <p className="copyright-text">
                  Copyright © {new Date().getFullYear()}{" "}
                  <a href="/">Tecvity</a>
                </p>
              </div>
              <div className="col-md-6 align-self-center">
                <div className="social-btn style3 justify-content-md-end">
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
