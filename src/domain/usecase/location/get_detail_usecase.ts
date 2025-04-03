import { LocationRepository } from "../../repository/location.repository";

export const LocationDetailUsecase = async (
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
  return find;
};
