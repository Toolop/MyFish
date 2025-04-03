import { CompanyRepository } from "../../repository/company.repository";

export const CompanyDetailUsecase = async (
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
  return find;
};
