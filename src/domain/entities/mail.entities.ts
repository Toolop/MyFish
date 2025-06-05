import { CardEntities } from "./card.entities";
import { EnvelopeEntities } from "./envelope.entities";
import { QueryEntities } from "./global/query_entities";
import { MascotEntities } from "./mascot.entities";

export interface MailEntities {
  id: number;
  from: string;
  to: string;
  body: string;
  header: string;
  photo: string;
  createdAt: Date;
  updatedAt: Date;
  closing: string;
  Card?: CardEntities | null;
  cardId?: number | null;
  Envelope?: EnvelopeEntities | null;
  envelopeId?: number | null;
  Mascot?: MascotEntities | null;
  mascotId?: number | null;
  color?: string;
}
export interface MailCreateEntities {
  from: string;
  to: string;
  body: string;
  header: string;
  photo: string;
  cardId?: number | null;
  envelopeId?: number | null;
  mascotId?: number | null;
  closing: string;
  color?: string;
}

export interface MailUpdateEntities {
  from?: string;
  to?: string;
  body?: string;
  header?: string;
  photo?: string;
  cardId?: number | null;
  envelopeId?: number | null;
  mascotId?: number | null;
  closing?: string;
  color?: string;
}

export interface MailParamEntities {
  id?: number;
  name?: string;
  logo?: string;
  closing?: string;
  textColor?: string;
  color?: string;
}

export interface MailQueryEntities extends QueryEntities {
  from?: string;
  to?: string;
}
