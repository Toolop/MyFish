import { PrismaClient } from "@prisma/client";
import {
  LocationCreateEntities,
  LocationEntities,
} from "../entities/location.entities";

const prisma = new PrismaClient();

export interface LocationRepository {
  getAll(query: any): Promise<LocationEntities[]>;
  getById(id: number): Promise<LocationEntities | null>;
  findFirst(param: any): Promise<LocationEntities | null>;
  add(
    locationCreateEntities: LocationCreateEntities
  ): Promise<LocationEntities>;
  update(
    id: number,
    location: LocationCreateEntities
  ): Promise<LocationEntities | null>;
  count(query: any): Promise<number>;
  delete(id: number): Promise<LocationEntities | null>;
}

export class LocationRepositoryImpl implements LocationRepository {
  async getAll(query: any): Promise<LocationEntities[]> {
    const result = await prisma.location.findMany({
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
  async getById(id: number): Promise<LocationEntities | null> {
    throw new Error("Method not implemented.");
  }
  async findFirst(param: any): Promise<LocationEntities | null> {
    const result = await prisma.location.findFirst({
      where: param,
    });
    return result;
  }
  async add(
    locationCreateEntities: LocationCreateEntities
  ): Promise<LocationEntities> {
    const result = await prisma.location.create({
      data: locationCreateEntities,
    });
    return result;
  }
  async update(
    id: number,
    location: LocationCreateEntities
  ): Promise<LocationEntities | null> {
    const result = await prisma.location.update({
      where: {
        id,
      },
      data: location,
    });
    return result;
  }

  async delete(id: number): Promise<LocationEntities | null> {
    const result = await prisma.location.delete({
      where: {
        id,
      },
    });
    return result;
  }
  async count(query: any): Promise<number> {
    const result = await prisma.location.count({
      where: {
        name: {
          contains: query.search,
        },
      },
    });
    return result;
  }
}
