import { ScheduleRepository } from "../../repository/schedule.repository";

export const ScheduleDetailUsecase = async (
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
  return find;
};
