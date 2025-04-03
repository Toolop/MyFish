import { QueryEntities } from "../global/query_entities";

export interface UserEntities {
  username: string;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserCreateEntities {
  username: string;
  email: string;
  name: string;
  password: string;
  status: number | null;
  signature: string | null;
  unitId: number | null;
}

export interface UserQueryEntities extends QueryEntities {}
