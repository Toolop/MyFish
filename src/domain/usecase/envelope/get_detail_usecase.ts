import { EnvelopeRepository } from "../../repository/envelope.repository";

export const EnvelopeDetailUsecase = async (
  id: number,
  repository: EnvelopeRepository
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
