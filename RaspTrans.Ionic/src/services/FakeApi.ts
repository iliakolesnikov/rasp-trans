import { Location, GeoCoordinate, Station } from "../model";
import { LocationApi } from "./LocationApi";
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
        transportType: "bus"
      },
      {
        name: "Школа",
        code: "s9739285",
        typeName: "автобусная остановка",
        type: "bus_stop",
        transportType: "bus"
      },
      {
        name: "Автостанция",
        code: "s9735795",
        typeName: "автобусная остановка",
        type: "bus_stop",
        transportType: "bus"
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
