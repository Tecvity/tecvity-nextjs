import { NextResponse } from "next/server";
import { getMdxPosts } from "@/app/api/utils";

const directory = "services";
export async function GET(req, { params }) {

  try {
    const { type } = params;
    
    const posts = await getMdxPosts(`${directory}/${type}`);

    return NextResponse.json(
      {
        posts
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
