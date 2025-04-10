import { PrismaClient } from "@prisma/client";
import { RoleMasterData } from "./masterData/role";
import { MenuMasterData } from "./masterData/menu";
import { HashService } from "../src/domain/service/hash.service";

const prisma = new PrismaClient();

const main = async () => {
  const HashedPassword = await HashService("password");
  const userCreate = await prisma.user.createMany({
    data: {
      username: "toolop2312",
      name: "Rafi Arya Nugraha",
      password: HashedPassword,
      email: "toolop2312@gmail.com",
    },
    skipDuplicates: true,
  });
  const resultRole = await prisma.role.createMany({
    data: RoleMasterData,
    skipDuplicates: true,
  });
  const resultMenu = await prisma.sidebar.createMany({
    data: MenuMasterData,
    skipDuplicates: true,
  });

  console.log({
    userCreate,
    resultRole,
    resultMenu,
  });
};
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
