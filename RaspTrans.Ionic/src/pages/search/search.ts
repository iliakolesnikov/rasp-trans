import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Location, Station } from '../../model';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  public locationFrom: Location;
  public stationFrom: Station;
  public locationTo: Location;
  public stationTo: Station;

  constructor(public navCtrl: NavController) {

  }
}
