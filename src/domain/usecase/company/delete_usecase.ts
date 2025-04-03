import { CompanyRepository } from "../../repository/company.repository";

export const CompanyDeleteUsecase = async (
  id: number,
  repository: CompanyRepository
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
