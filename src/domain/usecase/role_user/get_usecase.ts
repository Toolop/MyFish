import { QueryEntities } from "../../entities/global/query_entities";
import { ResponseEntities } from "../../entities/global/response_entities";
import { RoleUserRepository } from "../../repository/role_user.repository";

export const GetRoleUserUseCase = async (
  query: QueryEntities,
  repository: RoleUserRepository
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
