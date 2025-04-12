import { Response, Request, NextFunction } from "express";
import { AddThingsLogUseCase } from "../domain/usecase/things_log/post_usecase";
import { GetThingsLogUseCase } from "../domain/usecase/things_log/get_usecase";
import { ThingsLogDetailUsecase } from "../domain/usecase/things_log/get_detail_usecase";
import { UpdateThingsLogUseCase } from "../domain/usecase/things_log/update_usecase";
import { ThingsLogDeleteUsecase } from "../domain/usecase/things_log/delete_usecase";
import { ThingsLogQueryEntities } from "../domain/entities/things_logs.entities";

export const ThingsLogController = (repository: any) => {
  const createThingsLog = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await AddThingsLogUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create location successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getThingsLog = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let query: ThingsLogQueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
      };
      const response = await GetThingsLogUseCase(query, repository);
      res.status(200).json({
        status: "success",
        message: "get location successful",
        data: response?.data,
        paging: response?.paging,
      });
    } catch (err) {
      next(err);
    }
  };
  const getThingsLogDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await ThingsLogDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get detail location successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  const updateThingsLog = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UpdateThingsLogUseCase(
        parseInt(id),
        req.body,
        repository
      );
      res.status(200).json({
        status: "success",
        message: "update location successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const deleteThingsLog = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await ThingsLogDeleteUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "delete location successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  return {
    getThingsLog,
    getThingsLogDetail,
    createThingsLog,
    updateThingsLog,
    deleteThingsLog,
  };
};
