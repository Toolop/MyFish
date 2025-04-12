import { ActuatorLogsCreateEntities } from "../../entities/actuator_logs.entities";
import { ActuatorLogRepository } from "../../repository/actuator_logs.respository";

export const UpdateActuatorLogsUseCase = async (
  id: number,
  data: ActuatorLogsCreateEntities,
  repository: ActuatorLogRepository
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
