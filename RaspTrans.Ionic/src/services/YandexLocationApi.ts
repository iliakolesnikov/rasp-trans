import { Location, GeoCoordinate, Station, SearchScheduleRequest, Schedule, Route, TransportType } from "../model";
import { LocationApi } from "./LocationApi";
import { ScheduleApi } from "./ScheduleApi";

import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

export class YandexLocationApi implements LocationApi {
  constructor(private http: HttpClient) {
    
  }

  searchLocation(term: string, limit: number): Observable<Location[]> {
    return this.http.get<any>("https://geocode-maps.yandex.ru/1.x/",
        { params: new HttpParams().set("geocode", term).set("format", "json") }
      )
      .map(data => {
        if (!data ||
          !data.response ||
          !data.response.GeoObjectCollection ||
          !data.response.GeoObjectCollection.featureMember) {
          throw new Error("Incorrect geocode response");
        }
        var result: Location[] = [];
        for (var i = 0; i < data.response.GeoObjectCollection.featureMember.length; i++) {
          var geoObj = data.response.GeoObjectCollection.featureMember[i].GeoObject;
          var coord = geoObj.Point.pos.split(' ');
          result.push({
            name: geoObj.name,
            coord: {
              lon: geoObj.Point.pos[0],
              lat: geoObj.Point.pos[1]
            }
          });
        }
        return result;
      });
  }

  searchStation(coord: GeoCoordinate, range: number): Observable<Station[]> {
    throw new Error("Method not implemented.");
  }
}
