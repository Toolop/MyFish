import { EnvelopeQueryEntities } from "../../entities/envelope.entities";
import { ResponseEntities } from "../../entities/global/response_entities";
import { EnvelopeRepository } from "../../repository/envelope.repository";

export const GetEnvelopeUseCase = async (
  query: EnvelopeQueryEntities,
  repository: EnvelopeRepository
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
