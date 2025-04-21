import { PrismaClient } from "@prisma/client";
import {
  AutomationCreateEntities,
  AutomationEntities,
  AutomationQueryEntities,
} from "../entities/automation.entities";

const prisma = new PrismaClient();

export interface AutomationRepository {
  getAll(query: AutomationQueryEntities): Promise<AutomationEntities[]>;
  findFirst(param: any): Promise<AutomationEntities | null>;
  add(data: AutomationCreateEntities): Promise<AutomationEntities>;
  update(
    id: number,
    data: AutomationCreateEntities
  ): Promise<AutomationEntities | null>;
  count(query: AutomationQueryEntities): Promise<number>;
  delete(id: number): Promise<AutomationEntities | null>;
}

export class AutomationRepositoryImpl implements AutomationRepository {
  async getAll(query: AutomationQueryEntities): Promise<AutomationEntities[]> {
    const result = await prisma.automation.findMany({
      where: {
        sensorId: query.sensorId,
        actuatorId: query.actuatorId,
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

  async findFirst(param: any): Promise<AutomationEntities | null> {
    const result = await prisma.automation.findFirst({
      where: param,
    });
    return result;
  }

  async add(
    automationCreateEntities: AutomationCreateEntities
  ): Promise<AutomationEntities> {
    const result = await prisma.automation.create({
      data: automationCreateEntities,
    });
    return result;
  }

  async update(
    id: number,
    data: AutomationCreateEntities
  ): Promise<AutomationEntities | null> {
    const result = await prisma.automation.update({
      where: {
        id,
      },
      data: data,
    });
    return result;
  }

  async delete(id: number): Promise<AutomationEntities | null> {
    const result = await prisma.automation.delete({
      where: {
        id,
      },
    });
    return result;
  }

  async count(query: any): Promise<number> {
    const result = await prisma.automation.count({
      where: {
        sensorId: query.sensorId,
        actuatorId: query.actuatorId,
      },
    });
    return result;
  }
}
