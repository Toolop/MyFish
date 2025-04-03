import { RoleCreateEntities } from "../../entities/role/role_entities";
import { RoleRepository } from "../../repository/role.repository";

export const AddRoleUseCase = async (
  data: RoleCreateEntities,
  repository: RoleRepository
) => {
  const find = await repository.findFirst({ name: data.name });
  if (!data.name || data.name == null) {
    throw {
      statusCode: 400,
      message: "nama role tidak boleh kosong",
    };
  }
  if (find != null) {
    throw {
      statusCode: 400,
      message: "role sudah ada",
    };
  }

  const result = await repository.add(data);
  return result;
};
