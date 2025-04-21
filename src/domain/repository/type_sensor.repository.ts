import { PrismaClient } from "@prisma/client";
import {
  TypeSensorCreateEntities,
  TypeSensorEntities,
  TypeSensorQueryEntities,
} from "../entities/type_sensor.entities";

const prisma = new PrismaClient();

export interface TypeSensorRepository {
  getAll(query: TypeSensorQueryEntities): Promise<TypeSensorEntities[]>;
  findFirst(param: any): Promise<TypeSensorEntities | null>;
  add(
    typeSensorCreateEntities: TypeSensorCreateEntities
  ): Promise<TypeSensorEntities>;
  update(
    id: number,
    typeSensor: TypeSensorCreateEntities
  ): Promise<TypeSensorEntities | null>;
  count(query: TypeSensorQueryEntities): Promise<number>;
  delete(id: number): Promise<TypeSensorEntities | null>;
}

export class TypeSensorRepositoryImpl implements TypeSensorRepository {
  async getAll(query: any): Promise<TypeSensorEntities[]> {
    const result = await prisma.typeSensor.findMany({
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
      orderBy: {
        id: "desc",
      },
    });
    return result;
  }

  async findFirst(param: any): Promise<TypeSensorEntities | null> {
    const result = await prisma.typeSensor.findFirst({
      where: param,
    });
    return result;
  }

  async add(
    typeSensorCreateEntities: TypeSensorCreateEntities
  ): Promise<TypeSensorEntities> {
    const result = await prisma.typeSensor.create({
      data: typeSensorCreateEntities,
    });
    return result;
  }

  async update(
    id: number,
    typeSensor: TypeSensorCreateEntities
  ): Promise<TypeSensorEntities | null> {
    const result = await prisma.typeSensor.update({
      where: {
        id,
      },
      data: typeSensor,
    });
    return result;
  }

  async delete(id: number): Promise<TypeSensorEntities | null> {
    const result = await prisma.typeSensor.delete({
      where: {
        id,
      },
    });
    return result;
  }

  async count(query: any): Promise<number> {
    const result = await prisma.typeSensor.count({
      where: {
        name: {
          contains: query.search,
        },
      },
    });
    return result;
  }
}
