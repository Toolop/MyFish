import { Response, Request, NextFunction } from "express";
import { AddScheduleUseCase } from "../domain/usecase/schedule/post_usecase";
import { ScheduleQueryEntities } from "../domain/entities/schedule.entities";
import { GetScheduleUseCase } from "../domain/usecase/schedule/get_usecase";
import { ScheduleDetailUsecase } from "../domain/usecase/schedule/get_detail_usecase";
import { UpdateScheduleUseCase } from "../domain/usecase/schedule/update_usecase";
import { ScheduleDeleteUsecase } from "../domain/usecase/schedule/delete_usecase";

export const ScheduleController = (repository: any) => {
  const createSchedule = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await AddScheduleUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create location successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getSchedule = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let query: ScheduleQueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
      };
      const response = await GetScheduleUseCase(query, repository);
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
  const getScheduleDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await ScheduleDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get detail location successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  const updateSchedule = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UpdateScheduleUseCase(
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
  const deleteSchedule = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await ScheduleDeleteUsecase(parseInt(id), repository);
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
    getSchedule,
    getScheduleDetail,
    createSchedule,
    updateSchedule,
    deleteSchedule,
  };
};
