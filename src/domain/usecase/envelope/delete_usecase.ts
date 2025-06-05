import { EnvelopeRepository } from "../../repository/envelope.repository";

export const EnvelopeDeleteUsecase = async (
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

  const result = await repository.delete(id);

  return result;
};
