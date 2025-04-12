import { ResponseEntities } from "../../entities/global/response_entities";
import { TypeSensorQueryEntities } from "../../entities/type_sensor.entities";
import { TypeSensorRepository } from "../../repository/type_sensor.repository";

export const GetTypeSensorUseCase = async (
  query: TypeSensorQueryEntities,
  repository: TypeSensorRepository
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
