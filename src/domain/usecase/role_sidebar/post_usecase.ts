import { RRoleSidebarCreateEntities } from "../../entities/role/role_sidebar_entities";
import { RoleSidebarRepository } from "../../repository/role_sidebar.repository";

export const AddRoleSidebarUseCase = async (
  data: RRoleSidebarCreateEntities,
  repository: RoleSidebarRepository
) => {
  const find = await repository.findFirst(data);
  if (!data.roleId || data.roleId == null) {
    throw {
      statusCode: 400,
      message: "roleId tidak boleh kosong",
    };
  }
  if (!data.sidebarId || data.sidebarId == null) {
    throw {
      statusCode: 400,
      message: "sidebarId tidak boleh kosong",
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
