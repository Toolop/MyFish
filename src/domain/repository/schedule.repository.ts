import { PrismaClient } from "@prisma/client";
import {
  ScheduleCreateEntities,
  ScheduleEntities,
  ScheduleQueryEntities,
} from "../entities/schedule.entities";

const prisma = new PrismaClient();

export interface ScheduleRepository {
  getAll(query: ScheduleQueryEntities): Promise<ScheduleEntities[]>;
  findFirst(param: any): Promise<ScheduleEntities | null>;
  add(
    scheduleCreateEntities: ScheduleCreateEntities
  ): Promise<ScheduleEntities>;
  update(
    id: number,
    schedule: ScheduleCreateEntities
  ): Promise<ScheduleEntities | null>;
  count(query: ScheduleQueryEntities): Promise<number>;
  delete(id: number): Promise<ScheduleEntities | null>;
}

export class ScheduleRepositoryImpl implements ScheduleRepository {
  async getAll(query: ScheduleQueryEntities): Promise<ScheduleEntities[]> {
    const result = await prisma.schedule.findMany({
      where: {
        actuatorId: query.actuatorId,
        status_schedule: query.statusSchedule,
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

  async findFirst(param: any): Promise<ScheduleEntities | null> {
    const result = await prisma.schedule.findFirst({
      where: param,
    });
    return result;
  }

  async add(
    scheduleCreateEntities: ScheduleCreateEntities
  ): Promise<ScheduleEntities> {
    const result = await prisma.schedule.create({
      data: scheduleCreateEntities,
    });
    return result;
  }

  async update(
    id: number,
    schedule: ScheduleCreateEntities
  ): Promise<ScheduleEntities | null> {
    const result = await prisma.schedule.update({
      where: {
        id,
      },
      data: schedule,
    });
    return result;
  }

  async delete(id: number): Promise<ScheduleEntities | null> {
    const result = await prisma.schedule.delete({
      where: {
        id,
      },
    });
    return result;
  }

  async count(query: any): Promise<number> {
    const result = await prisma.schedule.count({
      where: {},
    });
    return result;
  }
}
