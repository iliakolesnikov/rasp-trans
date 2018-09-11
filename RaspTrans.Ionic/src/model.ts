export class GeoCoordinate {
  /**
   * Latitude
   */
  lat: number;
  /**
   * Longitude
   */
  lon: number;
}

export class Location {
  name: string;
  type?: string;
  address?: string;
  coord: GeoCoordinate;
  code?: string;
}

export class Station {
  name: string;
  coord?: GeoCoordinate;
  code?: string;
  typeName: string;
  type: string;
  transportType?: TransportType;
  expressType?: string;
}

export enum TransportType {
  Plane = "самолет",
  Train = "поезд",
  Suburban = "электричка",
  Bus = "автобус",
  Water = "водный транспорт"
}

export class Schedule {
  search: SearchScheduleRequest;
  
  routes: Route[];
  segments: Segment[];
}

export class Route {
  code?: string;
  name: string;
  number: string;
  transportType?: TransportType;
  vehicle?: string;
}

export class Segment {
  departure: Date;
  arrival: Date;
  route: Route;
  startDate?: Date;
}

export class SearchScheduleRequest {
  from: Station;
  fromLocation?: Location;
  to: Station;
  toLocation?: Location;
  transportType?: TransportType;
  date? : Date;
}
