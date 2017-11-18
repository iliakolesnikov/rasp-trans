import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListPage } from '../list/list';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listPage: any = ListPage;
  searchPage: any = SearchPage;

  constructor(public navCtrl: NavController) {

  }

}
