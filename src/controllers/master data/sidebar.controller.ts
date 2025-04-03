import { Response, Request, NextFunction } from "express";
import { decodedJWTService } from "../../domain/service/jwt.service";
import { QueryEntities } from "../../domain/entities/global/query_entities";
import { AddSidebarUseCase } from "../../domain/usecase/sidebar/post_usecase";
import { GetSidebarUseCase } from "../../domain/usecase/sidebar/get_usecase";
import { UpdateSidebarUseCase } from "../../domain/usecase/sidebar/update_usecase";
import { SidebarDetailUsecase } from "../../domain/usecase/sidebar/get_detail_usecase";
import { SidebarDeleteUsecase } from "../../domain/usecase/sidebar/delete_usecase";

export const SidebarController = (repository: any) => {
  const createSidebar = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await AddSidebarUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create sidebar successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getSidebars = async (
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
      const response = await GetSidebarUseCase(query, repository);
      res.status(200).json({
        status: "success",
        message: "get sidebar successful",
        data: response?.data,
        paging: response?.paging,
      });
    } catch (err) {
      next(err);
    }
  };
  const getSidebarsDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await SidebarDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get sidebar detail successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getSidebarByToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.header("Authorization") as string;
      const decoded = decodedJWTService(token.split(" ")[1]);
      const result = await SidebarDetailUsecase(decoded.userId, repository);
      res.status(200).json({
        status: "success",
        message: "get sidebar successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const updateSidebar = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UpdateSidebarUseCase(
        parseInt(id),
        req.body,
        repository
      );
      res.status(200).json({
        status: "success",
        message: "update sidebar successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const deleteSidebar = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await SidebarDeleteUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "delete sidebar successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  return {
    getSidebars,
    getSidebarsDetail,
    createSidebar,
    updateSidebar,
    deleteSidebar,
    getSidebarByToken,
  };
};
