import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

async function getAllBlogs() {
  const blogsDirectory = path.join(process.cwd(), "data", "blogs");
  const files = await fs.readdir(blogsDirectory);

  const blogs = await Promise.all(
    files.map(async (fileName) => {
      const filePath = path.join(blogsDirectory, fileName);
      const fileContents = await fs.readFile(filePath, "utf-8");
      const { data, content } = matter(fileContents);

      return {
        ...data,
        content,
        slug: fileName.replace(/\.mdx?$/, ""),
      };
    })
  );

  return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export { getAllBlogs };
