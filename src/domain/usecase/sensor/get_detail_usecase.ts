import { SensorRepository } from "../../repository/sensor.repository";

export const SensorDetailUsecase = async (
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
  return find;
};
