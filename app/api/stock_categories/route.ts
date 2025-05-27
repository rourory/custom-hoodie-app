import { prisma } from "@/prisma/prisma-clent";
import { NextResponse } from "next/server";

export async function GET() {
  const categories = await prisma.stock_categories.findMany({});
  return NextResponse.json(categories);
}
