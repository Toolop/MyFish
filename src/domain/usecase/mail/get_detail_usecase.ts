import { MailRepository } from "../../repository/mail.repository";

export const MailDetailUsecase = async (
  id: number,
  repository: MailRepository
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
