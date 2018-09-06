import { Component } from '@angular/core';
import { ModalController, NavController } from "ionic-angular";
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

import { Location, Station, SearchScheduleRequest} from "../../model";
import { SearchLocationPage } from "../search-location/search-location";
import { SearchStationPage } from "../search-station/search-station";
import { SchedulePage } from "../schedule/schedule";

import { ScheduleApi } from '../../services/ScheduleApi';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  public locationFrom: Location;
  public stationFrom: Station;
  public locationTo: Location;
  public stationTo: Station;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private scheduleApi: ScheduleApi,
    private storage: Storage) {

    storage.get("lastSearchRequest").then(request => {
      var lastSearchRequest = request as SearchScheduleRequest;
      if (lastSearchRequest != null) {
        this.locationFrom = lastSearchRequest.fromLocation;
        this.locationTo = lastSearchRequest.toLocation;
        this.stationFrom = lastSearchRequest.from;
        this.stationTo = lastSearchRequest.to;
      }
    });
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
    if (this.stationFrom && this.stationTo) {
      
      this.scheduleApi.search(this.getSearchRequest()).subscribe(schedule => {
        this.storage.set("lastSearchRequest", this.getSearchRequest());
        this.navCtrl.push(SchedulePage, { schedule: schedule })
      });
    }
  }

  getSearchRequest(): SearchScheduleRequest {
    return {
      fromLocation: this.locationFrom,
      from: this.stationFrom,
      toLocation: this.locationTo,
      to: this.stationTo
    };
  }
}
