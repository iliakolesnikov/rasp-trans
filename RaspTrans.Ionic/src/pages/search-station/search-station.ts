import { Component, Input } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { Station, Location } from '../../model';
import { LocationApi } from '../../services/LocationApi';

@Component({
  selector: 'page-search-station',
  templateUrl: 'search-station.html'
})
export class SearchStationPage {
  @Input()
  public title: string;

  @Input()
  public location: Location;

  stations: Station[];

  constructor(
    public navCtrl: ViewController,
    public navParams: NavParams,
    private locationApi: LocationApi)
  {
    this.title = navParams.get('title');
    this.location = navParams.get('location');
    this.loadStations();
  }

  loadStations() {
    this.locationApi.searchStation(this.location.coord, 30).subscribe(stations => {
      this.stations = stations;
    });
  }

  select(station: Station) {
    this.navCtrl.dismiss(station);
  }
}
