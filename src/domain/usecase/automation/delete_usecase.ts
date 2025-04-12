import { AutomationRepository } from "../../repository/automation.repository";

export const AutomationDeleteUsecase = async (
  id: number,
  repository: AutomationRepository
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
