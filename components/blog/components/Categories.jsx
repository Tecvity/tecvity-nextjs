import { categories } from '@/data/categories-tags';
import { allBlogs } from '@/data/blogs';

export default function Categories() {
  
  const categoryCounts = categories.reduce((acc, category) => {
    const count = allBlogs.filter(blog => blog.category === category.text).length;
    acc[category.id] = count; 
    return acc;
  }, {});

  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Categories</h4>
      <div className="sidebar__cat-list">
        <ul className="list-wrap">
          {categories.map((category) => (
            <li key={category.id}>
              <a href={`/blog/category/${category.text.replace(/\s+/g, "-")}`} className={categoryCounts[category.id]>0? "" : 'disabled'}>
                {category.text} ({categoryCounts[category.id]})
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
