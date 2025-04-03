import { UserCreateEntities } from "../../entities/user/user_entities";
import { UserRepository } from "../../repository/user.repository";
import { HashService } from "../../service/hash.service";

export const updateUserUseCase = async (
  username: string,
  data: UserCreateEntities,
  repository: UserRepository
) => {
  const find = await repository.findFirst({ username });

  if (!find) {
    throw {
      statusCode: 400,
      message: "user tidak ada",
    };
  }
  if (data.password) {
    data.password = await HashService(data.password);
  }
  const result = await repository.update(username, data);
  return result;
};
