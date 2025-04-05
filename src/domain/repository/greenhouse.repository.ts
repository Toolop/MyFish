import { PrismaClient } from "@prisma/client";
import {
  GreenhouseCreateEntities,
  GreenhouseEntities,
} from "../entities/greenhouse.entites";

const prisma = new PrismaClient();

export interface GreenhouseRepository {
  getAll(query: any): Promise<GreenhouseEntities[]>;
  getById(id: number): Promise<GreenhouseEntities | null>;
  findFirst(param: any): Promise<GreenhouseEntities | null>;
  add(
    greenhouseCreateEntities: GreenhouseCreateEntities
  ): Promise<GreenhouseEntities>;
  update(
    id: number,
    greenhouse: GreenhouseCreateEntities
  ): Promise<GreenhouseEntities | null>;
  count(query: any): Promise<number>;
  delete(id: number): Promise<GreenhouseEntities | null>;
}

export class GreenhouseRepositoryImpl implements GreenhouseRepository {
  async getAll(query: any): Promise<GreenhouseEntities[]> {
    const result = await prisma.greenhouse.findMany({
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
    return result;
  }
  async getById(id: number): Promise<GreenhouseEntities | null> {
    throw new Error("Method not implemented.");
  }
  async findFirst(param: any): Promise<GreenhouseEntities | null> {
    const result = await prisma.greenhouse.findFirst({
      where: param,
    });
    return result;
  }
  async add(
    greenhouseCreateEntities: GreenhouseCreateEntities
  ): Promise<GreenhouseEntities> {
    const result = await prisma.greenhouse.create({
      data: greenhouseCreateEntities,
    });
    return result;
  }
  async update(
    id: number,
    greenhouse: GreenhouseCreateEntities
  ): Promise<GreenhouseEntities | null> {
    const result = await prisma.greenhouse.update({
      where: {
        id,
      },
      data: greenhouse,
    });
    return result;
  }

  async delete(id: number): Promise<GreenhouseEntities | null> {
    const result = await prisma.greenhouse.delete({
      where: {
        id,
      },
    });
    return result;
  }
  async count(query: any): Promise<number> {
    const result = await prisma.greenhouse.count({
      where: {
        name: {
          contains: query.search,
        },
      },
    });
    return result;
  }
}
