import { stock_categories } from "@/generated/prisma";
import { Routes } from "./base/routes";
import { fetcher } from "./base/fetcher";

export const getStockCategories = async () => {
  const result = await fetcher.get<stock_categories[]>(Routes.STOCK_CATEGORIES);
  return result.data;
};