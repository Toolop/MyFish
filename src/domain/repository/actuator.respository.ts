import { PrismaClient } from "@prisma/client";
import {
  ActuatorCreateEntities,
  ActuatorEntities,
  ActuatorQueryEntities,
} from "../entities/actuator.entities";

const prisma = new PrismaClient();

export interface ActuatorRepository {
  getAll(query: ActuatorQueryEntities): Promise<ActuatorEntities[]>;
  findFirst(param: any): Promise<ActuatorEntities | null>;
  add(data: ActuatorCreateEntities): Promise<ActuatorEntities>;
  update(
    id: number,
    data: ActuatorCreateEntities
  ): Promise<ActuatorEntities | null>;
  count(query: ActuatorQueryEntities): Promise<number>;
  delete(id: number): Promise<ActuatorEntities | null>;
}

export class ActuatorRepositoryImpl implements ActuatorRepository {
  async getAll(query: ActuatorQueryEntities): Promise<ActuatorEntities[]> {
    const result = await prisma.actuator.findMany({
      where: {
        name: {
          contains: query.search,
        },
      },
      ...(query.page && query.page != 0 && query.limit && query.limit != 0
        ? {
            skip: (query.page - 1) * query.limit,
            take: query.limit,
          }
        : {}),
    });
    return result as ActuatorEntities[];
  }

  async findFirst(param: any): Promise<ActuatorEntities | null> {
    const result = await prisma.actuator.findFirst({
      where: param,
    });
    return result;
  }

  async add(data: ActuatorCreateEntities): Promise<ActuatorEntities> {
    const result = await prisma.actuator.create({
      data: data,
    });
    return result;
  }

  async update(
    id: number,
    data: ActuatorCreateEntities
  ): Promise<ActuatorEntities | null> {
    const result = await prisma.actuator.update({
      where: {
        id,
      },
      data: data,
    });
    return result;
  }

  async delete(id: number): Promise<ActuatorEntities | null> {
    const result = await prisma.actuator.delete({
      where: {
        id,
      },
    });
    return result;
  }

  async count(query: any): Promise<number> {
    const result = await prisma.actuator.count({
      where: {
        name: {
          contains: query.search,
        },
      },
    });
    return result;
  }
}
