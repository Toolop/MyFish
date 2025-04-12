import { ResponseEntities } from "../../entities/global/response_entities";
import { ActuatorQueryEntities } from "../../entities/actuator.entities";
import { ActuatorRepository } from "../../repository/actuator.respository";

export const GetActuatorUseCase = async (
  query: ActuatorQueryEntities,
  repository: ActuatorRepository
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
