import { Location, GeoCoordinate, Station, SearchScheduleRequest, Schedule, Route, TransportType } from "../model";
import { LocationApi } from "./LocationApi";
import { ScheduleApi } from "./ScheduleApi";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export class YandexLocationApi implements LocationApi {
  searchLocation(term: string, limit: number): Observable<Location[]> {
    throw new Error("Method not implemented.");
  }

  searchStation(coord: GeoCoordinate, range: number): Observable<Station[]> {
    throw new Error("Method not implemented.");
  }
}
