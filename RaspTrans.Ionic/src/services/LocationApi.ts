import { Location } from "../model";
import { Observable } from 'rxjs/Observable';

export abstract class LocationApi {
  abstract search (term: string, limit: number): Observable<Location[]>;
}
