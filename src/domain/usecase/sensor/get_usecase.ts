import { ResponseEntities } from "../../entities/global/response_entities";
import { SensorQueryEntities } from "../../entities/sensor.entities";
import { SensorRepository } from "../../repository/sensor.repository";

export const GetSensorUseCase = async (
  query: SensorQueryEntities,
  repository: SensorRepository
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
