/*
  Warnings:

  - Added the required column `backgroundColor` to the `stock_images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "stock_images" ADD COLUMN     "backgroundColor" VARCHAR(255) NOT NULL;
