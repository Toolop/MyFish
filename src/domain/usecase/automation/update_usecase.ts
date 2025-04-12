import { AutomationCreateEntities } from "../../entities/automation.entities";
import { AutomationRepository } from "../../repository/automation.repository";

export const UpdateAutomationUseCase = async (
  id: number,
  data: AutomationCreateEntities,
  repository: AutomationRepository
) => {
  const find = await repository.findFirst({ id });

  if (!find) {
    throw {
      statusCode: 400,
      message: "Id tidak ada",
    };
  }
  const result = await repository.update(id, data);
  return result;
};
