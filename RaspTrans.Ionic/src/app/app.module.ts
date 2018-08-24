import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SearchPage } from '../pages/search/search';
import { SearchLocationPage } from '../pages/search-location/search-location';
import { SearchStationPage } from '../pages/search-station/search-station';
import { SchedulePage } from '../pages/schedule/schedule';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LocationApi } from "../services/LocationApi";
import { ScheduleApi } from "../services/ScheduleApi";
import { FakeLocationApi, FakeScheduleApi } from "../services/FakeApi";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SearchPage,
    SearchLocationPage,
    SearchStationPage,
    SchedulePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SearchPage,
    SearchLocationPage,
    SearchStationPage,
    SchedulePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: LocationApi, useClass: FakeLocationApi },
    { provide: ScheduleApi, useClass: FakeScheduleApi },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
