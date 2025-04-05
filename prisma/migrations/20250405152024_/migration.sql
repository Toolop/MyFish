/*
  Warnings:

  - You are about to drop the column `userUsername` on the `refresh_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `pondId` on the `things` table. All the data in the column will be lost.
  - You are about to drop the `Pond` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "refresh_tokens" DROP CONSTRAINT "refresh_tokens_userUsername_fkey";

-- DropForeignKey
ALTER TABLE "things" DROP CONSTRAINT "things_pondId_fkey";

-- AlterTable
ALTER TABLE "refresh_tokens" DROP COLUMN "userUsername",
ADD COLUMN     "username" VARCHAR(100);

-- AlterTable
ALTER TABLE "things" DROP COLUMN "pondId",
ADD COLUMN     "greenhouseId" INTEGER;

-- DropTable
DROP TABLE "Pond";

-- CreateTable
CREATE TABLE "role_user" (
    "id" SERIAL NOT NULL,
    "roleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDelete" BOOLEAN NOT NULL DEFAULT false,
    "username" VARCHAR(100) NOT NULL,

    CONSTRAINT "role_user_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "role_user" ADD CONSTRAINT "role_user_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_user" ADD CONSTRAINT "role_user_username_fkey" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "things" ADD CONSTRAINT "things_greenhouseId_fkey" FOREIGN KEY ("greenhouseId") REFERENCES "greenhouses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_username_fkey" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE CASCADE ON UPDATE CASCADE;
