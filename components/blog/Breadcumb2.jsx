import Link from "next/link";
import React from "react";

export default function Breadcumb2({blogTitle}) {
  const decodedBlogTitle = blogTitle.replace(/-/g, ' ');
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
              <Link scroll={false} href="/blog">
                Blog
              </Link>
            </li>
            <li>{decodedBlogTitle}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
