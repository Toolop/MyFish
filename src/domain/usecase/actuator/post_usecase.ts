import { ActuatorCreateEntities } from "../../entities/actuator.entities";
import { ActuatorRepository } from "../../repository/actuator.respository";

export const AddActuatorUseCase = async (
  data: ActuatorCreateEntities,
  repository: ActuatorRepository
) => {
  const result = await repository.add(data);
  return result;
};
