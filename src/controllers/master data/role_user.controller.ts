import { Response, Request, NextFunction } from "express";
import { decodedJWTService } from "../../domain/service/jwt.service";
import { QueryEntities } from "../../domain/entities/global/query_entities";
import { AddRoleUserUseCase } from "../../domain/usecase/role_user/post_usecase";
import { GetRoleUserUseCase } from "../../domain/usecase/role_user/get_usecase";
import { GetRoleUserDetailUsecase } from "../../domain/usecase/role_user/get_detail_usecase";
import { UpdateRoleUserUseCase } from "../../domain/usecase/role_user/update_usecase";
import { DeleteRoleUserUsecase } from "../../domain/usecase/role_user/delete_usecase";

export const RoleUserController = (repository: any) => {
  const createRoleUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await AddRoleUserUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create role user successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getRoleUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let query: QueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
      };
      const response = await GetRoleUserUseCase(query, repository);
      res.status(200).json({
        status: "success",
        message: "get role user successful",
        data: response?.data,
        paging: response?.paging,
      });
    } catch (err) {
      next(err);
    }
  };
  const getRoleUsersDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await GetRoleUserDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get role user detail successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getRoleUserByToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.header("Authorization") as string;
      const decoded = decodedJWTService(token.split(" ")[1]);
      const result = await GetRoleUserDetailUsecase(decoded.userId, repository);
      res.status(200).json({
        status: "success",
        message: "get role user successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const updateRoleUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UpdateRoleUserUseCase(
        parseInt(id),
        req.body,
        repository
      );
      res.status(200).json({
        status: "success",
        message: "update role user successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const deleteRoleUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await DeleteRoleUserUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "delete role user successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  return {
    getRoleUsers,
    getRoleUsersDetail,
    createRoleUser,
    updateRoleUser,
    deleteRoleUser,
    getRoleUserByToken,
  };
};
