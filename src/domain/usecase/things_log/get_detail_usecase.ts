import { ThingsLogRepository } from "../../repository/things_log.repository";

export const ThingsLogDetailUsecase = async (
  id: number,
  repository: ThingsLogRepository
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
