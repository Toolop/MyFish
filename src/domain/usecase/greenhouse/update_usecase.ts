import { GreenhouseCreateEntities } from "../../entities/greenhouse.entites";
import { GreenhouseRepository } from "../../repository/greenhouse.repository";

export const UpdateGreenhouseUseCase = async (
  id: number,
  data: GreenhouseCreateEntities,
  repository: GreenhouseRepository
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
