import { AutomationRepository } from "../../repository/automation.repository";

export const AutomationDetailUsecase = async (
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
  return find;
};
