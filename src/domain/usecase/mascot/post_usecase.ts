import { MascotCreateEntities } from "../../entities/mascot.entities";
import { MascotRepository } from "../../repository/mascot.repository";

export const AddMascotUseCase = async (
  data: MascotCreateEntities,
  repository: MascotRepository
) => {
  const find = await repository.findFirst({ name: data.name });
  if (!data.name || data.name == null) {
    throw {
      statusCode: 400,
      message: "nama Mascot tidak boleh kosong",
    };
  }
  if (find != null) {
    throw {
      statusCode: 400,
      message: "mascot sudah ada",
    };
  }

  const result = await repository.add(data);
  return result;
};
