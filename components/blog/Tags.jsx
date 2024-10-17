import { tags } from "@/data/categories-tags";
import { allBlogs } from "@/data/blogs";

export default function Tags() {
  const tagCounts = tags.reduce((acc, tag) => {
    const count = allBlogs.filter((blog) => blog.tags?.includes(tag.text)).length;
    acc[tag.id] = count;
    return acc;
  }, {});

  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Tags</h4>
      <div className="sidebar__tag-list">
        <ul className="list-wrap">
          {tags.map((tag) => (
            <li key={tag.id}>
              <a href={`/blog/tag/${tag.text}`} className={tagCounts[tag.id] > 0 ? "" : "disabled"}>
                {tag.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
