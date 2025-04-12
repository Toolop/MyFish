import { ActuatorLogRepository } from "../../repository/actuator_logs.respository";

export const ActuatorLogsDetailUsecase = async (
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
  return find;
};
