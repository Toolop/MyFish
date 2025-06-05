import { PrismaClient } from "@prisma/client";
import {
  MailCreateEntities,
  MailEntities,
  MailParamEntities,
  MailQueryEntities,
  MailUpdateEntities,
} from "../entities/mail.entities";
const prisma = new PrismaClient();

export interface MailRepository {
  getAll(query: MailQueryEntities): Promise<MailEntities[]>;
  findFirst(param: MailParamEntities): Promise<MailEntities | null>;
  add(MailCreateEntities: MailCreateEntities): Promise<MailEntities>;
  update(id: number, Mail: MailUpdateEntities): Promise<MailEntities | null>;
  count(query: MailQueryEntities): Promise<number>;
  delete(id: number): Promise<MailEntities | null>;
}

export class MailRepositoryImpl implements MailRepository {
  async getAll(query: MailQueryEntities): Promise<MailEntities[]> {
    const result = await prisma.mail.findMany({
      where: {
        OR: [
          {
            from: {
              contains: query.search,
            },
          },
          {
            to: {
              contains: query.search,
            },
          },
        ],
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

  async findFirst(param: MailParamEntities): Promise<MailEntities | null> {
    const result = await prisma.mail.findFirst({
      where: param,
    });
    return result;
  }
  async add(MailCreateEntities: MailCreateEntities): Promise<MailEntities> {
    const result = await prisma.mail.create({
      data: MailCreateEntities,
    });
    return result;
  }
  async update(
    id: number,
    Mail: MailUpdateEntities
  ): Promise<MailEntities | null> {
    const result = await prisma.mail.update({
      where: {
        id,
      },
      data: Mail,
    });
    return result;
  }

  async delete(id: number): Promise<MailEntities | null> {
    const result = await prisma.mail.delete({
      where: {
        id,
      },
    });
    return result;
  }
  async count(query: MailQueryEntities): Promise<number> {
    const result = await prisma.mail.count({
      where: {
        OR: [
          {
            from: {
              contains: query.search,
            },
          },
          {
            to: {
              contains: query.search,
            },
          },
        ],
      },
    });
    return result;
  }
}
