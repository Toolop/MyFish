import { QueryEntities } from "../global/query_entities";

export interface RRoleSidebarEntities {
  id: number;
  sidebarId: number;
  roleId: number;
}

export interface RoleSidebarDetailedEntities {
  id: number;
  sidebarId: number;
  roleId: number;
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
}

export interface RRoleSidebarCreateEntities {
  sidebarId: number;
  roleId: number;
}

export interface RRoleSidebarUpdateEntities {
  sidebarId?: number;
  roleId?: number;
}

export interface RoleSidebarCreateOrUpdateEntities {
  sidebarId: number;
  roleId: number;
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
}

export interface RoleSidebarQueryEntities extends QueryEntities {
  sidebarId?: number | undefined;
  roleId?: number | undefined;
  detail?: string | undefined;
}
