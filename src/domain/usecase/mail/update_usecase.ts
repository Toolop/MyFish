import { MailCreateEntities } from "../../entities/mail.entities";
import { MailRepository } from "../../repository/mail.repository";

export const UpdateMailUseCase = async (
  id: number,
  data: MailCreateEntities,
  repository: MailRepository
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
