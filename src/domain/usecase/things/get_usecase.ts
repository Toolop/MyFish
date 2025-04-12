import { ResponseEntities } from "../../entities/global/response_entities";
import { ThingsQueryEntities } from "../../entities/things.entities";
import { ThingsRepository } from "../../repository/things.repository";

export const GetThingsUseCase = async (
  query: ThingsQueryEntities,
  repository: ThingsRepository
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
