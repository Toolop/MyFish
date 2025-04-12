import { ScheduleCreateEntities } from "../../entities/schedule.entities";
import { ScheduleRepository } from "../../repository/schedule.repository";

export const AddScheduleUseCase = async (
  data: ScheduleCreateEntities,
  repository: ScheduleRepository
) => {
  const result = await repository.add(data);
  return result;
};
