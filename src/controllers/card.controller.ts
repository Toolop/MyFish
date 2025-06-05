import { Response, Request, NextFunction } from "express";
import { AddCardUseCase } from "../domain/usecase/card/post_usecase";
import { CardQueryEntities } from "../domain/entities/card.entities";
import { GetCardUseCase } from "../domain/usecase/card/get_usecase";
import { CardDetailUsecase } from "../domain/usecase/card/get_detail_usecase";
import { UpdateCardUseCase } from "../domain/usecase/card/update_usecase";
import { CardDeleteUsecase } from "../domain/usecase/card/delete_usecase";

export const CardController = (repository: any) => {
  const createCard = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await AddCardUseCase(data, repository);
      res.status(201).json({
        status: "success",
        message: "create greenhouse successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  const getCard = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let query: CardQueryEntities = {
        page: parseInt(req.query.page as string) || undefined,
        limit: parseInt(req.query.limit as string) || undefined,
        search: req.query.search as string,
      };
      const response = await GetCardUseCase(query, repository);
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
  const getCardDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await CardDetailUsecase(parseInt(id), repository);
      res.status(200).json({
        status: "success",
        message: "get detail greenhouse successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  const updateCard = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await UpdateCardUseCase(
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
  const deleteCard = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const result = await CardDeleteUsecase(parseInt(id), repository);
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
    getCard,
    getCardDetail,
    createCard,
    updateCard,
    deleteCard,
  };
};
