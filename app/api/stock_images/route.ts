import { prisma } from "@/prisma/prisma-clent";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const categoryName = req.nextUrl.searchParams.get("category_name") || "";

  const category = await prisma.stock_categories.findFirst({
    where: {
      categoryName,
    },
  });

  if (!category) {
    return NextResponse.json({
      error: "Category not found",
    });
  }

  const images = await prisma.stock_images.findMany({
    where: {
      category: category.id,
    },
  });

  return NextResponse.json(images);
}
