import { UserCreateEntities } from "../../entities/user/user_entities";
import { HashService } from "../../service/hash.service";

export const addUserUseCase = async (
  data: UserCreateEntities,
  repository: any
) => {
  const find = await repository.findFirst({
    username: data.username,
    email: data.email,
  });
  //   let saveImage = null;data.
  if (
    !data.email ||
    data.email == null ||
    !data.password ||
    data.password == null ||
    !data.name ||
    data.name == null
  ) {
    throw {
      statusCode: 400,
      message: "nama, password and email tidak boleh kosong",
    };
  }
  if (find != null) {
    throw {
      statusCode: 400,
      message: "email sudah ada",
    };
  }
  data.password = await HashService(data.password);

  const result = await repository.add(data);
  return result;
};
