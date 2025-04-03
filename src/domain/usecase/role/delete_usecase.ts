import { RoleRepository } from "../../repository/role.repository";

export const RoleDeleteUsecase = async (
  id: number,
  repository: RoleRepository
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
