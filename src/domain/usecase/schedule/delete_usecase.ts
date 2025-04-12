import { ScheduleRepository } from "../../repository/schedule.repository";

export const ScheduleDeleteUsecase = async (
  id: number,
  repository: ScheduleRepository
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
