import { TypeSensorRepository } from "../../repository/type_sensor.repository";

export const TypeSensorDeleteUsecase = async (
  id: number,
  repository: TypeSensorRepository
) => {
  const find = await repository.findFirst({ id });
  if (!find) {
    throw {
      statusCode: 400,
      message: "id Tidak ada",
    };
  }

  const result = await repository.delete(id);

  return result;
};
