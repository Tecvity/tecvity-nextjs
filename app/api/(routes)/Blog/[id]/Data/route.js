import { NextResponse } from "next/server";
import { getAllBlogs } from "@/app/api/utils";

export async function GET(req, { params }) {
  const { id: title } = params;

  try {
    const blogs = await getAllBlogs();
    const index = blogs.findIndex((blog) => blog.slug === title);
    const blog = blogs[index];

    if (!blog)
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });

    const next = blogs[index - 1]?.slug || null;
    const prev = blogs[index + 1]?.slug || null;

    return NextResponse.json(
      {
        content: blog.content,
        blog: blog,
        next,
        prev,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
