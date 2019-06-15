import { Injector } from '@angular/core';
import {
  NavController, LoadingController, ToastController, NavParams,
  AlertController, ModalController, ViewController
} from 'ionic-angular';
// import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

export abstract class BasePage {

  public isErrorViewVisible: boolean = false;
  public isEmptyViewVisible: boolean = false;
  public isContentViewVisible: boolean = false;
  public isLoadingViewVisible: boolean = false;

  protected refresher: any;
  protected infiniteScroll: any;
  protected navParams: NavParams;

  private loader: any = null;
  private navCtrl: NavController;
  private toastCtrl: ToastController;
  private loadingCtrl: LoadingController;
  private modalCtrl: ModalController;
  private alertCtrl: AlertController;
  private viewCtrl: ViewController;
  // private fbAnalytics: FirebaseAnalytics;

  constructor(injector: Injector) {
    this.loadingCtrl = injector.get(LoadingController);
    this.toastCtrl = injector.get(ToastController);
    this.modalCtrl = injector.get(ModalController);
    this.navCtrl = injector.get(NavController);
    this.alertCtrl = injector.get(AlertController);
    this.navParams = injector.get(NavParams);
    this.viewCtrl = injector.get(ViewController);
    // this.fbAnalytics = injector.get(FirebaseAnalytics);

  }


  showLoadingView(type: string) {
    console.log(type);
     if(!this.isLoadingViewVisible ){
       this.isErrorViewVisible = false;
       this.isEmptyViewVisible = false;
       this.isContentViewVisible = false;
       this.isLoadingViewVisible = true;
       return new Promise(() => {
         this.loader = this.loadingCtrl.create({
           content: `<p class="bold">Loading. Please wait...</p>`
         });
         this.loader.present();
         setTimeout(() => {
           this.dismissLoadingView();
         },15000);
       });
     }
  }

  dismissLoadingView() {
    if (this.loader) {
      this.loader.dismiss().catch((e: any) => console.log('ERROR CATCH: LoadingController dismiss', e));
    }
  }

  showContentView() {

    this.isErrorViewVisible = false;
    this.isEmptyViewVisible = false;
    this.isLoadingViewVisible = false;
    this.isContentViewVisible = true;

    this.dismissLoadingView();
  }

  showEmptyView() {

    this.isErrorViewVisible = false;
    this.isLoadingViewVisible = false;
    this.isContentViewVisible = false;
    this.isEmptyViewVisible = true;

    this.dismissLoadingView();
  }

  showErrorView() {

    this.isLoadingViewVisible = false;
    this.isContentViewVisible = false;
    this.isEmptyViewVisible = false;
    this.isErrorViewVisible = true;

    this.dismissLoadingView();
  }

  onRefreshComplete(data = null) {

    if (this.refresher) {
      this.refresher.complete()
    }

    if (this.infiniteScroll) {
      this.infiniteScroll.complete();

      if (data && data.length === 0) {
        this.infiniteScroll.enable(false);
      } else {
        this.infiniteScroll.enable(true);
      }
    }
  }

  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });

    toast.present();
  }

  NavParams(item: string){
     return this.navParams.get(item);
  }

  showConfirm(message: string): Promise<boolean> {

    return new Promise((resolve, reject) => {
      let confirm = this.alertCtrl.create({
        title: '',
        message: message,
        buttons: [{
          text: 'Cancel',
          handler: () => {
            reject();
          }
        }, {
          text: 'Ok',
          handler: () => {
            resolve(true);
          }
        }]
      });

      confirm.present().then();
    });
  }

  navigateTo(page: any, params: any = {}) {
    this.navCtrl.push(page, params);
  }

  openPage(page: any, params: any = {}) {
    this.modalCtrl.create(page, params).present().then();
  }

  GoTo(page: any, params: any = {}) {
    this.navCtrl.setRoot(page, params).then();
  }

  firebase_LogEvent(name: any, _params: any = {}){
    console.log(name);
    // this.fbAnalytics.logEvent(name, params).then()
  }

  firebase_UserId(_id: any) {
    // this.fbAnalytics.setUserId(id).then()
  }

  firebase_UserProperty(_name: any, _value:any ) {
    // this.fbAnalytics.setUserProperty(name, value).then()
  }

  firebase_CurrentScreen(name: any) {
    console.log(name);
    // this.fbAnalytics.setCurrentScreen(name).then()
  }

  goBack() {
    this.navCtrl.pop().then();
  }

  dismiss() {
    this.viewCtrl.dismiss().then();
  }

  popAll() {
    this.navCtrl.popAll().then();
  }

}
