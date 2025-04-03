import { PrismaClient } from "@prisma/client";
import {
  RRoleUserCreateEntities,
  RRoleUserEntities,
  RRoleUserUpdateEntities,
} from "../entities/role/role_user_entities";
import { QueryEntities } from "../entities/global/query_entities";
const prisma = new PrismaClient();

export interface RoleUserRepository {
  getAll(query: QueryEntities): Promise<RRoleUserEntities[]>;
  findFirst(data: RRoleUserCreateEntities): Promise<RRoleUserEntities | null>;
  findById(id: number): Promise<RRoleUserEntities | null>;
  add(
    roleUserCreateEntities: RRoleUserCreateEntities
  ): Promise<RRoleUserEntities>;
  update(
    id: number,
    roleUser: RRoleUserUpdateEntities
  ): Promise<RRoleUserEntities | null>;
  count(query: QueryEntities): Promise<number>;
  delete(id: number): Promise<RRoleUserEntities | null>;
}

export class RoleUserRepositoryImpl implements RoleUserRepository {
  async getAll(query: any): Promise<RRoleUserEntities[]> {
    const result = await prisma.roleUser.findMany({
      ...(query.page && query.page != 0 && query.limit && query.limit != 0
        ? {
            skip: (query.page - 1) * query.limit,
            take: query.limit,
          }
        : {}),
    });
    return result;
  }

  async findFirst(
    data: RRoleUserCreateEntities
  ): Promise<RRoleUserEntities | null> {
    const result = await prisma.roleUser.findFirst({
      where: {
        AND: [{ roleId: data.roleId }, { username: data.username }],
      },
    });
    return result;
  }

  async findById(id: number): Promise<RRoleUserEntities | null> {
    const result = await prisma.roleUser.findFirst({
      where: {
        id,
      },
    });
    return result;
  }

  async add(
    roleUserCreateEntities: RRoleUserCreateEntities
  ): Promise<RRoleUserEntities> {
    const result = await prisma.roleUser.create({
      data: roleUserCreateEntities,
    });
    return result;
  }

  async update(
    id: number,
    roleUser: RRoleUserUpdateEntities
  ): Promise<RRoleUserEntities | null> {
    const result = await prisma.roleUser.update({
      where: {
        id,
      },
      data: roleUser,
    });
    return result;
  }

  async delete(id: number): Promise<RRoleUserEntities | null> {
    const result = await prisma.roleUser.delete({
      where: {
        id,
      },
    });
    return result;
  }

  async count(query: QueryEntities): Promise<number> {
    const result = await prisma.roleUser.count();
    return result;
  }
}
