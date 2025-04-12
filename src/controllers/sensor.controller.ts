import { Response, Request, NextFunction } from "express";
import { AddSensorUseCase } from "../domain/usecase/sensor/post_usecase";
import { SensorQueryEntities } from "../domain/entities/sensor.entities";
import { GetSensorUseCase } from "../domain/usecase/sensor/get_usecase";
import { SensorDetailUsecase } from "../domain/usecase/sensor/get_detail_usecase";
import { UpdateSensorUseCase } from "../domain/usecase/sensor/update_usecase";
import { SensorDeleteUsecase } from "../domain/usecase/sensor/delete_usecase";

export const SensorController = (repository: any) => {
  const createSensor = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await AddSensorUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create location successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getSensor = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let query: SensorQueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
      };
      const response = await GetSensorUseCase(query, repository);
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
  const getSensorDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await SensorDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get detail location successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  const updateSensor = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UpdateSensorUseCase(
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
  const deleteSensor = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await SensorDeleteUsecase(parseInt(id), repository);
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
    getSensor,
    getSensorDetail,
    createSensor,
    updateSensor,
    deleteSensor,
  };
};
