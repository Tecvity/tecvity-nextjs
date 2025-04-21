export default function Categories({ categoriesData }) {

  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Categories</h4>
      <div className="sidebar__cat-list">
        <ul className="list-wrap">
          {categoriesData && categoriesData.map((category) => (
            <li key={category.id}>
              <a
                href={`/blogs/category/${category.text
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className={category.count > 0 ? "" : "disabled"}
              >
                {category.text} ({category.count || 0})
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
