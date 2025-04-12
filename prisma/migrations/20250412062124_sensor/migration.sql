/*
  Warnings:

  - Added the required column `calibration` to the `sensors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "automations" ADD COLUMN     "sensorLogId" INTEGER;

-- AlterTable
ALTER TABLE "sensors" ADD COLUMN     "calibration" TEXT NOT NULL;
