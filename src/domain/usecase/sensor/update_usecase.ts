import { SensorCreateEntities } from "../../entities/sensor.entities";
import { SensorRepository } from "../../repository/sensor.repository";

export const UpdateSensorUseCase = async (
  id: number,
  data: SensorCreateEntities,
  repository: SensorRepository
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
