import { SidebarCreateEntities } from "../../entities/master/sidebar_entities";
import { SidebarRepository } from "../../repository/sidebar.repository";

export const UpdateRoleUserUseCase = async (
  id: number,
  data: SidebarCreateEntities,
  repository: SidebarRepository
) => {
  const find = await repository.findFirst({ id });

  if (!find) {
    throw {
      statusCode: 400,
      message: "Role tidak ada",
    };
  }
  const result = await repository.update(id, data);
  return result;
};
