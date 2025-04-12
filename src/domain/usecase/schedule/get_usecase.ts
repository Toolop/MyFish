import { ResponseEntities } from "../../entities/global/response_entities";
import { ScheduleQueryEntities } from "../../entities/schedule.entities";
import { ScheduleRepository } from "../../repository/schedule.repository";

export const GetScheduleUseCase = async (
  query: ScheduleQueryEntities,
  repository: ScheduleRepository
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
