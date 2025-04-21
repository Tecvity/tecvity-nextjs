import Image from "next/image";
import Link from "next/link";

export default function RecentPosts({ recent }) {
  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Recent Posts</h4>
      <div className="sidebar__post-list">
        {recent && recent.map((post, index) => (
          <div key={index} className="sidebar__post-item">
            <div className="sidebar__post-thumb">
              <Link scroll={false} href={`/blogs/${post.slug}`}>
                <Image
                  width={80}
                  height={76}
                  src={post.image || "/default-blog-image.jpg"}
                  alt="img"
                />
              </Link>
            </div>
            <div className="sidebar__post-content">
              <h5 className="title">
                <Link scroll={false} href={`/blogs/${post.slug}`}>
                  {post.title}
                </Link>
              </h5>
              <span className="date">
                <i className="flaticon-time"></i>
                {post.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
