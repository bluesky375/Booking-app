import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import {FirebaseAnalytics} from "@ionic-native/firebase-analytics";

@IonicPage()
@Component({
  selector: 'page-walkthrough-page',
  templateUrl: 'walkthrough-page.html'
})
export class WalkthroughPage {

  constructor(public navCtrl: NavController
              // ,private firebase: FirebaseAnalytics
  ) {
    // this.firebase.setCurrentScreen('Welcome Screen').then();
  }

  ionViewDidLoad() {
  }

  goToHome() {
    window.localStorage.setItem('skipIntroPage',JSON.stringify({true:true}));
    this.navCtrl.setRoot('SigninPage');
  }

}
