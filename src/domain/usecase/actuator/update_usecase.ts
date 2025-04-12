import { ActuatorCreateEntities } from "../../entities/actuator.entities";
import { ActuatorRepository } from "../../repository/actuator.respository";

export const UpdateActuatorUseCase = async (
  id: number,
  data: ActuatorCreateEntities,
  repository: ActuatorRepository
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
