import { RoleSidebarRepository } from "../../repository/role_sidebar.repository";

export const RoleSidebarDeleteUsecase = async (
  id: number,
  repository: RoleSidebarRepository
) => {
  const find = await repository.findById(id);

  if (!find) {
    throw {
      statusCode: 400,
      message: "id Tidak ada",
    };
  }

  const result = await repository.delete(id);

  return result;
};
