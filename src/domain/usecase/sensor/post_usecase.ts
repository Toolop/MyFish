import { SensorCreateEntities } from "../../entities/sensor.entities";
import { SensorRepository } from "../../repository/sensor.repository";

export const AddSensorUseCase = async (
  data: SensorCreateEntities,
  repository: SensorRepository
) => {
  const result = await repository.add(data);
  return result;
};
