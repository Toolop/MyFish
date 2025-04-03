import { ResponseEntities } from "../../entities/global/response_entities";
import { UserQueryEntities } from "../../entities/user/user_entities";
import { UserRepository } from "../../repository/user.repository";
export const getUserUseCase = async (
  query: UserQueryEntities,
  repository: UserRepository
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
