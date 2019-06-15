import { Component, ViewChild, Renderer  } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderColor } from '@ionic-native/header-color';
import { FCM } from '@ionic-native/fcm';
import { Dialogs } from '@ionic-native/dialogs';
// import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

import { AppConfig } from './app.config';
import { ImageLoaderConfig, ImgLoader } from 'ionic-image-loader';
import {User} from "../providers/user";
import {TabPage} from "../pages/tab/tab";
import {TabsPage} from "../pages/tabs/tabs";
import * as moment from "moment";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  user:any;

  constructor(public platform: Platform,
              private renderer: Renderer,
              private events: Events,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private UserService: User,
              private fcm: FCM,
              private dialogs: Dialogs,
              // private fbAnalytics: FirebaseAnalytics,
              private imageLoaderConfig: ImageLoaderConfig,
              private headerColor: HeaderColor) {

    this.initializeApp();
  }

  initializeApp() {

    this.setupLocalStorage();
    this.setupEvents();
    this.setupImageLoader();

    this.user = this.UserService.getUserInfo();
    this.fetchUser();

    this.platform.ready().then(() => {
      this.setupStatusBar();
      this.setupAnalytics();
      this.setupPush();
      this.setupAndroidHeaderColor();
      this.splashScreen.hide();
    });
  }

  fetchUser() {
    this.user = this.UserService.getUserInfo();
  }

  setupLocalStorage() {

    if(window.localStorage.getItem('skipIntroPage')){

          if(window.localStorage.getItem('token')){

            if(JSON.parse(window.localStorage.getItem('user')).userType === 'Client'){

              this.rootPage = TabPage;
            }

            else if(JSON.parse(window.localStorage.getItem('user')).userType === 'Professional'){

              this.rootPage = TabsPage;
            }

            else {
              this.rootPage = TabPage;
            }

          }
          else {
            this.rootPage = "SigninPage";
          }
    }
    else{
      this.rootPage = 'WalkthroughPage';
    }


  }

  setupEvents() {

    this.events.subscribe('user:login', (user) => {
      this.user = user;
      this.fetchUser();
    });

    this.events.subscribe('user:logout', () => {
      this.onLogOut();
    });

  }

  onLogOut(){

  }

  setupImageLoader() {
    this.imageLoaderConfig.enableSpinner(false);
    this.imageLoaderConfig.setFallbackUrl('assets/imgs/placeholder1.png');
    this.imageLoaderConfig.enableDebugMode();
    this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
    this.imageLoaderConfig.setBackgroundSize('cover');
    this.imageLoaderConfig.setConcurrency(20);
  }

  onImageLoad(imgLoader: ImgLoader) {
    this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
  }

  setupStatusBar() {
    if (this.platform.is('ios')) {
      this.statusBar.overlaysWebView(true);
      this.statusBar.styleDefault();
    } else {
      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString(AppConfig.HEADER_COLOR);
    }
  }

  setupAndroidHeaderColor() {
    if (AppConfig.HEADER_COLOR && this.platform.is('android')) {
      this.headerColor.tint(AppConfig.HEADER_COLOR);
    }
  }

  setupAnalytics() {
    // this.fbAnalytics.setEnabled(true).then();
  }

  setupPush() {

    let user = null;
    let data = {
      _id: null,
      type:'user',
      device_token:null
    };

    if(window.localStorage.getItem('token')){

      user = JSON.parse(window.localStorage.getItem('user'));

      this.fcm.getToken().then(token => {

        data._id = user._id;
        data.device_token = token;
        if(user.userType === 'Professional') data.type = 'professional';

        this.UserService.updateDeviceToken(data).subscribe( (data) => {console.log(data);})

      });

    }


    this.fcm.onTokenRefresh().subscribe(token => {

      if(window.localStorage.getItem('token')){

        user = JSON.parse(window.localStorage.getItem('user'));

        data._id = user._id;
        data.device_token = token;
        if(user.userType === 'Professional') data.type = 'professional';

        this.UserService.updateDeviceToken(data).subscribe( (data) => {console.log(data)})

      }

    });


    this.fcm.onNotification().subscribe(data => {

      let page: string = '';
      let title: string = '';
      let message: string = '';
      let booked: any = JSON.parse(data.booked);
      let fd = moment(booked.date).format('llll').split(',')[0];
      booked.full_date =  fd+", "+ moment(booked.date).format('MMM Do, YYYY');

      if(data.type === 'booking_notification_to_provider'){
        page = 'ServiceDetailPage';
        title = booked.service.title + " appointment request";
        message = "on "+booked.full_date+" at "+booked.time
      }

      if(data.type === 'accepted_booking_notification_to_client'){
        page = 'MyServiceDetailPage';
        title = booked.service.title + " appointment accepted";
        message = "on "+booked.full_date+" at "+booked.time
      }

      if(data.type === 'confirmed_completion_by_all') {
        page = (user.userType === 'Professional') ? 'ServiceDetailPage' :'MyServiceDetailPage';
        title = "Appointment completion confirmed";
        message = booked.service.title+" appointment on "+booked.full_date+" at "+booked.time
      }

      if(data.type === 'confirmed_completion_by_professional_only'){
        page = 'MyServiceDetailPage';
        title = "Appointment completion confirmed";
        message = booked.service.title+" appointment on "+booked.full_date+" at "+booked.time
      }

      if(data.type === 'confirmed_completion_by_client_only'){
        page = 'ServiceDetailPage';
        title = "Appointment completion confirmed";
        message = booked.service.title+" appointment on "+booked.full_date+" at "+booked.time
      }

      if(data.type === 'confirmed_payment_by_all'){
        page = (user.userType === 'Professional') ? 'ServiceDetailPage' :'MyServiceDetailPage';
        title = "Appointment payment confirmed";
        message = booked.service.title+" appointment on "+booked.full_date+" at "+booked.time

      }

      if(data.type === 'appointment_reminder') {
        page = (user.userType === 'Professional') ? 'ServiceDetailPage' :'MyServiceDetailPage';
        title = "Appointment Reminder";
        message = booked.service.title+" appointment @"+booked.time
      }

      if(data.type === 'confirmed_payment_by_professional_only') {
        page = 'MyServiceDetailPage';
        title = "Appointment payment confirmed";
        message = booked.service.title+" appointment on "+booked.full_date+" at "+booked.time
      }

      if(data.type === 'appointment_cancelled_by_professional') {
        page = 'MyServiceDetailPage';
        title = "Appointment Reminder";
        message = booked.service.title+" appointment on "+booked.full_date+" at "+booked.time
      }

      if(data.type === 'confirmed_payment_by_client_only')  {
        page = 'ServiceDetailPage';
        title = "Appointment payment confirmed";
        message = booked.service.title+" appointment on "+booked.full_date+" at "+booked.time

      }

      if(data.wasTapped){

        this.nav.push(page, {booked: booked}).then()

      } else {
         console.log('foreground');
        this.dialogs.beep(1);
        this.dialogs.confirm(message,title,['Ok','Cancel']).then( (res: any) => {
          console.log(res);
          if(res.buttonIndex === 1) {
            this.nav.push(page, {booked: booked}).then()
          }
        });



      }

    });
  }

}

