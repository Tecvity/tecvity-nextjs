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

async function getMdxPosts(postType) {
  const directory = path.join(process.cwd(), "data", postType);
  const files = await fs.readdir(directory);

  const posts = await Promise.all(
    files.map(async (fileName) => {
      const filePath = path.join(directory, fileName);
      const fileContents = await fs.readFile(filePath, "utf-8");
      const { data, content } = matter(fileContents);

      return {
        ...data,
        content,
        slug: fileName.replace(/\.mdx?$/, ""),
      };
    })
  );

  return posts;
}

async function getMdxPostsRecursive(baseDir) {
  const rootDirectory = path.join(process.cwd(), "data", baseDir);
  
  async function getFilesRecursively(directory) {
    const entries = await fs.readdir(directory, { withFileTypes: true });
    
    const files = await Promise.all(
      entries.map(async (entry) => {
        const fullPath = path.join(directory, entry.name);
        
        if (entry.isDirectory()) {
          return getFilesRecursively(fullPath);
        } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
          const fileContents = await fs.readFile(fullPath, "utf-8");
          const { data, content } = matter(fileContents);
          const relativePath = path.relative(rootDirectory, fullPath);
          const category = path.dirname(relativePath) === '.' ? 
            'uncategorized' : 
            path.dirname(relativePath);
          
          return {
            ...data,
            content,
            slug: entry.name.replace(/\.mdx?$/, ""),
            category,
            fullPath: relativePath
          };
        }
        return null;
      })
    );
    return files.flat().filter(Boolean);
  }
  
  return getFilesRecursively(rootDirectory);
}

export { getAllBlogs, getMdxPosts, getMdxPostsRecursive };
