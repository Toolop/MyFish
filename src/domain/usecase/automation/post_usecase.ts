import { AutomationCreateEntities } from "../../entities/automation.entities";
import { AutomationRepository } from "../../repository/automation.repository";

export const AddAutomationUseCase = async (
  data: AutomationCreateEntities,
  repository: AutomationRepository
) => {
  const result = await repository.add(data);
  return result;
};
