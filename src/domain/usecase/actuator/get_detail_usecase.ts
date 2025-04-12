import { ActuatorRepository } from "../../repository/actuator.respository";

export const ActuatorDetailUsecase = async (
  id: number,
  repository: ActuatorRepository
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
