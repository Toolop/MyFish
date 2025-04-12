import { ActuatorRepository } from "../../repository/actuator.respository";

export const ActuatorDeleteUsecase = async (
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

  const result = await repository.delete(id);

  return result;
};
