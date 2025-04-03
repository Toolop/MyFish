import { PrismaClient } from "@prisma/client";
import {
  CompanyCreateEntities,
  CompanyEntities,
} from "../entities/company.entities";

const prisma = new PrismaClient();

export interface CompanyRepository {
  getAll(query: any): Promise<CompanyEntities[]>;
  getById(id: number): Promise<CompanyEntities | null>;
  findFirst(param: any): Promise<CompanyEntities | null>;
  add(companyCreateEntities: CompanyCreateEntities): Promise<CompanyEntities>;
  update(
    id: number,
    company: CompanyCreateEntities
  ): Promise<CompanyEntities | null>;
  count(query: any): Promise<number>;
  delete(id: number): Promise<CompanyEntities | null>;
}

export class CompanyRepositoryImpl implements CompanyRepository {
  async getAll(query: any): Promise<CompanyEntities[]> {
    const result = await prisma.company.findMany({
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
  async getById(id: number): Promise<CompanyEntities | null> {
    throw new Error("Method not implemented.");
  }
  async findFirst(param: any): Promise<CompanyEntities | null> {
    const result = await prisma.company.findFirst({
      where: param,
    });
    return result;
  }
  async add(
    companyCreateEntities: CompanyCreateEntities
  ): Promise<CompanyEntities> {
    const result = await prisma.company.create({
      data: companyCreateEntities,
    });
    return result;
  }
  async update(
    id: number,
    company: CompanyCreateEntities
  ): Promise<CompanyEntities | null> {
    const result = await prisma.company.update({
      where: {
        id,
      },
      data: company,
    });
    return result;
  }

  async delete(id: number): Promise<CompanyEntities | null> {
    const result = await prisma.company.delete({
      where: {
        id,
      },
    });
    return result;
  }
  async count(query: any): Promise<number> {
    const result = await prisma.company.count({
      where: {
        name: {
          contains: query.search,
        },
      },
    });
    return result;
  }
}
