import { PrismaClient } from "@prisma/client";
import {
  ThingsLogCreateEntities,
  ThingsLogEntities,
  ThingsLogQueryEntities,
} from "../entities/things_logs.entities";

const prisma = new PrismaClient();

export interface ThingsLogRepository {
  getAll(query: ThingsLogQueryEntities): Promise<ThingsLogEntities[]>;
  findFirst(param: any): Promise<ThingsLogEntities | null>;
  add(data: ThingsLogCreateEntities): Promise<ThingsLogEntities>;
  update(
    id: number,
    data: ThingsLogCreateEntities
  ): Promise<ThingsLogEntities | null>;
  count(query: ThingsLogQueryEntities): Promise<number>;
  delete(id: number): Promise<ThingsLogEntities | null>;
}

export class ThingsLogRepositoryImpl implements ThingsLogRepository {
  async getAll(query: ThingsLogQueryEntities): Promise<ThingsLogEntities[]> {
    const result = await prisma.thingsLog.findMany({
      ...(query.page && query.page != 0 && query.limit && query.limit != 0
        ? {
            skip: (query.page - 1) * query.limit,
            take: query.limit,
          }
        : {}),
    });
    return result;
  }

  async findFirst(param: any): Promise<ThingsLogEntities | null> {
    const result = await prisma.thingsLog.findFirst({
      where: param,
    });
    return result;
  }

  async add(
    thingsLogCreateEntities: ThingsLogCreateEntities
  ): Promise<ThingsLogEntities> {
    const result = await prisma.thingsLog.create({
      data: thingsLogCreateEntities,
    });
    return result;
  }

  async update(
    id: number,
    thingsLog: ThingsLogCreateEntities
  ): Promise<ThingsLogEntities | null> {
    const result = await prisma.thingsLog.update({
      where: {
        id,
      },
      data: thingsLog,
    });
    return result;
  }

  async delete(id: number): Promise<ThingsLogEntities | null> {
    const result = await prisma.thingsLog.delete({
      where: {
        id,
      },
    });
    return result;
  }

  async count(query: ThingsLogQueryEntities): Promise<number> {
    const result = await prisma.thingsLog.count({});
    return result;
  }
}
