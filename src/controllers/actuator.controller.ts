import { Response, Request, NextFunction } from "express";
import { AddActuatorUseCase } from "../domain/usecase/actuator/post_usecase";
import { GetActuatorUseCase } from "../domain/usecase/actuator/get_usecase";
import { ActuatorQueryEntities } from "../domain/entities/actuator.entities";
import { ActuatorDetailUsecase } from "../domain/usecase/actuator/get_detail_usecase";
import { UpdateActuatorUseCase } from "../domain/usecase/actuator/update_usecase";
import { ActuatorDeleteUsecase } from "../domain/usecase/actuator/delete_usecase";

export const ActuatorController = (repository: any) => {
  const createActuator = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await AddActuatorUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create company successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getActuator = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let query: ActuatorQueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
      };
      const response = await GetActuatorUseCase(query, repository);
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
  const getActuatorDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await ActuatorDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get detail company successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  const updateActuator = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UpdateActuatorUseCase(
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
  const deleteActuator = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await ActuatorDeleteUsecase(parseInt(id), repository);
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
    getActuator,
    getActuatorDetail,
    createActuator,
    updateActuator,
    deleteActuator,
  };
};
