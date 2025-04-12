import { TypeSensorCreateEntities } from "../../entities/type_sensor.entities";
import { TypeSensorRepository } from "../../repository/type_sensor.repository";

export const UpdateTypeSensorUseCase = async (
  id: number,
  data: TypeSensorCreateEntities,
  repository: TypeSensorRepository
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
