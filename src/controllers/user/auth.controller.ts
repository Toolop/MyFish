import { Response, Request, NextFunction } from "express";
import { loginUseCase } from "../../domain/usecase/auth/auth_usecase";
import { UserRepository } from "../../domain/repository/user.repository";
import { refreshUseCase } from "../../domain/usecase/auth/refresh_usecase";
import { AuthRepository } from "../../domain/repository/auth.repository";

export const AuthController = (
  repository: UserRepository,
  authRepository: AuthRepository
) => {
  const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const result = await loginUseCase(data, repository, authRepository);
      res
        .status(200)
        .cookie("refreshToken", result.refreshToken, {
          httpOnly: true,
          secure: process.env.NODEENV == "Production" ? false : true, // Set to true in production
          sameSite: "strict",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        .json({
          status: "success",
          message: "Login Success",
          accessToken: result.token,
        });
    } catch (err) {
      next(err);
    }
  };
  const refresh = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const refreshToken = req.cookies.refreshToken;
      const result = await refreshUseCase(refreshToken, authRepository);

      res.status(200).json({
        status: "success",
        message: "Refresh Token Berhasil",
        accessToken: result,
      });
    } catch (err) {
      next(err);
    }
  };

  return {
    login,
    refresh,
  };
};
