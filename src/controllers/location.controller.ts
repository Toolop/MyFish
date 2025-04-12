import { Response, Request, NextFunction } from "express";
import { GetLocationUseCase } from "../domain/usecase/location/get_usecase";
import { LocationQueryEntities } from "../domain/entities/location.entities";
import { decodedJWTService } from "../domain/service/jwt.service";
import { AddLocationUseCase } from "../domain/usecase/location/post_usecase";
import { LocationDetailUsecase } from "../domain/usecase/location/get_detail_usecase";
import { LocationDeleteUsecase } from "../domain/usecase/location/delete_usecase";
import { UpdateLocationUseCase } from "../domain/usecase/location/update_usecase";

export const LocationController = (repository: any) => {
  const createLocation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await AddLocationUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create location successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  const getLocation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let query: LocationQueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
      };
      const response = await GetLocationUseCase(query, repository);
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

  const getLocationDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await LocationDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get detail location successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  const getLocationByToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.header("Authorization") as string;
      const decoded = decodedJWTService(token.split(" ")[1]);
      const result = await LocationDetailUsecase(decoded.userId, repository);
      res.status(200).json({
        status: "success",
        message: "get detail location successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  const updateLocation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UpdateLocationUseCase(
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

  const deleteLocation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await LocationDeleteUsecase(parseInt(id), repository);
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
    getLocation,
    getLocationDetail,
    createLocation,
    updateLocation,
    deleteLocation,
    getLocationByToken,
  };
};
