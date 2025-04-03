import { SidebarRepository } from "../../repository/sidebar.repository";

export const SidebarDetailUsecase = async (
  id: number,
  repository: SidebarRepository
) => {
  const find = await repository.findFirst({ id: id });
  if (!find) {
    throw {
      statusCode: 400,
      message: "id Tidak ada",
    };
  }
  return find;
};
