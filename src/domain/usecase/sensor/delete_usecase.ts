import { SensorRepository } from "../../repository/sensor.repository";

export const SensorDeleteUsecase = async (
  id: number,
  repository: SensorRepository
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
