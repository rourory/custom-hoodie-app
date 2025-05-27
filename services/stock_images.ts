import { stock_images } from "@/generated/prisma";
import { fetcher } from "./base/fetcher";
import { Routes } from "./base/routes";

export const getImagesByCategoryName = async (categoryName: string) => {
  const result = await fetcher.get<stock_images[]>(Routes.STOCK_IMAGES, {
    params: { category_name: categoryName },
  });
  return result.data;
};
