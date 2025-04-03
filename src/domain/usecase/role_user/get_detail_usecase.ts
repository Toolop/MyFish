import { RoleUserRepository } from "../../repository/role_user.repository";

export const GetRoleUserDetailUsecase = async (
  id: number,
  repository: RoleUserRepository
) => {
  const find = await repository.findById(id);
  if (!find) {
    throw {
      statusCode: 400,
      message: "id Tidak ada",
    };
  }
  return find;
};
