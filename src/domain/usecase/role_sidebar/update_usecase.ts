import { RRoleSidebarUpdateEntities } from "../../entities/role/role_sidebar_entities";
import { RoleSidebarRepository } from "../../repository/role_sidebar.repository";

export const UpdateRoleSidebarUseCase = async (
  id: number,
  data: RRoleSidebarUpdateEntities,
  repository: RoleSidebarRepository
) => {
  const find = await repository.findById(id);

  if (!find) {
    throw {
      statusCode: 400,
      message: "Id tidak ada",
    };
  }
  const result = await repository.update(id, data);
  return result;
};
