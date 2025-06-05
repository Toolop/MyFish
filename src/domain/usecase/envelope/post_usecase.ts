import { EnvelopeCreateEntities } from "../../entities/envelope.entities";
import { EnvelopeRepository } from "../../repository/envelope.repository";

export const AddEnvelopeUseCase = async (
  data: EnvelopeCreateEntities,
  repository: EnvelopeRepository
) => {
  const find = await repository.findFirst({ name: data.name });
  if (!data.name || data.name == null) {
    throw {
      statusCode: 400,
      message: "nama Envelope tidak boleh kosong",
    };
  }
  if (find != null) {
    throw {
      statusCode: 400,
      message: "envelope sudah ada",
    };
  }

  const result = await repository.add(data);
  return result;
};
