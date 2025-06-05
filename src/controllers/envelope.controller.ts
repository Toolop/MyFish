import { Response, Request, NextFunction } from "express";
import { AddEnvelopeUseCase } from "../domain/usecase/envelope/post_usecase";
import { EnvelopeQueryEntities } from "../domain/entities/envelope.entities";
import { GetEnvelopeUseCase } from "../domain/usecase/envelope/get_usecase";
import { EnvelopeDetailUsecase } from "../domain/usecase/envelope/get_detail_usecase";
import { UpdateEnvelopeUseCase } from "../domain/usecase/envelope/update_usecase";
import { EnvelopeDeleteUsecase } from "../domain/usecase/envelope/delete_usecase";

export const EnvelopeController = (repository: any) => {
  const createEnvelope = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await AddEnvelopeUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create greenhouse successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getEnvelope = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let query: EnvelopeQueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
      };
      const response = await GetEnvelopeUseCase(query, repository);
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
  const getEnvelopeDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await EnvelopeDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get detail greenhouse successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  const updateEnvelope = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UpdateEnvelopeUseCase(
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
  const deleteEnvelope = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await EnvelopeDeleteUsecase(parseInt(id), repository);
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
    getEnvelope,
    getEnvelopeDetail,
    createEnvelope,
    updateEnvelope,
    deleteEnvelope,
  };
};
