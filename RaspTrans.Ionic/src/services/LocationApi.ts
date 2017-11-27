import { Location, GeoCoordinate, Station } from "../model";
import { Observable } from 'rxjs/Observable';

export abstract class LocationApi {
  abstract searchLocation(term: string, limit: number): Observable<Location[]>;
  abstract searchStation(coord: GeoCoordinate, range: number): Observable<Station[]>;
}
