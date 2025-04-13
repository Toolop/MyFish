import { ActuatorLogsCreateEntities } from "../../entities/actuator_logs.entities";
import { ActuatorLogRepository } from "../../repository/actuator_logs.respository";
import { ActuatorMQTTService } from "../../service/actuator_mqtt.service";

export const AddActuatorLogsUseCase = async (
  data: ActuatorLogsCreateEntities,
  repository: ActuatorLogRepository
) => {
  ActuatorMQTTService(data);
  const result = await repository.add(data);
  return result;
};
