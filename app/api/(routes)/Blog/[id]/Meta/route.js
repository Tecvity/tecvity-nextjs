import { NextResponse } from "next/server";
import { getAllBlogs } from "@/app/api/utils";

export async function GET(req, { params }) {
  const { id: slug } = params;
  
  try {
    const blogs = await getAllBlogs();
    const blog = blogs.find((blog) => blog.slug === slug);
    
    if (!blog) return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    
    const customDescription = `${blog.title} - Published on ${blog.date} by ${blog.author}. ${
      blog.category ? `Category: ${blog.category}.` : ''
    } ${blog.authorQuote ? `"${blog.authorQuote}"` : ''}`.trim();
    
    return NextResponse.json({
      blog: {
        title: blog.title,
        description: customDescription,
        image: blog.image,
      }
    }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
