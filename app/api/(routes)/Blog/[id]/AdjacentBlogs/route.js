import { NextResponse } from "next/server";
import { getAllBlogs } from "@/app/api/utils";

export async function GET(req, { params }) {
  const { id: title } = params;

  try {
    const blogs = await getAllBlogs();
    const currentIndex = blogs.findIndex((blog) => blog.slug === title);
    const current = blogs[currentIndex].slug;

    if (!current)
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });

    const next = currentIndex > 0 ? blogs[currentIndex - 1].slug : null;
    const previous =
      currentIndex < blogs.length - 1 ? blogs[currentIndex + 1].slug : null;

    return NextResponse.json({ current, next, previous }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
