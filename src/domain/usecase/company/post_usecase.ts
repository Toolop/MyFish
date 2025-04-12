import { CompanyCreateEntities } from "../../entities/company.entities";
import { CompanyRepository } from "../../repository/company.repository";

export const AddCompanyUseCase = async (
  data: CompanyCreateEntities,
  repository: CompanyRepository
) => {
  const find = await repository.findFirst({ name: data.name });
  if (!data.name || data.name == null) {
    throw {
      statusCode: 400,
      message: "nama perusahaan tidak boleh kosong",
    };
  }
  if (find != null) {
    throw {
      statusCode: 400,
      message: "perushaan sudah ada",
    };
  }

  const result = await repository.add(data);
  return result;
};
