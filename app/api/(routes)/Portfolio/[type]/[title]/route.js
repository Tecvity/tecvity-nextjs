import { NextResponse } from "next/server";
import { getMdxPosts } from "@/app/api/utils";

const directory = "portfolio";
export async function GET(req, { params }) {
  const { title } = params;
  const { type } = params;

  try {
    const posts = await getMdxPosts(`${directory}/${type}`);
    const index = posts.findIndex((blog) => blog.slug === title);
    const post = posts[index];

    if (!post)
      return NextResponse.json({ message: "post not found" }, { status: 404 });

    const next = posts[index + 1]?.slug || null;
    const prev = posts[index - 1]?.slug || null;

    return NextResponse.json(
      {
        portfolio: post,
        next,
        prev,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
