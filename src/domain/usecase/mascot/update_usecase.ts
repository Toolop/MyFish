import { MascotCreateEntities } from "../../entities/mascot.entities";
import { MascotRepository } from "../../repository/mascot.repository";

export const UpdateMascotUseCase = async (
  id: number,
  data: MascotCreateEntities,
  repository: MascotRepository
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
