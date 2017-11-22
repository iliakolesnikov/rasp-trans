import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Location, Station } from '../../model';
import { SearchLocationPage } from '../search-location/search-location';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  public locationFrom: Location;
  public stationFrom: Station;
  public locationTo: Location;
  public stationTo: Station;

  constructor(public modalCtrl: ModalController) {
  }

  public searchLocationFrom() {
    var locationModel = this.modalCtrl.create(SearchLocationPage, { title: "Откуда" });
  }
}
