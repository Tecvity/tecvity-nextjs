import { NextResponse } from "next/server";
import { getMdxPosts } from "@/app/api/utils";

const directory = "services";
export async function GET(req, { params }) {
  const { sub } = params;
  const { type } = params;

  try {
    const posts = await getMdxPosts(`${directory}/${type}`);
    const index = posts.findIndex((post) => post.slug === sub);
    const post = posts[index];

    if (!post)
      return NextResponse.json({ message: "post not found" }, { status: 404 });


    return NextResponse.json(
      {
        services: post,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
