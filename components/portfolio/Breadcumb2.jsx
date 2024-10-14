import Link from "next/link";
import React from "react";

export default function Breadcumb2({portfolioTitle}) {
  const decodedProjectTitle = portfolioTitle.replace(/-/g, ' ');
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
              <Link scroll={false} href="/project">
                Porfolio
              </Link>
            </li>
            <li>{decodedProjectTitle}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
