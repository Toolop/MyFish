import { RoleCreateEntities } from "../../entities/role/role_entities";
import { RoleRepository } from "../../repository/role.repository";

export const UpdateRoleUseCase = async (
  id: number,
  data: RoleCreateEntities,
  repository: RoleRepository
) => {
  const find = await repository.findFirst({ id });

  if (!find) {
    throw {
      statusCode: 400,
      message: "Id tidak ada",
    };
  }
  const result = await repository.update(id, data);
  return result;
};
