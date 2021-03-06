import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Location, Station, Schedule } from "../../model";
import * as moment from 'moment';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
  
  public schedule: Schedule;

  constructor(navCtrl: NavController, navParams: NavParams) {
    this.schedule = navParams.get("schedule");
  }
  
  get today(): Date {
    return moment().startOf('day').toDate();
  }

  get tomorrow(): Date {
    return moment().startOf('day').add(1, 'day').toDate();
  }

  selectDate(date: Date) {
    
  }
}
