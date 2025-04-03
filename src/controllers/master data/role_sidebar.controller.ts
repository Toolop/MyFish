import { Response, Request, NextFunction, query } from "express";
import { decodedJWTService } from "../../domain/service/jwt.service";
import { AddRoleSidebarUseCase } from "../../domain/usecase/role_sidebar/post_usecase";
import { GetRoleSidebarUseCase } from "../../domain/usecase/role_sidebar/get_usecase";
import { RoleSidebarDetailUsecase } from "../../domain/usecase/role_sidebar/get_detail_usecase";
import { RoleSidebarDeleteUsecase } from "../../domain/usecase/role_sidebar/delete_usecase";
import { UpdateRoleSidebarUseCase } from "../../domain/usecase/role_sidebar/update_usecase";
import { RoleSidebarQueryEntities } from "../../domain/entities/role/role_sidebar_entities";
import { UpsertBatchRoleSidebarUseCase } from "../../domain/usecase/role_sidebar/upsert_batch_usecase";

export const RoleSidebarController = (repository: any) => {
  const createRoleSidebar = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await AddRoleSidebarUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create role sidebar successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getRoleSidebars = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let query: RoleSidebarQueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
        sidebarId:
          (req.query.sidebarId && parseInt(req.query.sidebarId as string)) ||
          undefined,
        roleId:
          (req.query.roleId && parseInt(req.query.roleId as string)) ||
          undefined,
      };
      let getDetail =
        req.query.detailed !== undefined &&
        (req.query.detailed === "true" ||
          parseInt(req.query.detailed as string) === 1);
      let getView =
        req.query.view !== undefined &&
        (req.query.view === "true" || parseInt(req.query.view as string) === 1);
      const response = await GetRoleSidebarUseCase(
        repository,
        query,
        getDetail,
        getView
      );

      res.status(200).json({
        status: "success",
        message: "get role sidebar successful",
        data: response?.data,
        paging: response?.paging,
      });
    } catch (err) {
      next(err);
    }
  };
  const getRoleSidebarsDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await RoleSidebarDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get role sidebar detail successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getRoleSidebarByToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.header("Authorization") as string;
      const decoded = decodedJWTService(token.split(" ")[1]);
      const result = await RoleSidebarDetailUsecase(decoded.userId, repository);
      res.status(200).json({
        status: "success",
        message: "get role sidebar successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const updateRoleSidebar = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UpdateRoleSidebarUseCase(
        parseInt(id),
        req.body,
        repository
      );
      res.status(200).json({
        status: "success",
        message: "update role sidebar successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const deleteRoleSidebar = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await RoleSidebarDeleteUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "delete role sidebar successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const upsertBatchRoleSidebar = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await UpsertBatchRoleSidebarUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "upsert batch role sidebar successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  return {
    getRoleSidebars,
    getRoleSidebarsDetail,
    createRoleSidebar,
    updateRoleSidebar,
    deleteRoleSidebar,
    getRoleSidebarByToken,
    upsertBatchRoleSidebar,
  };
};
