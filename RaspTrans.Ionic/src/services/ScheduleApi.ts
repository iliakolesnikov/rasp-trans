import { SearchScheduleRequest, Schedule } from "../model";
import { Observable } from 'rxjs/Observable';

export abstract class ScheduleApi {
  abstract search(request: SearchScheduleRequest): Observable<Schedule>;
}

