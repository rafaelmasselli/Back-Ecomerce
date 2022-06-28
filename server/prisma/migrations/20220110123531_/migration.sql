/*
  Warnings:

  - Added the required column `price` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requirement` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "price" TEXT NOT NULL,
ADD COLUMN     "requirement" TEXT NOT NULL;
