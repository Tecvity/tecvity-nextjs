import { NextResponse } from "next/server";
import { getServiceMdxFiles } from "@/app/api/utils";
export async function GET() {

  try {
    const posts = await getServiceMdxFiles();

    return NextResponse.json(
      {
        services: ["no computation performed" ],
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
