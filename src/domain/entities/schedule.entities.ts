import { QueryEntities } from "./global/query_entities";

export interface ScheduleEntities {
  start_time: string;
  duration: number;
  interval: number;
  status_schedule: number;
  hour: number[];
  minute: number[];
  dayOfWeek: number[];
  actuatorId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ScheduleCreateEntities {
  start_time: string;
  duration: number;
  repeat: number;
  interval: number;
  status_schedule: number;
  hour: number[];
  minute: number[];
  dayOfWeek: number[];
  actuatorId: number;
}

export interface ScheduleQueryEntities extends QueryEntities {}
