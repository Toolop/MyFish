import { GreenhouseRepository } from "../../repository/greenhouse.repository";

export const GreenhouseDetailUsecase = async (
  id: number,
  repository: GreenhouseRepository
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
