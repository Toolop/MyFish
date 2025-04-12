import { Response, Request, NextFunction } from "express";
import { GetTypeSensorUseCase } from "../domain/usecase/type_sensor/get_usecase";
import { TypeSensorQueryEntities } from "../domain/entities/type_sensor.entities";
import { TypeSensorDetailUsecase } from "../domain/usecase/type_sensor/get_detail_usecase";
import { UpdateTypeSensorUseCase } from "../domain/usecase/type_sensor/update_usecase";
import { TypeSensorDeleteUsecase } from "../domain/usecase/type_sensor/delete_usecase";
import { AddTypeSensorUseCase } from "../domain/usecase/type_sensor/post_usecase";
import { TypeSensorRepository } from "../domain/repository/type_sensor.repository";

export const TypeSensorController = (repository: TypeSensorRepository) => {
  const createTypeSensor = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await AddTypeSensorUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create location successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getTypeSensor = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let query: TypeSensorQueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
      };
      const response = await GetTypeSensorUseCase(query, repository);
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
  const getTypeSensorDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await TypeSensorDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get detail location successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  const updateTypeSensor = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UpdateTypeSensorUseCase(
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
  const deleteTypeSensor = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await TypeSensorDeleteUsecase(parseInt(id), repository);
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
    getTypeSensor,
    getTypeSensorDetail,
    createTypeSensor,
    updateTypeSensor,
    deleteTypeSensor,
  };
};
