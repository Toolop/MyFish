import { updateScheduleUtil } from "../../../core/client/schedule.client";
import { ScheduleCreateEntities } from "../../entities/schedule.entities";
import { ScheduleRepository } from "../../repository/schedule.repository";

export const AddScheduleUseCase = async (
  data: ScheduleCreateEntities,
  repository: ScheduleRepository
) => {
  const result = await repository.add(data);
  updateScheduleUtil();
  return result;
};
