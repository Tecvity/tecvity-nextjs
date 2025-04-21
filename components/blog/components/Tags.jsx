export default function Tags({ tags }) {
  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Tags</h4>
      <div className="sidebar__tag-list">
        <ul className="list-wrap">
          {tags && tags.map((tag) => (
            <li key={tag.id}>
              <a
                href={`/blogs/tag/${tag.text.toLowerCase()}`}
                className={tag.count > 0 ? "" : "disabled"}
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
