import { TypeSensorCreateEntities } from "../../entities/type_sensor.entities";
import { TypeSensorRepository } from "../../repository/type_sensor.repository";

export const AddTypeSensorUseCase = async (
  data: TypeSensorCreateEntities,
  repository: TypeSensorRepository
) => {
  const result = await repository.add(data);
  return result;
};
