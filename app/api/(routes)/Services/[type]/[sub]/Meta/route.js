import { NextResponse } from "next/server";
import { getMdxPosts } from "@/app/api/utils";

const directory = "services";

export async function GET(req, { params }) {
  const { sub, type } = params;
  
  try {
    const posts = await getMdxPosts(`${directory}/${type}`);
    const post = posts.find((post) => post.slug === sub);
    
    if (!post) {
      return NextResponse.json({ message: "Service not found" }, { status: 404 });
    }

    const customDescription = `${post.title} - ${post.text} Explore our professional ${post.title} services at Tecvity.`;
    
    return NextResponse.json({
      service: {
        title: post.title,
        description: customDescription,
        image: post.imageSrc1,
      }
    }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}