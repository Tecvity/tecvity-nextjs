import { tags } from "@/data/categories-tags";
import { categories } from "@/data/categories-tags";

function getCategoryCounts(blogs) {
  return categories.reduce((acc, category) => {
    const count = blogs.filter((blog) => blog.category === category.text).length;
    acc.push({
      id: category.id,
      text: category.text,
      count,
    });
    return acc;
  }, []);
}

function getTagCounts(blogs) {
  return tags.reduce((acc, tag) => {
    const count = blogs.filter((blog) => blog.tags?.includes(tag.text)).length;
    acc.push({
      id: tag.id,
      text: tag.text,
      count,
    });
    return acc;
  }, []);
}

export { getCategoryCounts, getTagCounts };
