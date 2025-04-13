/*
  Warnings:

  - You are about to drop the column `status` on the `actuator_log` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "actuator_log" DROP COLUMN "status";
