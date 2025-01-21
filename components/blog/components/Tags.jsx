import { tags } from "@/data/categories-tags";

export default function Tags({ blogs }) {
  // Calculate the counts of blogs per tag
  const tagCounts = tags.reduce((acc, tag) => {
    const count = blogs.filter((blog) => blog.tags?.includes(tag.text)).length;
    acc[tag.id] = count; // Link counts to tag IDs
    return acc;
  }, {});

  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Tags</h4>
      <div className="sidebar__tag-list">
        <ul className="list-wrap">
          {tags.map((tag) => (
            <li key={tag.id}>
              <a
                href={`/blogs/tag/${tag.text.toLowerCase()}`}
                className={tagCounts[tag.id] > 0 ? "" : "disabled"}
              >
                {tag.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
