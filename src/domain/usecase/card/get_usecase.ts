import { CardQueryEntities } from "../../entities/card.entities";
import { ResponseEntities } from "../../entities/global/response_entities";
import { CardRepository } from "../../repository/card.repository";

export const GetCardUseCase = async (
  query: CardQueryEntities,
  repository: CardRepository
) => {
  const find = await repository.getAll(query);
  const count = await repository.count(query);
  const result: ResponseEntities = {
    data: find,
    paging: {
      totalData: count,
      pageNow: query.page,
      totalPage: query.page && query.limit ? Math.ceil(count / query.limit) : 1,
    },
  };
  return result;
};
