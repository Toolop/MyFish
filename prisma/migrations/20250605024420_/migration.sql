-- CreateTable
CREATE TABLE "users" (
    "username" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "companyId" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "cards" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "logo" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "color" VARCHAR(100) NOT NULL,
    "textColor" VARCHAR(100) NOT NULL,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mascots" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "logo" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "color" VARCHAR(100) NOT NULL,
    "textColor" VARCHAR(100) NOT NULL,

    CONSTRAINT "mascots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mails" (
    "id" SERIAL NOT NULL,
    "from" VARCHAR(100) NOT NULL,
    "to" VARCHAR(500) NOT NULL,
    "body" VARCHAR(100000) NOT NULL,
    "header" VARCHAR(100000) NOT NULL,
    "photo" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "closing" VARCHAR(100000) NOT NULL,
    "color" VARCHAR(100) NOT NULL DEFAULT 'red',
    "cardId" INTEGER,
    "envelopeId" INTEGER,
    "mascotId" INTEGER,

    CONSTRAINT "mails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "envelops" (
    "id" SERIAL NOT NULL,
    "color" VARCHAR(100) NOT NULL,
    "textColor" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "logo" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "envelops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refresh_tokens" (
    "id" SERIAL NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),
    "username" VARCHAR(100),

    CONSTRAINT "refresh_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "cards_name_key" ON "cards"("name");

-- CreateIndex
CREATE UNIQUE INDEX "mascots_name_key" ON "mascots"("name");

-- CreateIndex
CREATE UNIQUE INDEX "mails_from_key" ON "mails"("from");

-- CreateIndex
CREATE UNIQUE INDEX "envelops_name_key" ON "envelops"("name");

-- AddForeignKey
ALTER TABLE "mails" ADD CONSTRAINT "mails_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "cards"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mails" ADD CONSTRAINT "mails_envelopeId_fkey" FOREIGN KEY ("envelopeId") REFERENCES "envelops"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mails" ADD CONSTRAINT "mails_mascotId_fkey" FOREIGN KEY ("mascotId") REFERENCES "mascots"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_username_fkey" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE CASCADE ON UPDATE CASCADE;
