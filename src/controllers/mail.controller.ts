import { Response, Request, NextFunction } from "express";
import { AddMailUseCase } from "../domain/usecase/mail/post_usecase";
import { MailQueryEntities } from "../domain/entities/mail.entities";
import { GetMailUseCase } from "../domain/usecase/mail/get_usecase";
import { MailDetailUsecase } from "../domain/usecase/mail/get_detail_usecase";
import { UpdateMailUseCase } from "../domain/usecase/mail/update_usecase";
import { MailDeleteUsecase } from "../domain/usecase/mail/delete_usecase";

export const MailController = (repository: any) => {
  const createMail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const photo = (req as any).file;
      if (photo) data.photo = photo.filename;
      const result = await AddMailUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create pesan successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getMail = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let query: MailQueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
        from: req.query.from as string,
        to: req.query.to as string,
      };
      const response = await GetMailUseCase(query, repository);
      res.status(200).json({
        status: "success",
        message: "get pesan successful",
        data: response?.data,
        paging: response?.paging,
      });
    } catch (err) {
      next(err);
    }
  };
  const getMailDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await MailDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get detail pesan successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  const updateMail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const photo = (req as any).file;
      if (photo) data.photo = photo.filename;
      console.log(data);
      const result = await UpdateMailUseCase(parseInt(id), data, repository);
      res.status(200).json({
        status: "success",
        message: "update pesan successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const deleteMail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await MailDeleteUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "delete pesan successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  return {
    getMail,
    getMailDetail,
    createMail,
    updateMail,
    deleteMail,
  };
};
