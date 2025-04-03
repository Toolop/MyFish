import { UserRepository } from "../../repository/user.repository";

export const UserDeleteUsecase = async (
  username: string,
  repository: UserRepository
) => {
  const find = await repository.findFirst({ username });
  if (!find) {
    throw {
      statusCode: 400,
      message: "id Tidak ada",
    };
  }

  const result = await repository.delete(username);
  return result;
};
