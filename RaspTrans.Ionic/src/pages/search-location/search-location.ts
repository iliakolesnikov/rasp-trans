import { Component, Input } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { Location } from '../../model';

import { LocationApi } from '../../services/LocationApi';

@Component({
  selector: 'page-search-location',
  templateUrl: 'search-location.html'
})
export class SearchLocationPage {
  @Input()
  public title: string;
  locations: Location[];
  
  constructor(
    public navCtrl: ViewController,
    public navParams: NavParams,
    private locationApi: LocationApi)
  {
    this.title = navParams.get('title');
  }
  
  public select(location: Location) {
    this.navCtrl.dismiss(location);
  }

  public search(term: string) {
    this.locationApi.searchLocation(term, 30).subscribe(locations => {
      this.locations = locations;
    });
  }
}
