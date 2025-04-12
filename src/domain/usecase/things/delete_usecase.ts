import { ThingsRepository } from "../../repository/things.repository";

export const ThingsDeleteUsecase = async (
  id: number,
  repository: ThingsRepository
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
