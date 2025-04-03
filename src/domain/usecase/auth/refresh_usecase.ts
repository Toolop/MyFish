import {
  VerifyJWTRefreshService,
  decodedJWTRefreshService,
  SignJWTService,
} from "../../service/jwt.service";

import { AuthRepository } from "../../repository/auth.repository";
const jwt = require("jsonwebtoken");

export const refreshUseCase = async (
  refreshToken: string,
  authRepository: AuthRepository
) => {
  const find = await authRepository.getRefreshToken({
    refreshToken: refreshToken,
  });
  if (!find) {
    throw {
      statusCode: 400,
      message: "refresh token tidak ditemukan",
    };
  }
  const decoded = decodedJWTRefreshService(refreshToken);
  const token = await SignJWTService(decoded);
  return token;
};
