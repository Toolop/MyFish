import {
  RoleSidebarCreateOrUpdateEntities,
  RRoleSidebarCreateEntities,
} from "../../entities/role/role_sidebar_entities";
import { RoleSidebarRepository } from "../../repository/role_sidebar.repository";

export const UpsertBatchRoleSidebarUseCase = async (
  data: RoleSidebarCreateOrUpdateEntities[],
  repository: RoleSidebarRepository
) => {
  try {
    const result = await repository.upsertBatch(data);
    return result;
  } catch (err) {
    throw {
      statusCode: 400,
      message: "Terjadi suatu kesalahan",
      error: err,
    };
  }
};
