import { SidebarCreateEntities } from "../../entities/master/sidebar_entities";
import { SidebarRepository } from "../../repository/sidebar.repository";

export const AddSidebarUseCase = async (
  data: SidebarCreateEntities,
  repository: SidebarRepository
) => {
  const find = await repository.findFirst({ name: data.name });
  if (!data.name || data.name == null) {
    throw {
      statusCode: 400,
      message: "nama sidebar tidak boleh kosong",
    };
  }
  if (find != null) {
    throw {
      statusCode: 400,
      message: "sidebar sudah ada",
    };
  }

  const result = await repository.add(data);
  return result;
};
