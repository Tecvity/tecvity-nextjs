import { NextResponse } from "next/server";
import { getAllBlogs } from "@/app/api/utils";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "6", 10);
    const category = searchParams.get("category")?.toLowerCase();
    const tag = searchParams.get("tag")?.toLowerCase();

    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
      return NextResponse.json(
        {
          message: "Invalid 'page' or 'limit'. Both must be positive integers.",
        },
        { status: 400 }
      );
    }

    let blogs = await getAllBlogs();
    if (category) {
      blogs = blogs.filter((blog) => blog.category?.toLowerCase() === category);
    }

    if (tag) {
      blogs = blogs.filter((blog) =>
        blog.tags?.map((t) => t.toLowerCase()).includes(tag)
      );
    }

    const total = blogs.length;
    const totalPages = Math.ceil(total / limit);

    if (page > totalPages && totalPages > 0) {
      return NextResponse.json(
        {
          message: `Page ${page} does not exist. Total pages: ${totalPages}`,
        },
        { status: 404 }
      );
    }

    const startIndex = (page - 1) * limit;
    const paginatedBlogs = blogs.slice(startIndex, startIndex + limit);

    return NextResponse.json(
      {
        blogs: paginatedBlogs,
        currentPage: page,
        totalPages,
        totalBlogs: total,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
