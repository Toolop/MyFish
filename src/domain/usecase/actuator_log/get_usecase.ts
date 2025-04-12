import { ActuatorLogsQueryEntities } from "../../entities/actuator_logs.entities";
import { ResponseEntities } from "../../entities/global/response_entities";
import { ActuatorLogRepository } from "../../repository/actuator_logs.respository";

export const GetActuatorLogsUseCase = async (
  query: ActuatorLogsQueryEntities,
  repository: ActuatorLogRepository
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
