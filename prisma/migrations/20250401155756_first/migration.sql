-- CreateTable
CREATE TABLE "users" (
    "username" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sidebars" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "icon" VARCHAR(100) NOT NULL,
    "path" VARCHAR(100),
    "link" VARCHAR(100),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "sidebars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "r_role_sidebar" (
    "id" SERIAL NOT NULL,
    "sidebarId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "create" BOOLEAN NOT NULL DEFAULT false,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "update" BOOLEAN NOT NULL DEFAULT false,
    "delete" BOOLEAN NOT NULL DEFAULT false,
    "validate" BOOLEAN NOT NULL DEFAULT false,
    "isDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "r_role_sidebar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "logo" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "city" VARCHAR(100) NOT NULL,
    "address" VARCHAR(500) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "greenhouses" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(300),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "greenhouses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pond" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDelete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Pond_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "things" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "icon" VARCHAR(100),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "pondId" INTEGER,
    "isSeperate" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "things_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "things_log" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "statusLifeCycle" INTEGER NOT NULL,
    "thingsId" INTEGER,

    CONSTRAINT "things_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sensors" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "icon" VARCHAR(100),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "thingsId" INTEGER,

    CONSTRAINT "sensors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actuators" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "statusLifeCycle" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "icon" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "thingsId" INTEGER,

    CONSTRAINT "actuators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actuator_log" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "statusLifeCycle" INTEGER NOT NULL,
    "actuatorId" INTEGER,

    CONSTRAINT "actuator_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedules" (
    "id_actuator" INTEGER NOT NULL,
    "start_time" TEXT NOT NULL,
    "repeat" INTEGER NOT NULL,
    "id_schedule" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "interval" INTEGER NOT NULL,
    "status_schedule" INTEGER NOT NULL,
    "hour" INTEGER[],
    "minute" INTEGER[],
    "dayOfWeek" INTEGER[] DEFAULT ARRAY[0, 1, 2, 3, 4, 5, 6, 7]::INTEGER[],

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id_schedule")
);

-- CreateTable
CREATE TABLE "automations" (
    "id_actuator" INTEGER NOT NULL,
    "id_sensor" INTEGER NOT NULL,
    "condition" TEXT NOT NULL,
    "status_lifecycle" INTEGER NOT NULL,
    "id_automation" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "constanta" INTEGER NOT NULL,
    "range" INTEGER NOT NULL,

    CONSTRAINT "automations_pkey" PRIMARY KEY ("id_automation")
);

-- CreateTable
CREATE TABLE "refresh_tokens" (
    "id" SERIAL NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),
    "userUsername" VARCHAR(100),

    CONSTRAINT "refresh_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "sidebars_name_key" ON "sidebars"("name");

-- CreateIndex
CREATE UNIQUE INDEX "r_role_sidebar_sidebarId_roleId_key" ON "r_role_sidebar"("sidebarId", "roleId");

-- CreateIndex
CREATE UNIQUE INDEX "companies_name_key" ON "companies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Pond_name_key" ON "Pond"("name");

-- AddForeignKey
ALTER TABLE "r_role_sidebar" ADD CONSTRAINT "r_role_sidebar_sidebarId_fkey" FOREIGN KEY ("sidebarId") REFERENCES "sidebars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "r_role_sidebar" ADD CONSTRAINT "r_role_sidebar_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "things" ADD CONSTRAINT "things_pondId_fkey" FOREIGN KEY ("pondId") REFERENCES "Pond"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "things_log" ADD CONSTRAINT "things_log_thingsId_fkey" FOREIGN KEY ("thingsId") REFERENCES "things"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sensors" ADD CONSTRAINT "sensors_thingsId_fkey" FOREIGN KEY ("thingsId") REFERENCES "things"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actuators" ADD CONSTRAINT "actuators_thingsId_fkey" FOREIGN KEY ("thingsId") REFERENCES "things"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actuator_log" ADD CONSTRAINT "actuator_log_actuatorId_fkey" FOREIGN KEY ("actuatorId") REFERENCES "actuators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_userUsername_fkey" FOREIGN KEY ("userUsername") REFERENCES "users"("username") ON DELETE CASCADE ON UPDATE CASCADE;
