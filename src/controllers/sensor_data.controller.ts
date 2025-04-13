import { Response, Request, NextFunction } from "express";
import DataListSensor from "../core/data/sensor.data";

export const SensorDataController = () => {
  const getSensorData = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = DataListSensor;
      res.status(200).json({
        status: "success",
        message: "get sensor data successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getSensorDataDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = DataListSensor[parseInt(id)];
      res.status(200).json({
        status: "success",
        message: "get detail sensor data successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  return {
    getSensorData,
    getSensorDataDetail,
  };
};
