import { UserCreateEntities } from "../../entities/user/user_entities";
import { UserRepository } from "../../repository/user.repository";
import { HashService } from "../../service/hash.service";

export const UserDetailUsecase = async (
  params: any,
  repository: UserRepository
) => {
  const find = await repository.findFirst({ username: params.username });
  if (!find) {
    throw {
      statusCode: 400,
      message: "id Tidak ada",
    };
  }
  return find;
};
