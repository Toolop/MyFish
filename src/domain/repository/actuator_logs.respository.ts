import { PrismaClient } from "@prisma/client";
import {
  ActuatorLogsCreateEntities,
  ActuatorLogsEntities,
  ActuatorLogsQueryEntities,
} from "../entities/actuator_logs.entities";

const prisma = new PrismaClient();

export interface ActuatorLogRepository {
  getAll(query: ActuatorLogsQueryEntities): Promise<ActuatorLogsEntities[]>;
  findFirst(param: any): Promise<ActuatorLogsEntities | null>;
  add(data: ActuatorLogsCreateEntities): Promise<ActuatorLogsEntities>;
  update(
    id: number,
    data: ActuatorLogsCreateEntities
  ): Promise<ActuatorLogsEntities | null>;
  count(query: ActuatorLogsQueryEntities): Promise<number>;
  delete(id: number): Promise<ActuatorLogsEntities | null>;
}

export class ActuatorLogRepositoryImpl implements ActuatorLogRepository {
  async getAll(
    query: ActuatorLogsQueryEntities
  ): Promise<ActuatorLogsEntities[]> {
    const result = await prisma.actuatorLog.findMany({
      where: {
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

  async findFirst(param: any): Promise<ActuatorLogsEntities | null> {
    const result = await prisma.actuatorLog.findFirst({
      where: param,
    });
    return result;
  }

  async add(data: ActuatorLogsCreateEntities): Promise<ActuatorLogsEntities> {
    const result = await prisma.actuatorLog.create({
      data: data,
    });
    return result;
  }

  async update(
    id: number,
    data: ActuatorLogsCreateEntities
  ): Promise<ActuatorLogsEntities | null> {
    const result = await prisma.actuatorLog.update({
      where: {
        id,
      },
      data: data,
    });
    return result;
  }

  async delete(id: number): Promise<ActuatorLogsEntities | null> {
    const result = await prisma.actuatorLog.delete({
      where: {
        id,
      },
    });
    return result;
  }

  async count(query: any): Promise<number> {
    const result = await prisma.actuatorLog.count({
      where: {},
    });
    return result;
  }
}
