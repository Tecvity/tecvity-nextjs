import Link from "next/link";
import React from "react";

export default function Breadcumb2({portfolioTitle}) {

  return (
    <div className="breadcumb-wrapper style2 bg-smoke">
      <div className="container-fluid">
        <div className="breadcumb-content">
          <ul className="breadcumb-menu">
            <li>
              <Link scroll={false} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link scroll={false} href="/our-portfolio">
                Porfolio
              </Link>
            </li>
            <li>{portfolioTitle}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
