import { CompanyCreateEntities } from "../../entities/company.entities";
import { CompanyRepository } from "../../repository/company.repository";

export const UpdateCompanyUseCase = async (
  id: number,
  data: CompanyCreateEntities,
  repository: CompanyRepository
) => {
  const find = await repository.findFirst({ id });

  if (!find) {
    throw {
      statusCode: 400,
      message: "Id tidak ada",
    };
  }
  const result = await repository.update(id, data);
  return result;
};
