import { PrismaClient } from "@prisma/client";
import { RoleCreateEntities, RoleEntities } from "../entities/role/role_entities";
const prisma = new PrismaClient();

export interface RoleRepository {
  getAll(query: any): Promise<RoleEntities[]>;
  getById(id: number): Promise<RoleEntities | null>;
  findFirst(param: any): Promise<RoleEntities | null>;
  add(roleCreateEntities: RoleCreateEntities): Promise<RoleEntities>;
  update(id: number, role: RoleCreateEntities): Promise<RoleEntities | null>;
  count(query: any): Promise<number>;
  delete(id: number): Promise<RoleEntities | null>;
}

export class RoleRepositoryImpl implements RoleRepository {
  async getAll(query: any): Promise<RoleEntities[]> {
    const result = await prisma.role.findMany({
      where: {
        name: {
          contains: query.search,
        },
      },
      ...(
        query.page && query.page != 0 && query.limit && query.limit != 0 ?
          {
            skip: (query.page - 1) * query.limit,
            take: query.limit,
          } : {}),
    });
    return result;
  }
  async getById(id: number): Promise<RoleEntities | null> {
    throw new Error("Method not implemented.");
  }
  async findFirst(param: any): Promise<RoleEntities | null> {
    const result = await prisma.role.findFirst({
      where: param,
    });
    return result;
  }
  async add(roleCreateEntities: RoleCreateEntities): Promise<RoleEntities> {
    const result = await prisma.role.create({
      data: roleCreateEntities,
    });
    return result;
  }
  async update(
    id: number,
    role: RoleCreateEntities
  ): Promise<RoleEntities | null> {
    const result = await prisma.role.update({
      where: {
        id,
      },
      data: role,
    });
    return result;
  }

  async delete(id: number): Promise<RoleEntities | null> {
    const result = await prisma.role.delete({
      where: {
        id,
      },
    });
    return result;
  }
  async count(query: any): Promise<number> {
    const result = await prisma.role.count({
      where: {
        name: {
          contains: query.search,
        },
      },
    });
    return result;
  }
}
