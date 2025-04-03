import { RRoleUserCreateEntities } from "../../entities/role/role_user_entities";
import { RoleUserRepository } from "../../repository/role_user.repository";

export const AddRoleUserUseCase = async (
  data: RRoleUserCreateEntities,
  repository: RoleUserRepository
) => {
  const find = await repository.findFirst(data);
  if (!data.roleId || data.roleId == null) {
    throw {
      statusCode: 400,
      message: "roleId tidak boleh kosong",
    };
  }
  if (!data.username || data.username == null) {
    throw {
      statusCode: 400,
      message: "username tidak boleh kosong",
    };
  }
  if (find != null) {
    throw {
      statusCode: 400,
      message: "Role Sidebar sudah ada",
    };
  }
  const result = await repository.add(data);
  return result;
};
