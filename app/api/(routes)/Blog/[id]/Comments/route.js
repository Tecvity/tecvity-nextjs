import { NextResponse } from "next/server";
import { getCommentsFromDB } from "@/app/api/controllers";

const COMMENT_TABLE = "BlogComments";

export const GET = async (req, { params }) => {
  const { id: blogId } = params;
  try {
    if (!blogId) 
      return NextResponse.json({ message: "Blog ID is required" }, { status: 400 });

    const result = await getCommentsFromDB(COMMENT_TABLE, blogId);

    if (!result.success) 
      throw new Error(result.message);
    
    if (!result.comments || result.comments.length === 0) 
      return NextResponse.json([], { status: 200 });
    
    return NextResponse.json(result.comments, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
