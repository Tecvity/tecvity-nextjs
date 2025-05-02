import { NextResponse } from "next/server";
import { getMdxPostsRecursive } from "@/app/api/utils";

const directory = "portfolio";
export async function GET(req) {

  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "8", 10);

    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
        return NextResponse.json(
          {
            message: "Invalid 'page' or 'limit'. Both must be positive integers.",
          },
          { status: 400 }
        );
    }

      
    const posts = await getMdxPostsRecursive(directory);
    const total = posts.length;
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
    const paginatedPosts = posts.slice(startIndex, startIndex + limit);

    return NextResponse.json(
      {
        portfolio: paginatedPosts,
        currentPage: page,
        total,
        totalPages,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
