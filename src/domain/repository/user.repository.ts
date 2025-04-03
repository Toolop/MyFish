import { PrismaClient } from "@prisma/client";
import {
  UserCreateEntities,
  UserEntities,
} from "../entities/user/user_entities";
const prisma = new PrismaClient();

export interface UserRepository {
  getAll(query: any): Promise<UserEntities[]>;
  findFirst(param: any): Promise<UserEntities | null>;
  add(userCreateEntities: UserCreateEntities): Promise<UserEntities>;
  update(
    username: string,
    user: UserCreateEntities
  ): Promise<UserEntities | null>;
  updatePassword(
    username: string,
    password: string
  ): Promise<UserEntities | null>;
  count(query: any): Promise<number>;
  delete(username: string): Promise<UserEntities | null>;
}

export class UserRepositoryImpl implements UserRepository {
  async getAll(query: any): Promise<UserEntities[]> {
    const result = await prisma.user.findMany({
      include: {
        RoleUser: {
          include: {
            Role: true,
          },
        },
      },
      where: {
        email: {
          contains: query.search,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      ...(query.page && query.page != 0 && query.limit && query.limit != 0
        ? {
            skip: (query.page - 1) * query.limit,
            take: query.limit,
          }
        : {}),
    });
    return result;
  }

  async findFirst(param: any): Promise<UserEntities | null> {
    const result = await prisma.user.findFirst({
      include: {
        RoleUser: {
          include: {
            Role: true,
          },
        },
      },
      where: param,
    });
    return result;
  }
  async add(userCreateEntities: UserCreateEntities): Promise<UserEntities> {
    const result = await prisma.user.create({
      data: userCreateEntities,
    });
    return result;
  }
  async update(
    username: string,
    user: UserCreateEntities
  ): Promise<UserEntities | null> {
    const result = await prisma.user.update({
      where: {
        username,
      },
      data: user,
    });
    return result;
  }
  async updatePassword(
    username: string,
    password: string
  ): Promise<UserEntities | null> {
    const result = await prisma.user.update({
      where: {
        username,
      },
      data: {
        password: password,
      },
    });
    return result;
  }
  async delete(username: string): Promise<UserEntities | null> {
    const result = await prisma.user.delete({
      where: {
        username,
      },
    });
    return result;
  }
  async count(query: any): Promise<number> {
    const result = await prisma.user.count({
      where: {
        email: {
          contains: query.search,
        },
      },
    });
    return result;
  }
}
