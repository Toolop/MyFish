import { Response, Request, NextFunction } from "express";
import { ActuatorLogsQueryEntities } from "../domain/entities/actuator_logs.entities";
import { AddActuatorLogsUseCase } from "../domain/usecase/actuator_log/post_usecase";
import { GetActuatorLogsUseCase } from "../domain/usecase/actuator_log/get_usecase";
import { ActuatorLogsDetailUsecase } from "../domain/usecase/actuator_log/get_detail_usecase";
import { UpdateActuatorLogsUseCase } from "../domain/usecase/actuator_log/update_usecase";
import { ActuatorLogsDeleteUsecase } from "../domain/usecase/actuator_log/delete_usecase";

export const ActuatorLogsController = (repository: any) => {
  const createActuatorLogs = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await AddActuatorLogsUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create company successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getActuatorLogs = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let query: ActuatorLogsQueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
      };
      const response = await GetActuatorLogsUseCase(query, repository);
      res.status(200).json({
        status: "success",
        message: "get company successful",
        data: response?.data,
        paging: response?.paging,
      });
    } catch (err) {
      next(err);
    }
  };
  const getActuatorLogsDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await ActuatorLogsDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get detail company successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  const updateActuatorLogs = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UpdateActuatorLogsUseCase(
        parseInt(id),
        req.body,
        repository
      );
      res.status(200).json({
        status: "success",
        message: "update company successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const deleteActuatorLogs = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await ActuatorLogsDeleteUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "delete company successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  return {
    getActuatorLogs,
    getActuatorLogsDetail,
    createActuatorLogs,
    updateActuatorLogs,
    deleteActuatorLogs,
  };
};
