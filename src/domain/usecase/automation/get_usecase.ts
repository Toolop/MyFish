import { AutomationQueryEntities } from "../../entities/automation.entities";
import { ResponseEntities } from "../../entities/global/response_entities";
import { AutomationRepository } from "../../repository/automation.repository";

export const GetAutomationUseCase = async (
  query: AutomationQueryEntities,
  repository: AutomationRepository
) => {
  const find = await repository.getAll(query);
  const count = await repository.count(query);
  const result: ResponseEntities = {
    data: find,
    paging: {
      totalData: count,
      pageNow: query.page,
      totalPage: query.page && query.limit ? Math.ceil(count / query.limit) : 1,
    },
  };
  return result;
};
