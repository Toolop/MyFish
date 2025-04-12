import { ThingsLogCreateEntities } from "../../entities/things_logs.entities";
import { ThingsLogRepository } from "../../repository/things_log.repository";

export const AddThingsLogUseCase = async (
  data: ThingsLogCreateEntities,
  repository: ThingsLogRepository
) => {
  const result = await repository.add(data);
  return result;
};
