import { Response, Request, NextFunction } from "express";
import { decodedJWTService } from "../domain/service/jwt.service";
import { AddGreenhouseUseCase } from "../domain/usecase/greenhouse/post_usecase";
import { GreenhouseDetailUsecase } from "../domain/usecase/greenhouse/get_detail_usecase";
import { UpdateGreenhouseUseCase } from "../domain/usecase/greenhouse/update_usecase";
import { GreenhouseDeleteUsecase } from "../domain/usecase/greenhouse/delete_usecase";
import { GetGreenhouseUseCase } from "../domain/usecase/greenhouse/get_usecase";
import { GreenhouseQueryEntities } from "../domain/entities/greenhouse.entites";

export const GreenhouseController = (repository: any) => {
  const createGreenhouse = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await AddGreenhouseUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create greenhouse successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getGreenhouse = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let query: GreenhouseQueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
        locationId:
          (req.query.locationId && parseInt(req.query.locationId as string)) ||
          undefined,
      };
      const response = await GetGreenhouseUseCase(query, repository);
      res.status(200).json({
        status: "success",
        message: "get greenhouse successful",
        data: response?.data,
        paging: response?.paging,
      });
    } catch (err) {
      next(err);
    }
  };
  const getGreenhouseDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await GreenhouseDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get detail greenhouse successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getGreenhouseByToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.header("Authorization") as string;
      const decoded = decodedJWTService(token.split(" ")[1]);
      const result = await GreenhouseDetailUsecase(decoded.userId, repository);
      res.status(200).json({
        status: "success",
        message: "get detail greenhouse successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const updateGreenhouse = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UpdateGreenhouseUseCase(
        parseInt(id),
        req.body,
        repository
      );
      res.status(200).json({
        status: "success",
        message: "update greenhouse successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const deleteGreenhouse = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await GreenhouseDeleteUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "delete greenhouse successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  return {
    getGreenhouse,
    getGreenhouseDetail,
    createGreenhouse,
    updateGreenhouse,
    deleteGreenhouse,
    getGreenhouseByToken,
  };
};
