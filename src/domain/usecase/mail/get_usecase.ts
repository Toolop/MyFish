import { MailQueryEntities } from "../../entities/mail.entities";
import { ResponseEntities } from "../../entities/global/response_entities";
import { MailRepository } from "../../repository/mail.repository";

export const GetMailUseCase = async (
  query: MailQueryEntities,
  repository: MailRepository
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
