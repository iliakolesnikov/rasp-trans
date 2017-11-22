import { Component, Input, Output } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Location } from '../../model';


@Component({
  selector: 'page-search-location',
  templateUrl: 'search-location.html'
})
export class SearchLocationPage {
  @Input()
  public title: string;
  public location: Location;

  constructor(public navCtrl: ViewController) {

  }

  public search() {

  }

  public dismiss() {
    this.navCtrl.dismiss(location);
  }
}
