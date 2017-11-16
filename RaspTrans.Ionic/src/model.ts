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
  coord: GeoCoordinate;
  code: string;
}

export class Schedule {
  from: Station;
  to: Station;
}
