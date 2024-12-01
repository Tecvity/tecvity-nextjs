import Link from "next/link";
import { allBlogs } from "@/data/blogs";

export default function Breadcumb2({blogTitle}) {
  const decodedBlogTitle = blogTitle.replace(/-/g, ' ').toLowerCase();
  const blogItem = allBlogs.find((post) => post.title.toLowerCase() === decodedBlogTitle.toLowerCase()) || allBlogs[0];

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
              <Link scroll={false} href="/blogs">
                Blog
              </Link>
            </li>
            <li>{blogItem.title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
