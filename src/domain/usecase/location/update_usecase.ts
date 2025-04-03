import { LocationCreateEntities } from "../../entities/location.entities";
import { LocationRepository } from "../../repository/location.repository";

export const UpdateLocationUseCase = async (
  id: number,
  data: LocationCreateEntities,
  repository: LocationRepository
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
