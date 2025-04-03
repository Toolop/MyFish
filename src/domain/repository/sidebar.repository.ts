import { PrismaClient } from "@prisma/client";
import {
  SidebarCreateEntities,
  SidebarEntities,
} from "../entities/master/sidebar_entities";
const prisma = new PrismaClient();

export interface SidebarRepository {
  getAll(query: any): Promise<SidebarEntities[]>;
  findFirst(param: any): Promise<SidebarEntities | null>;
  add(sidebarCreateEntities: SidebarCreateEntities): Promise<SidebarEntities>;
  update(
    id: number,
    sidebar: SidebarCreateEntities
  ): Promise<SidebarEntities | null>;
  count(query: any): Promise<number>;
  delete(id: number): Promise<SidebarEntities | null>;
}

export class SidebarRepositoryImpl implements SidebarRepository {
  async getAll(query: any): Promise<SidebarEntities[]> {
    const result = await prisma.sidebar.findMany({
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
  async findFirst(param: any): Promise<SidebarEntities | null> {
    const result = await prisma.sidebar.findFirst({
      where: param,
    });
    return result;
  }
  async add(
    sidebarCreateEntities: SidebarCreateEntities
  ): Promise<SidebarEntities> {
    const result = await prisma.sidebar.create({
      data: sidebarCreateEntities,
    });
    return result;
  }
  async update(
    id: number,
    sidebar: SidebarCreateEntities
  ): Promise<SidebarEntities | null> {
    const result = await prisma.sidebar.update({
      where: {
        id,
      },
      data: sidebar,
    });
    return result;
  }

  async delete(id: number): Promise<SidebarEntities | null> {
    const result = await prisma.sidebar.delete({
      where: {
        id,
      },
    });
    return result;
  }
  async count(query: any): Promise<number> {
    const result = await prisma.sidebar.count({
      where: {
        name: {
          contains: query.search,
        },
      },
    });
    return result;
  }
}
