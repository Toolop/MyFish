import { updateScheduleUtil } from "../../../core/client/schedule.client";
import { ScheduleCreateEntities } from "../../entities/schedule.entities";
import { ScheduleRepository } from "../../repository/schedule.repository";

export const UpdateScheduleUseCase = async (
  id: number,
  data: ScheduleCreateEntities,
  repository: ScheduleRepository
) => {
  const find = await repository.findFirst({ id });

  if (!find) {
    throw {
      statusCode: 400,
      message: "Id tidak ada",
    };
  }
  const result = await repository.update(id, data);
  updateScheduleUtil();
  return result;
};
