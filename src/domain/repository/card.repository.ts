import { PrismaClient } from "@prisma/client";
import {
  CardCreateEntities,
  CardEntities,
  CardParamEntities,
  CardQueryEntities,
  CardUpdateEntities,
} from "../entities/card.entities";
const prisma = new PrismaClient();

export interface CardRepository {
  getAll(query: CardQueryEntities): Promise<CardEntities[]>;
  getById(id: number): Promise<CardEntities | null>;
  findFirst(param: CardParamEntities): Promise<CardEntities | null>;
  add(CardCreateEntities: CardCreateEntities): Promise<CardEntities>;
  update(id: number, Card: CardUpdateEntities): Promise<CardEntities | null>;
  count(query: CardQueryEntities): Promise<number>;
  delete(id: number): Promise<CardEntities | null>;
}

export class CardRepositoryImpl implements CardRepository {
  async getAll(query: CardQueryEntities): Promise<CardEntities[]> {
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
  async getById(id: number): Promise<CardEntities | null> {
    throw new Error("Method not implemented.");
  }
  async findFirst(param: CardParamEntities): Promise<CardEntities | null> {
    const result = await prisma.card.findFirst({
      where: param,
    });
    return result;
  }
  async add(CardCreateEntities: CardCreateEntities): Promise<CardEntities> {
    const result = await prisma.card.create({
      data: CardCreateEntities,
    });
    return result;
  }
  async update(
    id: number,
    Card: CardCreateEntities
  ): Promise<CardEntities | null> {
    const result = await prisma.card.update({
      where: {
        id,
      },
      data: Card,
    });
    return result;
  }

  async delete(id: number): Promise<CardEntities | null> {
    const result = await prisma.card.delete({
      where: {
        id,
      },
    });
    return result;
  }
  async count(query: CardQueryEntities): Promise<number> {
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
