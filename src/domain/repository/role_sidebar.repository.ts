import { PrismaClient } from "@prisma/client";
import {
  RoleSidebarCreateOrUpdateEntities,
  RoleSidebarDetailedEntities,
  RoleSidebarQueryEntities,
  RRoleSidebarCreateEntities,
  RRoleSidebarEntities,
  RRoleSidebarUpdateEntities,
} from "../entities/role/role_sidebar_entities";
const prisma = new PrismaClient();

export interface RoleSidebarRepository {
  getAll(
    query: RoleSidebarQueryEntities,
    detailed: boolean,
    view: boolean
  ): Promise<RRoleSidebarEntities[]>;
  findFirst(
    data: RRoleSidebarCreateEntities
  ): Promise<RRoleSidebarEntities | null>;
  findById(id: number): Promise<RRoleSidebarEntities | null>;
  add(
    roleSidebarCreateEntities: RRoleSidebarCreateEntities
  ): Promise<RRoleSidebarEntities>;
  update(
    id: number,
    roleSidebar: RRoleSidebarUpdateEntities
  ): Promise<RRoleSidebarEntities | null>;
  upsertBatch(
    data: RoleSidebarCreateOrUpdateEntities[]
  ): Promise<RRoleSidebarEntities[]>;
  count(query: any, view: boolean): Promise<number>;
  delete(id: number): Promise<RRoleSidebarEntities | null>;
}

export class RoleSidebarRepositoryImpl implements RoleSidebarRepository {
  async getAll(
    query: RoleSidebarQueryEntities,
    detailed: boolean = false,
    view: boolean = false
  ): Promise<RRoleSidebarEntities[]> {
    const result = await prisma.rRoleSidebar.findMany({
      where: {
        roleId: query.roleId,
        sidebarId: query.sidebarId,
        ...(view
          ? {
              OR: [
                { create: true },
                { read: true },
                { update: true },
                { delete: true },
              ],
            }
          : {}),
      },
      ...(detailed
        ? {
            include: {
              Sidebar: {},
            },
          }
        : {}),
      ...(query.page && query.page != 0 && query.limit && query.limit != 0
        ? {
            skip: (query.page - 1) * query.limit,
            take: query.limit,
          }
        : {}),
    });
    return result;
  }

  async findFirst(
    data: RRoleSidebarCreateEntities
  ): Promise<RRoleSidebarEntities | null> {
    const result = await prisma.rRoleSidebar.findFirst({
      where: {
        AND: [{ roleId: data.roleId }, { sidebarId: data.sidebarId }],
      },
    });
    return result;
  }
  async findById(id: number): Promise<RRoleSidebarEntities | null> {
    const result = await prisma.rRoleSidebar.findFirst({
      where: {
        id,
      },
    });
    return result;
  }

  async add(
    roleSidebarCreateEntities: RRoleSidebarCreateEntities
  ): Promise<RRoleSidebarEntities> {
    const result = await prisma.rRoleSidebar.create({
      data: roleSidebarCreateEntities,
    });
    return result;
  }

  async update(
    id: number,
    roleSidebar: RRoleSidebarUpdateEntities
  ): Promise<RRoleSidebarEntities | null> {
    const result = await prisma.rRoleSidebar.update({
      where: {
        id,
      },
      data: roleSidebar,
    });
    return result;
  }

  async upsertBatch(data: RoleSidebarCreateOrUpdateEntities[]): Promise<any> {
    return await prisma.$transaction(
      data.map(({ sidebarId, roleId, ...permissions }) =>
        prisma.rRoleSidebar.upsert({
          where: { sidebarId_roleId: { sidebarId, roleId } },
          update: permissions, // Update existing record
          create: {
            sidebarId,
            roleId,
            ...permissions,
          }, // Insert new record if not exists
        })
      )
    );
  }

  async delete(id: number): Promise<RRoleSidebarEntities | null> {
    const result = await prisma.rRoleSidebar.delete({
      where: {
        id,
      },
    });
    return result;
  }
  async count(query: any, view: boolean = false): Promise<number> {
    const result = await prisma.rRoleSidebar.count({
      where: {
        roleId: query.roleId,
        sidebarId: query.sidebarId,
        ...(view
          ? {
              OR: [
                { create: true },
                { read: true },
                { update: true },
                { delete: true },
              ],
            }
          : {}),
      },
    });
    return result;
  }
}
