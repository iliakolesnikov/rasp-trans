import { Component } from '@angular/core';
import { ModalController } from "ionic-angular";
import { Location, Station } from "../../model";
import { SearchLocationPage } from "../search-location/search-location";
import { SearchStationPage } from "../search-station/search-station";

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
    var locationModal = this.modalCtrl.create(SearchLocationPage, { title: "Откуда" });
    locationModal.onDidDismiss(location => {
      if (location) {
        this.locationFrom = location;
        this.stationFrom = null;
        this.searchStationFrom();
      }
    });
    locationModal.present();
  }

  public searchStationFrom() {
    if (!this.locationFrom) {
      this.searchLocationFrom();
    } else {
      var stationModal =
        this.modalCtrl.create(SearchStationPage, { title: "Станция отправления", location: this.locationFrom });
      stationModal.onDidDismiss(station => {
        if (station) {
          this.stationFrom = station;
        }
      });
      stationModal.present();
    }
  }

  public searchLocationTo() {
    var locationModal = this.modalCtrl.create(SearchLocationPage, { title: "Куда" });
    locationModal.onDidDismiss(location => {
      if (location) {
        this.locationTo = location;
        this.stationTo = null;
        this.searchStationTo();
      }
    });
    locationModal.present();
  }

  public searchStationTo() {
    if (!this.locationTo) {
      this.searchLocationTo();
    } else {
      var stationModal =
        this.modalCtrl.create(SearchStationPage, { title: "Станция прибытия", location: this.locationTo });
      stationModal.onDidDismiss(station => {
        if (station) {
          this.stationTo = station;
        }
      });
      stationModal.present();
    }
  }

  public searchSchedule() {
    
  }
}
