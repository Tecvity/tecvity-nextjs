import { NextResponse } from "next/server";


export const GET = async () => {
  try {
    return NextResponse.json( { message: "TEMPORARY ROUTE FOR TESTING ONLY",  status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};