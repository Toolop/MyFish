import { ThingsLogCreateEntities } from "../../entities/things_logs.entities";
import { ThingsLogRepository } from "../../repository/things_log.repository";

export const UpdateThingsLogUseCase = async (
  id: number,
  data: ThingsLogCreateEntities,
  repository: ThingsLogRepository
) => {
  const find = await repository.findFirst({ id });

  if (!find) {
    throw {
      statusCode: 400,
      message: "Id tidak ada",
    };
  }
  const result = await repository.update(id, data);
  return result;
};
