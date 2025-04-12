import { ThingsCreateEntities } from "../../entities/things.entities";
import { ThingsRepository } from "../../repository/things.repository";

export const UpdateThingsUseCase = async (
  id: number,
  data: ThingsCreateEntities,
  repository: ThingsRepository
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
