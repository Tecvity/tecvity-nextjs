import { categories } from "@/data/categories-tags";

export default function Categories({ blogs }) {
  // Calculate the counts of blogs per category
  const categoryCounts = categories.reduce((acc, category) => {
    const count = blogs.filter((blog) => blog.category === category.text).length;
    acc[category.id] = count; // Link counts to category IDs
    return acc;
  }, {});

  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Categories</h4>
      <div className="sidebar__cat-list">
        <ul className="list-wrap">
          {categories.map((category) => (
            <li key={category.id}>
              <a
                href={`/blogs/category/${category.text
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className={categoryCounts[category.id] > 0 ? "" : "disabled"}
              >
                {category.text} ({categoryCounts[category.id] || 0})
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
