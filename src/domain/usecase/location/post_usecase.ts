import { LocationCreateEntities } from "../../entities/location.entities";
import { LocationRepository } from "../../repository/location.repository";

export const AddLocationUseCase = async (
  data: LocationCreateEntities,
  repository: LocationRepository
) => {
  const result = await repository.add(data);
  return result;
};
