import { Response, Request, NextFunction } from "express";
import { getUserUseCase } from "../../domain/usecase/user/get_usecase";
import { addUserUseCase } from "../../domain/usecase/user/post_usecase";
import { decodedJWTService } from "../../domain/service/jwt.service";
import { UserDetailUsecase } from "../../domain/usecase/user/get_detail_usecase";
import { updateUserUseCase } from "../../domain/usecase/user/update_usecase";
import { UserDeleteUsecase } from "../../domain/usecase/user/delete_usecase";
import { UserQueryEntities } from "../../domain/entities/user/user_entities";

export const UserController = (repository: any) => {
  const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await addUserUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create user successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let query: UserQueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
      };
      const response = await getUserUseCase(query, repository);
      res.status(200).json({
        status: "success",
        message: "get user successful",
        data: response?.data,
        paging: response?.paging,
      });
    } catch (err) {
      next(err);
    }
  };
  const getUsersDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UserDetailUsecase(id, repository);
      res.status(200).json({
        status: "success",
        message: "get user detail successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getUserByToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.header("Authorization") as string;
      const decoded = decodedJWTService(token.split(" ")[1]);
      const result = await UserDetailUsecase(decoded.userId, repository);
      res.status(200).json({
        status: "success",
        message: "get user successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { username } = req.params;
      const result = await updateUserUseCase(username, req.body, repository);
      res.status(200).json({
        status: "success",
        message: "update user successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { username } = req.params;
      const result = await UserDeleteUsecase(username, repository);
      res.status(200).json({
        status: "success",
        message: "delete user successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  return {
    getUsers,
    getUsersDetail,
    createUser,
    updateUser,
    deleteUser,
    getUserByToken,
  };
};
