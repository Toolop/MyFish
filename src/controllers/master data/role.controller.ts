import { Response, Request, NextFunction } from "express";
import { decodedJWTService } from "../../domain/service/jwt.service";
import { AddRoleUseCase } from "../../domain/usecase/role/post_usecase";
import { RoleDetailUsecase } from "../../domain/usecase/role/get_detail_usecase";
import { GetRoleUseCase } from "../../domain/usecase/role/get_usecase";
import { UpdateRoleUseCase } from "../../domain/usecase/role/update_usecase";
import { RoleDeleteUsecase } from "../../domain/usecase/role/delete_usecase";
import { QueryEntities } from "../../domain/entities/global/query_entities";

export const RoleController = (repository: any) => {
  const createRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await AddRoleUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create role successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getRoles = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let query: QueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
      };
      const response = await GetRoleUseCase(query, repository);
      res.status(200).json({
        status: "success",
        message: "get role successful",
        data: response?.data,
        paging: response?.paging,
      });
    } catch (err) {
      next(err);
    }
  };
  const getRolesDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await RoleDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get detail role successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getRoleByToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.header("Authorization") as string;
      const decoded = decodedJWTService(token.split(" ")[1]);
      const result = await RoleDetailUsecase(decoded.userId, repository);
      res.status(200).json({
        status: "success",
        message: "get detail role successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const updateRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UpdateRoleUseCase(
        parseInt(id),
        req.body,
        repository
      );
      res.status(200).json({
        status: "success",
        message: "update role successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const deleteRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await RoleDeleteUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "delete role successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  return {
    getRoles,
    getRolesDetail,
    createRole,
    updateRole,
    deleteRole,
    getRoleByToken,
  };
};
