import { Location, GeoCoordinate, Station, SearchScheduleRequest, Schedule, Route, TransportType } from "../model";
import { DateUtils } from '../utils';
import { LocationApi } from "./LocationApi";
import { ScheduleApi } from "./ScheduleApi";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export class FakeLocationApi implements LocationApi  {
  locations: Location[];
  stations: Station[];

  constructor() {
    this.locations = [
      {
        name: "Пушкино",
        address: "Московская область, Пушкино",
        coord: {
          lat: 56.010428,
          lon: 37.847155
        }
      },
      {
        name: "село Пушкино",
        address: "Омская область, Омский район, село Пушкино",
        coord: {
          lat: 55.09302,
          lon: 73.469793
        }
      },
      {
        name: "деревня Пушкино",
        address: "Смоленская область, Сафоновский район, деревня Пушкино",
        coord: {
          lat: 55.083575,
          lon: 33.071001
        }
      }
    ];
    this.stations = [
      {
        name: "Царево",
        code: "s9739286",
        typeName: "автобусная остановка",
        type: "bus_stop",
        transportType: TransportType.Bus
      },
      {
        name: "Школа",
        code: "s9739285",
        typeName: "автобусная остановка",
        type: "bus_stop",
        transportType: TransportType.Bus
      },
      {
        name: "Автостанция",
        code: "s9735795",
        typeName: "автобусная остановка",
        type: "bus_stop",
        transportType: TransportType.Bus
      }
    ];
  }

  searchLocation(term: string, limit: number): Observable<Location[]> {
    return of(this.locations.filter(x => x.name.toLowerCase().indexOf(term.toLowerCase()) !== -1));
  }

  searchStation(coord: GeoCoordinate, range: number): Observable<Station[]> {
    return of(this.stations);
  }
}

export class FakeScheduleApi implements ScheduleApi {
  schedule: Schedule;
  route21: Route;

  constructor() {
    this.route21 = {
      name: "Пушкино (Автостанция Пушкино) — Красноармейск",
      number: "21",
      transportType: TransportType.Bus
    };

    this.schedule = {
      search: {
        from: {
          name: "Царево",
          code: "s9739286",
          typeName: "автобусная остановка",
          type: "bus_stop",
          transportType: TransportType.Bus
        },
        to:
        {
          name: "Автостанция",
          code: "s9735795",
          typeName: "автобусная остановка",
          type: "bus_stop",
          transportType: TransportType.Bus
        }
      },
      routes: [ this.route21 ],
      segments: [
        {
          departure: new Date(),
          arrival: DateUtils.dateAdd(new Date(), 'minute', 10),
          route: this.route21
        },
        {
          departure: DateUtils.dateAdd(new Date(), 'minute', 25),
          arrival: DateUtils.dateAdd(new Date(), 'minute', 35),
          route: this.route21
        },
        {
          departure: DateUtils.dateAdd(new Date(), 'minute', 35),
          arrival: DateUtils.dateAdd(new Date(), 'minute', 45),
          route: this.route21
        }
      ]
    };
  }

  search(request: SearchScheduleRequest): Observable<Schedule> {
    return of(this.schedule);
  }

  static getFakeSchedule(): Schedule {
    return new FakeScheduleApi().schedule;
  }
}
