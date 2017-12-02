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
  address: string;
  coord: GeoCoordinate;
  code?: string;
}

export class Station {
  name: string;
  coord?: GeoCoordinate;
  code?: string;
  typeName: string;
  type: string;
  transportType: string;
  expressType: string;
}

export class Schedule {
  from: Station;
  to: Station;
  
  routes: Route[];
  segments: Segment[];
}

export class Route {
  code?: string;
  name: string;
  number: string;
  transportType: string;
  vehicle: string;
}

export class Segment {
  arrival: Date;
  departure: Date;
  route: Route;
  startDate: Date;
}
