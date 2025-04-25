import { NextResponse } from "next/server";
import { getAllBlogs } from "@/app/api/utils";
import { getCategoryCounts, getTagCounts } from "@/app/api/utils";

export async function GET() {
  try {
    const blogs = await getAllBlogs();

    const categories = getCategoryCounts(blogs);
    const tags = getTagCounts(blogs);
    const recent = blogs.slice(0, 3);

    return NextResponse.json(
      {
        categories,
        tags,
        recent,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
