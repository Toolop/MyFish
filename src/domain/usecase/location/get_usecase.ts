import { LocationRepository } from "./../../repository/location.repository";
import { LocationQueryEntities } from "../../entities/location.entities";
import { ResponseEntities } from "../../entities/global/response_entities";

export const GetLocationUseCase = async (
  query: LocationQueryEntities,
  repository: LocationRepository
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
