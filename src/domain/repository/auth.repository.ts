import { PrismaClient } from "@prisma/client";
import {
  RefreshTokenCreate,
  RefreshTokenEntities,
  RefreshTokenUpdate,
} from "../entities/user/auth_entities";
const prisma = new PrismaClient();

export interface AuthRepository {
  createRefreshToken(data: RefreshTokenCreate): Promise<any>;
  getRefreshToken(param: any): Promise<RefreshTokenEntities | null>;
  updateRefreshToken(id: number, data: RefreshTokenUpdate): Promise<any | null>;
  deleteRefereshToken(id: any): Promise<any | null>;
}

export class AuthRepositoryImpl implements AuthRepository {
  async createRefreshToken(data: RefreshTokenCreate): Promise<any> {
    const result = await prisma.refreshToken.create({
      data,
    });
    return result;
  }
  async getRefreshToken(param: any): Promise<any | null> {
    const result = await prisma.refreshToken.findFirst({
      where: param,
    });
    return result;
  }
  async updateRefreshToken(
    id: number,
    data: RefreshTokenUpdate
  ): Promise<any | null> {
    const result = await prisma.refreshToken.update({
      where: {
        id,
      },
      data,
    });
    return result;
  }
  async deleteRefereshToken(id: any): Promise<any | null> {
    const result = await prisma.refreshToken.delete({
      where: {
        id,
      },
    });
    return result;
  }
}
