import { PrismaClient } from "@prisma/client";
import {
  SensorCreateEntities,
  SensorEntities,
  SensorQueryEntities,
} from "../entities/sensor.entities";

const prisma = new PrismaClient();

export interface SensorRepository {
  getAll(query: SensorQueryEntities): Promise<SensorEntities[]>;
  findFirst(param: any): Promise<SensorEntities | null>;
  add(sensorCreateEntities: SensorCreateEntities): Promise<SensorEntities>;
  update(
    id: number,
    sensor: SensorCreateEntities
  ): Promise<SensorEntities | null>;
  count(query: SensorQueryEntities): Promise<number>;
  delete(id: number): Promise<SensorEntities | null>;
}

export class SensorRepositoryImpl implements SensorRepository {
  async getAll(query: SensorQueryEntities): Promise<SensorEntities[]> {
    const result = await prisma.sensor.findMany({
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
    return result as SensorEntities[];
  }

  async findFirst(param: any): Promise<SensorEntities | null> {
    const result = await prisma.sensor.findFirst({
      where: param,
    });
    return result;
  }

  async add(
    sensorCreateEntities: SensorCreateEntities
  ): Promise<SensorEntities> {
    const result = await prisma.sensor.create({
      data: sensorCreateEntities,
    });
    return result;
  }

  async update(
    id: number,
    sensor: SensorCreateEntities
  ): Promise<SensorEntities | null> {
    const result = await prisma.sensor.update({
      where: {
        id,
      },
      data: sensor,
    });
    return result;
  }

  async delete(id: number): Promise<SensorEntities | null> {
    const result = await prisma.sensor.delete({
      where: {
        id,
      },
    });
    return result;
  }

  async count(query: any): Promise<number> {
    const result = await prisma.sensor.count({
      where: {
        name: {
          contains: query.search,
        },
      },
    });
    return result;
  }
}
