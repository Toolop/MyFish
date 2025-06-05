import { CardCreateEntities } from "../../entities/card.entities";
import { CardRepository } from "../../repository/card.repository";

export const AddCardUseCase = async (
  data: CardCreateEntities,
  repository: CardRepository
) => {
  const find = await repository.findFirst({ name: data.name });
  if (!data.name || data.name == null) {
    throw {
      statusCode: 400,
      message: "nama Card tidak boleh kosong",
    };
  }
  if (find != null) {
    throw {
      statusCode: 400,
      message: "card sudah ada",
    };
  }

  const result = await repository.add(data);
  return result;
};
