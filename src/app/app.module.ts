import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CallNumber } from '@ionic-native/call-number';
import { Facebook } from '@ionic-native/facebook';
import { HeaderColor } from '@ionic-native/header-color';
import { BrowserTab } from '@ionic-native/browser-tab';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Calendar } from '@ionic-native/calendar';
import { FCM } from '@ionic-native/fcm';
import { Crop } from '@ionic-native/crop';
import { Dialogs } from '@ionic-native/dialogs';
import { Keyboard } from '@ionic-native/keyboard';
// import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

import { IonicStorageModule } from '@ionic/storage';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { IonicImageLoader } from 'ionic-image-loader';
import { StarRatingModule } from 'angular-star-rating';

import { HttpModule } from "@angular/http";
import { User } from "../providers/user";
import { CountryCode } from "../providers/country-code";
import { ServicesProvider } from "../providers/services";
import { JsonData } from "../providers/json-data";

import { ExpandableComponent } from "../components/expandable/expandable";
import { HomePage } from "../pages/home/home";
import { ProfilePage } from "../pages/profile/profile";
import { ServiceProvidersPage } from "../pages/service-providers/service-providers";
import { MyAppointmentsPage } from "../pages/my-appointments/my-appointments";
import { TabPage } from "../pages/tab/tab";
import { TabsPage } from "../pages/tabs/tabs";
import { SharedModule } from "../shared.module";
import { SuperTabsModule } from "ionic2-super-tabs";
import { Camera } from "@ionic-native/camera";

import * as firebase from 'firebase';
import { UploadServiceProvider } from '../providers/upload-service/upload-service';
import { UploadImageProvider } from '../providers/upload-image/upload-image';
import { ProfessionalsHomePage } from "../pages/professionals-home/professionals-home";
import { AppointmentsPage } from "../pages/appointments/appointments";
import { ProProfilePage } from "../pages/pro-profile/pro-profile";
import { PaymentPage } from "../pages/payment/payment";
import { MapStyle } from "../providers/map-style";

let config = {
  apiKey: "AIzaSyCvba_y4f1a6TIm1RrMGvna02asGAXn6w4",
  authDomain: "spekup-44801.firebaseapp.com",
  databaseURL: "https://spekup-44801.firebaseio.com",
  projectId: "spekup-44801",
  storageBucket: "spekup-44801.appspot.com",
  messagingSenderId: "471938106219"
};

firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    ExpandableComponent,

    TabPage,
    TabsPage,

    HomePage,
    ProfilePage,
    ServiceProvidersPage,
    MyAppointmentsPage,

    ProfessionalsHomePage,
    AppointmentsPage,
    ProProfilePage,
    PaymentPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ImgFallbackModule,
    LazyLoadImageModule,
    StarRatingModule.forRoot(),
    IonicImageLoader.forRoot(),
    IonicStorageModule.forRoot(),
    SuperTabsModule.forRoot(),
    SharedModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExpandableComponent,

    TabPage,
    TabsPage,

    HomePage,
    ProfilePage,
    ServiceProvidersPage,
    MyAppointmentsPage,

    ProfessionalsHomePage,
    AppointmentsPage,
    ProProfilePage,
    PaymentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    LaunchNavigator,
    CallNumber,
    SocialSharing,
    HeaderColor,
    BrowserTab,
    Facebook,
    File,
    FileTransfer,
    Calendar,
    Camera,
    FCM,
    Crop,
    Dialogs,
    Keyboard,
    // FirebaseAnalytics,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MapStyle,
    User,
    CountryCode,
    JsonData,
    Facebook,
    CallNumber,
    ServicesProvider,
    UploadServiceProvider,
    UploadImageProvider
  ]
})
export class AppModule {}
