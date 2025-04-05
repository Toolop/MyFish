import { ResponseEntities } from "../../entities/global/response_entities";
import { GreenhouseQueryEntities } from "../../entities/greenhouse.entites";
import { GreenhouseRepository } from "../../repository/greenhouse.repository";

export const GetGreenhouseUseCase = async (
  query: GreenhouseQueryEntities,
  repository: GreenhouseRepository
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
