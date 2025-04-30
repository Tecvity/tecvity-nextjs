import Link from "next/link";
import React from "react";
import { allPortfolio } from "@/data/portfolio";

export default function Breadcumb2({portfolioTitle}) {
  const portfolioItem =
  allPortfolio.filter((elm) => elm.title.replace(/\s+/g, '-').toLowerCase() == portfolioTitle.toLowerCase())[0] || allPortfolio[1];


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
              <Link scroll={false} href="#">
                Porfolio
              </Link>
            </li>
            <li>{portfolioItem.title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
