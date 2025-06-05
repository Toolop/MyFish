import { PrismaClient } from "@prisma/client";
import {
  MascotCreateEntities,
  MascotEntities,
  MascotParamEntities,
  MascotQueryEntities,
  MascotUpdateEntities,
} from "../entities/mascot.entities";
const prisma = new PrismaClient();

export interface MascotRepository {
  getAll(query: MascotQueryEntities): Promise<MascotEntities[]>;
  findFirst(param: MascotParamEntities): Promise<MascotEntities | null>;
  add(MascotCreateEntities: MascotCreateEntities): Promise<MascotEntities>;
  update(
    id: number,
    Mascot: MascotUpdateEntities
  ): Promise<MascotEntities | null>;
  count(query: MascotQueryEntities): Promise<number>;
  delete(id: number): Promise<MascotEntities | null>;
}

export class MascotRepositoryImpl implements MascotRepository {
  async getAll(query: MascotQueryEntities): Promise<MascotEntities[]> {
    const result = await prisma.card.findMany({
      where: {
        name: {
          contains: query.name,
        },
        logo: {
          contains: query.logo,
        },
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

  async findFirst(param: MascotParamEntities): Promise<MascotEntities | null> {
    const result = await prisma.card.findFirst({
      where: param,
    });
    return result;
  }
  async add(
    MascotCreateEntities: MascotCreateEntities
  ): Promise<MascotEntities> {
    const result = await prisma.card.create({
      data: MascotCreateEntities,
    });
    return result;
  }
  async update(
    id: number,
    Mascot: MascotCreateEntities
  ): Promise<MascotEntities | null> {
    const result = await prisma.card.update({
      where: {
        id,
      },
      data: Mascot,
    });
    return result;
  }

  async delete(id: number): Promise<MascotEntities | null> {
    const result = await prisma.card.delete({
      where: {
        id,
      },
    });
    return result;
  }
  async count(query: MascotQueryEntities): Promise<number> {
    const result = await prisma.card.count({
      where: {
        name: {
          contains: query.name,
        },
        logo: {
          contains: query.logo,
        },
      },
    });
    return result;
  }
}
