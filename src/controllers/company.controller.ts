import { Response, Request, NextFunction } from "express";
import { AddCompanyUseCase } from "../domain/usecase/company/post_usecase";
import { GetCompanyUseCase } from "../domain/usecase/company/get_usecase";
import { CompanyQueryEntities } from "../domain/entities/company.entities";
import { CompanyDetailUsecase } from "../domain/usecase/company/get_detail_usecase";
import { decodedJWTService } from "../domain/service/jwt.service";
import { UpdateCompanyUseCase } from "../domain/usecase/company/update_usecase";
import { CompanyDeleteUsecase } from "../domain/usecase/company/delete_usecase";

export const CompanyController = (repository: any) => {
  const createCompanies = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await AddCompanyUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create company successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getCompanies = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let query: CompanyQueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
      };
      const response = await GetCompanyUseCase(query, repository);
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
  const getCompanyDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await CompanyDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get detail company successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getCompanyByToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.header("Authorization") as string;
      const decoded = decodedJWTService(token.split(" ")[1]);
      const result = await CompanyDetailUsecase(decoded.userId, repository);
      res.status(200).json({
        status: "success",
        message: "get detail company successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const updateCompany = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UpdateCompanyUseCase(
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
  const deleteCompany = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await CompanyDeleteUsecase(parseInt(id), repository);
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
    getCompanies,
    getCompanyDetail,
    createCompanies,
    updateCompany,
    deleteCompany,
    getCompanyByToken,
  };
};
