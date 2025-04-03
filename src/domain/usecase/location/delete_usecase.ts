import { LocationRepository } from "../../repository/location.repository";

export const LocationDeleteUsecase = async (
  id: number,
  repository: LocationRepository
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
