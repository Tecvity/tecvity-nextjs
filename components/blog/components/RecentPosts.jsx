import { allBlogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

function sortByDateDescending(posts) {
  return posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
}

export default function RecentPosts() {
  const recentThreePosts = sortByDateDescending(allBlogs).slice(0, 3);

  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Recent Posts</h4>
      <div className="sidebar__post-list">
        {recentThreePosts.map((post) => (
          <div key={post.id} className="sidebar__post-item">
            <div className="sidebar__post-thumb">
              <Link scroll={false} href={`/blogs/${post.title.replace(/\s+/g, '-').toLowerCase()}`}>
                <Image
                  width={80}
                  height={76}
                  src={post.smallImageUrl}
                  alt="img"
                />
              </Link>
            </div>
            <div className="sidebar__post-content">
              <h5 className="title">
                <Link scroll={false} href={`/blogs/${post.title.replace(/\s+/g, '-').toLowerCase()}`}>
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
