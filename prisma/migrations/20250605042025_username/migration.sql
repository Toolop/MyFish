-- DropIndex
DROP INDEX "mails_from_key";

-- AlterTable
ALTER TABLE "mails" ADD COLUMN     "username" VARCHAR(100);
