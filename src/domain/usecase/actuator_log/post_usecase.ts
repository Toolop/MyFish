import { ActuatorLogsCreateEntities } from "../../entities/actuator_logs.entities";
import { ActuatorLogRepository } from "../../repository/actuator_logs.respository";

export const AddActuatorLogsUseCase = async (
  data: ActuatorLogsCreateEntities,
  repository: ActuatorLogRepository
) => {
  const result = await repository.add(data);
  return result;
};
