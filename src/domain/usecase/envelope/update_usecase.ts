import { EnvelopeCreateEntities } from "../../entities/envelope.entities";
import { EnvelopeRepository } from "../../repository/envelope.repository";

export const UpdateEnvelopeUseCase = async (
  id: number,
  data: EnvelopeCreateEntities,
  repository: EnvelopeRepository
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
