import { MailCreateEntities } from "../../entities/mail.entities";
import { MailRepository } from "../../repository/mail.repository";

export const AddMailUseCase = async (
  data: MailCreateEntities,
  repository: MailRepository
) => {
  console.log(data);
  if (!data.from || !data.to || !data.header) {
    throw {
      statusCode: 400,
      message: "nama Mail tidak boleh kosong",
    };
  }

  const result = await repository.add(data);
  return result;
};
