import { PrismaClient } from "@prisma/client";
import {
  EnvelopeCreateEntities,
  EnvelopeEntities,
  EnvelopeParamEntities,
  EnvelopeQueryEntities,
  EnvelopeUpdateEntities,
} from "../entities/envelope.entities";
const prisma = new PrismaClient();

export interface EnvelopeRepository {
  getAll(query: EnvelopeQueryEntities): Promise<EnvelopeEntities[]>;
  getById(id: number): Promise<EnvelopeEntities | null>;
  findFirst(param: EnvelopeParamEntities): Promise<EnvelopeEntities | null>;
  add(
    EnvelopeCreateEntities: EnvelopeCreateEntities
  ): Promise<EnvelopeEntities>;
  update(
    id: number,
    Envelope: EnvelopeUpdateEntities
  ): Promise<EnvelopeEntities | null>;
  count(query: EnvelopeQueryEntities): Promise<number>;
  delete(id: number): Promise<EnvelopeEntities | null>;
}

export class EnvelopeRepositoryImpl implements EnvelopeRepository {
  async getAll(query: EnvelopeQueryEntities): Promise<EnvelopeEntities[]> {
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
  async getById(id: number): Promise<EnvelopeEntities | null> {
    throw new Error("Method not implemented.");
  }
  async findFirst(
    param: EnvelopeParamEntities
  ): Promise<EnvelopeEntities | null> {
    const result = await prisma.card.findFirst({
      where: param,
    });
    return result;
  }
  async add(
    EnvelopeCreateEntities: EnvelopeCreateEntities
  ): Promise<EnvelopeEntities> {
    const result = await prisma.card.create({
      data: EnvelopeCreateEntities,
    });
    return result;
  }
  async update(
    id: number,
    Envelope: EnvelopeCreateEntities
  ): Promise<EnvelopeEntities | null> {
    const result = await prisma.card.update({
      where: {
        id,
      },
      data: Envelope,
    });
    return result;
  }

  async delete(id: number): Promise<EnvelopeEntities | null> {
    const result = await prisma.card.delete({
      where: {
        id,
      },
    });
    return result;
  }
  async count(query: EnvelopeQueryEntities): Promise<number> {
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
