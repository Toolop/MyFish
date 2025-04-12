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
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

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
    "companyId" INTEGER,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "greenhouses" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(300),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "locationId" INTEGER,

    CONSTRAINT "greenhouses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "things" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "icon" VARCHAR(100),
    "color" VARCHAR(50),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "isSeperate" BOOLEAN NOT NULL DEFAULT true,
    "greenhouseId" INTEGER,

    CONSTRAINT "things_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "things_log" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
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
    "typeSensorId" INTEGER NOT NULL,

    CONSTRAINT "sensors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "typeSensor" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "typeSensor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actuators" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "icon" TEXT,
    "color" TEXT,
    "thingsId" INTEGER,

    CONSTRAINT "actuators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actuator_log" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "statusLifeCycle" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "actuatorId" INTEGER,

    CONSTRAINT "actuator_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedules" (
    "id" SERIAL NOT NULL,
    "start_time" TEXT NOT NULL,
    "repeat" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "interval" INTEGER NOT NULL,
    "status_schedule" INTEGER NOT NULL,
    "hour" INTEGER[],
    "minute" INTEGER[],
    "dayOfWeek" INTEGER[] DEFAULT ARRAY[0, 1, 2, 3, 4, 5, 6, 7]::INTEGER[],
    "actuatorId" INTEGER NOT NULL,

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "automations" (
    "condition" TEXT NOT NULL,
    "status_lifecycle" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "constanta" INTEGER NOT NULL,
    "range" INTEGER NOT NULL,
    "sensorId" INTEGER,
    "actuatorId" INTEGER,

    CONSTRAINT "automations_pkey" PRIMARY KEY ("id")
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
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "sidebars_name_key" ON "sidebars"("name");

-- CreateIndex
CREATE UNIQUE INDEX "r_role_sidebar_sidebarId_roleId_key" ON "r_role_sidebar"("sidebarId", "roleId");

-- CreateIndex
CREATE UNIQUE INDEX "companies_name_key" ON "companies"("name");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_user" ADD CONSTRAINT "role_user_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_user" ADD CONSTRAINT "role_user_username_fkey" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "r_role_sidebar" ADD CONSTRAINT "r_role_sidebar_sidebarId_fkey" FOREIGN KEY ("sidebarId") REFERENCES "sidebars"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "r_role_sidebar" ADD CONSTRAINT "r_role_sidebar_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "locations" ADD CONSTRAINT "locations_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "greenhouses" ADD CONSTRAINT "greenhouses_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "locations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "things" ADD CONSTRAINT "things_greenhouseId_fkey" FOREIGN KEY ("greenhouseId") REFERENCES "greenhouses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "things_log" ADD CONSTRAINT "things_log_thingsId_fkey" FOREIGN KEY ("thingsId") REFERENCES "things"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sensors" ADD CONSTRAINT "sensors_thingsId_fkey" FOREIGN KEY ("thingsId") REFERENCES "things"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sensors" ADD CONSTRAINT "sensors_typeSensorId_fkey" FOREIGN KEY ("typeSensorId") REFERENCES "typeSensor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actuators" ADD CONSTRAINT "actuators_thingsId_fkey" FOREIGN KEY ("thingsId") REFERENCES "things"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actuator_log" ADD CONSTRAINT "actuator_log_actuatorId_fkey" FOREIGN KEY ("actuatorId") REFERENCES "actuators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_actuatorId_fkey" FOREIGN KEY ("actuatorId") REFERENCES "actuators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "automations" ADD CONSTRAINT "automations_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "sensors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "automations" ADD CONSTRAINT "automations_actuatorId_fkey" FOREIGN KEY ("actuatorId") REFERENCES "actuators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_username_fkey" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE CASCADE ON UPDATE CASCADE;
