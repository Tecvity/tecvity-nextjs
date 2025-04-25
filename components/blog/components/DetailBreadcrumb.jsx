import Link from "next/link";

export default function DetailBreadcrumb({ blogTitle }) {
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
            <li>{blogTitle}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
