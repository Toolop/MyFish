import { RoleRepository } from "../../repository/role.repository";

export const RoleDetailUsecase = async (
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
  return find;
};
