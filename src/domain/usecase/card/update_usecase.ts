import { CardCreateEntities } from "../../entities/card.entities";
import { CardRepository } from "../../repository/card.repository";

export const UpdateCardUseCase = async (
  id: number,
  data: CardCreateEntities,
  repository: CardRepository
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
