import { LocationCreateEntities } from "../../entities/location.entities";
import { LocationRepository } from "../../repository/location.repository";

export const AddLocationUseCase = async (
  data: LocationCreateEntities,
  repository: LocationRepository
) => {
  const find = await repository.findFirst({ name: data.name });
  if (!data.name || data.name == null) {
    throw {
      statusCode: 400,
      message: "nama role tidak boleh kosong",
    };
  }
  if (find != null) {
    throw {
      statusCode: 400,
      message: "role sudah ada",
    };
  }

  const result = await repository.add(data);
  return result;
};
