import { Response, Request, NextFunction } from "express";
import { decodedJWTService } from "../domain/service/jwt.service";
import { AddThingsUseCase } from "../domain/usecase/things/post_usecase";
import { ThingsQueryEntities } from "../domain/entities/things.entities";
import { GetThingsUseCase } from "../domain/usecase/things/get_usecase";
import { ThingsDetailUsecase } from "../domain/usecase/things/get_detail_usecase";
import { UpdateThingsUseCase } from "../domain/usecase/things/update_usecase";
import { ThingsDeleteUsecase } from "../domain/usecase/things/delete_usecase";

export const ThingsController = (repository: any) => {
  const createThings = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await AddThingsUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create location successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getThings = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let query: ThingsQueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
        greenhouseId:
          (req.query.greenhouseId &&
            parseInt(req.query.greenhouseId as string)) ||
          undefined,
      };
      const response = await GetThingsUseCase(query, repository);
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
  const getThingsDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await ThingsDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get detail location successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getThingsByToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.header("Authorization") as string;
      const decoded = decodedJWTService(token.split(" ")[1]);
      const result = await ThingsDetailUsecase(decoded.userId, repository);
      res.status(200).json({
        status: "success",
        message: "get detail location successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const updateThings = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UpdateThingsUseCase(
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
  const deleteThings = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await ThingsDeleteUsecase(parseInt(id), repository);
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
    getThings,
    getThingsDetail,
    createThings,
    updateThings,
    deleteThings,
    getThingsByToken,
  };
};
