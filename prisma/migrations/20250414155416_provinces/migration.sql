/*
  Warnings:

  - Added the required column `provinces` to the `locations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "locations" ADD COLUMN     "provinces" VARCHAR(100) NOT NULL;
