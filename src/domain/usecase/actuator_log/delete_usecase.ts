import { ActuatorLogRepository } from "../../repository/actuator_logs.respository";

export const ActuatorLogsDeleteUsecase = async (
  id: number,
  repository: ActuatorLogRepository
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
