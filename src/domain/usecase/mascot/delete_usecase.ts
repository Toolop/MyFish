import { MascotRepository } from "../../repository/mascot.repository";

export const MascotDeleteUsecase = async (
  id: number,
  repository: MascotRepository
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
