import { ThingsRepository } from "../../repository/things.repository";

export const ThingsDetailUsecase = async (
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
  return find;
};
