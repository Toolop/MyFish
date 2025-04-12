import { ThingsCreateEntities } from "../../entities/things.entities";
import { ThingsRepository } from "../../repository/things.repository";

export const AddThingsUseCase = async (
  data: ThingsCreateEntities,
  repository: ThingsRepository
) => {
  const result = await repository.add(data);
  return result;
};
