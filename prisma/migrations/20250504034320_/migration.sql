/*
  Warnings:

  - Made the column `greenhouseId` on table `things` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "sensors" ADD COLUMN     "color" VARCHAR(50),
ALTER COLUMN "calibration" DROP NOT NULL;

-- AlterTable
ALTER TABLE "things" ALTER COLUMN "greenhouseId" SET NOT NULL;
