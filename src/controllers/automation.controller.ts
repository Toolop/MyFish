import { Response, Request, NextFunction } from "express";
import { AddAutomationUseCase } from "../domain/usecase/automation/post_usecase";
import { AutomationQueryEntities } from "../domain/entities/automation.entities";
import { GetAutomationUseCase } from "../domain/usecase/automation/get_usecase";
import { AutomationDetailUsecase } from "../domain/usecase/automation/get_detail_usecase";
import { UpdateAutomationUseCase } from "../domain/usecase/automation/update_usecase";
import { AutomationDeleteUsecase } from "../domain/usecase/automation/delete_usecase";

export const AutomationController = (repository: any) => {
  const createAutomation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await AddAutomationUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create automation successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getAutomation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let query: AutomationQueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
      };
      const response = await GetAutomationUseCase(query, repository);
      res.status(200).json({
        status: "success",
        message: "get automation successful",
        data: response?.data,
        paging: response?.paging,
      });
    } catch (err) {
      next(err);
    }
  };
  const getAutomationDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await AutomationDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get detail automation successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  const updateAutomation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UpdateAutomationUseCase(
        parseInt(id),
        req.body,
        repository
      );
      res.status(200).json({
        status: "success",
        message: "update automation successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const deleteAutomation = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await AutomationDeleteUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "delete automation successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  return {
    getAutomation,
    getAutomationDetail,
    createAutomation,
    updateAutomation,
    deleteAutomation,
  };
};
