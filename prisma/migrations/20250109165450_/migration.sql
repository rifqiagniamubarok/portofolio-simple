/*
  Warnings:

  - You are about to drop the column `thumnail` on the `blog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "blog" DROP COLUMN "thumnail",
ADD COLUMN     "thumbnail" TEXT NOT NULL DEFAULT '/blogs/prismaNextJs.jpg';
