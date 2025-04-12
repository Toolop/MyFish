import { ResponseEntities } from "../../entities/global/response_entities";
import { ThingsLogQueryEntities } from "../../entities/things_logs.entities";
import { ThingsLogRepository } from "../../repository/things_log.repository";

export const GetThingsLogUseCase = async (
  query: ThingsLogQueryEntities,
  repository: ThingsLogRepository
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
