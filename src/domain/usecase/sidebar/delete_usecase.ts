import { SidebarRepository } from "../../repository/sidebar.repository";

export const SidebarDeleteUsecase = async (
  id: number,
  repository: SidebarRepository
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
