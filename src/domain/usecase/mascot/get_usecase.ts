import { MascotQueryEntities } from "../../entities/mascot.entities";
import { ResponseEntities } from "../../entities/global/response_entities";
import { MascotRepository } from "../../repository/mascot.repository";

export const GetMascotUseCase = async (
  query: MascotQueryEntities,
  repository: MascotRepository
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
