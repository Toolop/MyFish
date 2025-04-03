import { ResponseEntities } from "../../entities/global/response_entities";
import { RoleSidebarQueryEntities } from "../../entities/role/role_sidebar_entities";
import { RoleSidebarRepository } from "../../repository/role_sidebar.repository";

export const GetRoleSidebarUseCase = async (
  repository: RoleSidebarRepository,
  query: RoleSidebarQueryEntities,
  detailed: boolean = false,
  view: boolean = false
) => {
  const find = await repository.getAll(query, detailed, view);
  const count = await repository.count(query, view);
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
