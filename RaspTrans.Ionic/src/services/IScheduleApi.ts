import { Station } from "../model";

export interface IScheduleApi {
  search(from: Station, to: Station): Station[];
}

