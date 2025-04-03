import { AuthRepository } from "../../repository/auth.repository";
import { authEntities } from "../../entities/user/auth_entities";
import { UserRepository } from "../../repository/user.repository";
import { CompareHashService, HashService } from "../../service/hash.service";
import {
  SignJWTService,
  SignJWTServiceRefresh,
} from "../../service/jwt.service";
const jwt = require("jsonwebtoken");

export const loginUseCase = async (
  data: authEntities,
  repository: UserRepository,
  authRepository: AuthRepository
) => {
  let validate = false;
  const find = await repository.findFirst({ email: data.email });
  if (data.email == "" || data.password == "") {
    throw {
      statusCode: 400,
      message: "email atau password tidak boleh kosong",
    };
  }
  if (!find) {
    throw {
      statusCode: 400,
      message: "email tidak ditemukan",
    };
  }

  const isTrue = await CompareHashService(data.password, find.password);
  if (isTrue) {
    validate = true;
  }
  if (!validate) {
    throw {
      statusCode: 400,
      message: "paassword salah",
    };
  }

  const token = await SignJWTService(find);
  const refreshToken = await SignJWTServiceRefresh(find);

  await authRepository.createRefreshToken({
    username: find.username,
    refreshToken: refreshToken,
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  });
  return {
    token,
    refreshToken,
  };
};
