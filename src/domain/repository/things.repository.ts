import { PrismaClient } from "@prisma/client";
import {
  ThingsCreateEntities,
  ThingsEntities,
  ThingsQueryEntities,
} from "../entities/things.entities";

const prisma = new PrismaClient();

export interface ThingsRepository {
  getAll(query: ThingsQueryEntities): Promise<ThingsEntities[]>;
  findFirst(param: any): Promise<ThingsEntities | null>;
  add(thingsCreateEntities: ThingsCreateEntities): Promise<ThingsEntities>;
  update(
    id: number,
    things: ThingsCreateEntities
  ): Promise<ThingsEntities | null>;
  count(query: ThingsQueryEntities): Promise<number>;
  delete(id: number): Promise<ThingsEntities | null>;
}

export class ThingsRepositoryImpl implements ThingsRepository {
  async getAll(query: ThingsQueryEntities): Promise<ThingsEntities[]> {
    const result = await prisma.things.findMany({
      include: {
        Actuator: true,
        Sensor: {
          include: {
            typeSensor: true,
          },
        },
      },
      where: {
        name: {
          contains: query.search,
        },
        greenhouseId: query.greenhouseId,
      },
      ...(query.page && query.page != 0 && query.limit && query.limit != 0
        ? {
            skip: (query.page - 1) * query.limit,
            take: query.limit,
          }
        : {}),
      orderBy: {
        createdAt: "desc",
      },
    });
    return result;
  }
  async findFirst(param: any): Promise<ThingsEntities | null> {
    const result = await prisma.things.findFirst({
      where: param,
    });
    return result;
  }

  async add(
    thingsCreateEntities: ThingsCreateEntities
  ): Promise<ThingsEntities> {
    const result = await prisma.things.create({
      data: thingsCreateEntities,
    });
    return result;
  }

  async update(
    id: number,
    things: ThingsCreateEntities
  ): Promise<ThingsEntities | null> {
    const result = await prisma.things.update({
      where: {
        id,
      },
      data: things,
    });
    return result;
  }

  async delete(id: number): Promise<ThingsEntities | null> {
    const result = await prisma.things.delete({
      where: {
        id,
      },
    });
    return result;
  }

  async count(query: ThingsQueryEntities): Promise<number> {
    const result = await prisma.things.count({
      where: {
        name: {
          contains: query.search,
        },
        greenhouseId: query.greenhouseId,
      },
    });
    return result;
  }
}
