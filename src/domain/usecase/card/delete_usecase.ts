import { CardRepository } from "../../repository/card.repository";

export const CardDeleteUsecase = async (
  id: number,
  repository: CardRepository
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
