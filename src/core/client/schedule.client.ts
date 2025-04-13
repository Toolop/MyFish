import { scheduleListOff } from "../data/schedule_off.data";
import { scheduleListOn } from "../data/schedule_on.data";
import { ScheduleRepositoryImpl } from "../../domain/repository/schedule.repository";

export const updateScheduleUtil = async () => {
  try {
    const schedule = new ScheduleRepositoryImpl();
    scheduleListOn.data = await schedule.getAll({
      limit: 0,
      statusSchedule: 1,
    });
    scheduleListOff.data = await schedule.getAll({
      limit: 0,
      statusSchedule: 0,
    });
  } catch (err) {
    console.log(err);
  }
};
