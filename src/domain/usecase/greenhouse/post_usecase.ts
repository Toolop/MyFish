import { GreenhouseCreateEntities } from "../../entities/greenhouse.entites";
import { GreenhouseRepository } from "../../repository/greenhouse.repository";

export const AddGreenhouseUseCase = async (
  data: GreenhouseCreateEntities,
  repository: GreenhouseRepository
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
