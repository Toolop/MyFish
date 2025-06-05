import { Response, Request, NextFunction } from "express";
import { AddMascotUseCase } from "../domain/usecase/mascot/post_usecase";
import { MascotQueryEntities } from "../domain/entities/mascot.entities";
import { GetMascotUseCase } from "../domain/usecase/mascot/get_usecase";
import { MascotDetailUsecase } from "../domain/usecase/mascot/get_detail_usecase";
import { UpdateMascotUseCase } from "../domain/usecase/mascot/update_usecase";
import { MascotDeleteUsecase } from "../domain/usecase/mascot/delete_usecase";

export const MascotController = (repository: any) => {
  const createMascot = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await AddMascotUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create greenhouse successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getMascot = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let query: MascotQueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
      };
      const response = await GetMascotUseCase(query, repository);
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
  const getMascotDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await MascotDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get detail greenhouse successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  const updateMascot = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UpdateMascotUseCase(
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
  const deleteMascot = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await MascotDeleteUsecase(parseInt(id), repository);
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
    getMascot,
    getMascotDetail,
    createMascot,
    updateMascot,
    deleteMascot,
  };
};
