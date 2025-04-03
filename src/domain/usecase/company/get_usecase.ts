import { CompanyQueryEntities } from "../../entities/company.entities";
import { ResponseEntities } from "../../entities/global/response_entities";
import { CompanyRepository } from "../../repository/company.repository";

export const GetCompanyUseCase = async (
  query: CompanyQueryEntities,
  repository: CompanyRepository
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
