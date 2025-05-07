import { NextResponse } from "next/server";
import { getMdxPosts } from "@/app/api/utils";

const directory = "portfolio";

export async function GET(req, { params }) {
  const { title, type } = params;
  
  try {
    const posts = await getMdxPosts(`${directory}/${type}`);
    const post = posts.find((portfolio) => portfolio.slug === title);
    
    if (!post) {
      return NextResponse.json({ message: "Portfolio not found" }, { status: 404 });
    }
    
    const customDescription = `${post.title} - A ${post.category} project for ${post.client}. Completed in ${post.date}.`;
    
    return NextResponse.json({
      portfolio: {
        title: post.title,
        description: customDescription,
        image: post.imageSrc || (post.itemsImages && post.itemsImages.length > 0 ? post.itemsImages[0] : null),
        category: post.category,
        client: post.client,
        date: post.date,
        type: post.type,
        categoryLinks: post.categoryLinks
      }
    }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
