import { Station } from "../model";

export abstract class ScheduleApi {
  abstract search(from: Station, to: Station): Station[];
}

