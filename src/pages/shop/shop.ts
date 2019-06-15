import {Component, Injector, Renderer} from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {BasePage} from "../base-page/base-page";
import {ImgLoader} from "ionic-image-loader";
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import {ServicesProvider} from "../../providers/services";
import {CallNumber} from "@ionic-native/call-number";
import {SocialSharing} from "@ionic-native/social-sharing";


@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage extends BasePage{

  service:any = null;
  services:any = [];
  reviews:any = [];
  category:any;
  categories:any;
  provider:any;

  constructor(injector: Injector,
             public sp: ServicesProvider,
              private callNumber: CallNumber,
              private launchNavigator: LaunchNavigator,
              private socialSharing: SocialSharing,
             public renderer: Renderer) {
    super(injector);
    this.category = this.NavParams('category');
    this.provider = this.NavParams('provider');
    this.firebase_CurrentScreen('Service Provider Profile Screen');
  }

  onImageLoad(imgLoader: ImgLoader) {
    this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
  }

  ionViewDidLoad() {
    this.showLoadingView('shop=view');
    this.loadData()
  }


  async loadData(){

    this.services = [];
    this.categories = [];
    let categories = [];
    let j = 0;
    if(this.provider.services && this.provider.services.length > 0){
      for(let s of this.provider.services){
       await this.sp.getServiceById(s).subscribe( (service: any) => {
         categories.push(JSON.parse(service._body));
         j++;
         if(j === this.provider.services.length){
           for(let s of categories){
             s.selected = false;
             this.categories.push(s);
           }
         }
       })
      }
    }

    let services = [];
    if(this.provider.categories && this.provider.categories.length > 0){
      let i = 0;
      for(let category of this.provider.categories){
        await this.sp.getCategoryById(category).subscribe( (service: any) => {
          services.push(JSON.parse(service._body));
          i++;
          if(i === this.provider.categories.length){
            for(let s of services){
              s.selected = false;
              this.services.push(s);
            }
            this.showContentView();
            this.onRefreshComplete();
          }


        }, (e) => {
          console.error(e);
          this.showErrorView();
          this.onRefreshComplete();
        });
      }
    }else{
      this.showContentView();
    }

  }

  async loadProvider(){
    await this.sp.getPersonnelById(this.provider._id).subscribe( (provider: any) => {

      this.provider = provider;
      this.showContentView();
      this.onRefreshComplete();


    }, (e) => {
      console.error(e);
      this.showErrorView();
      this.onRefreshComplete();
    });
  }

  onReload(refresher: any) {
    this.refresher = refresher;
    this.loadData();
    this.loadProvider();
  }

  async onShare () {
    try {
      await this.socialSharing.share('I booked '+this.provider.name +' - ' +this.provider.title+ ' on spekapp. download at http://www.spekapp.com', null, null)
    } catch (err) {
      console.warn(err)
    }
  }

  async onCall () {

    if (!this.provider.number) return;

    try {
      await this.callNumber.callNumber(this.provider.number, true)
    } catch (err) {
      console.warn(err)
    }
  }

  async goToMap() {

    try {

      const googleMaps = this.launchNavigator.APP.GOOGLE_MAPS;
      const appleMaps = this.launchNavigator.APP.APPLE_MAPS;

      const isGoogleMapsAvailable = await this.launchNavigator.isAppAvailable(googleMaps);
      const isAppleMapsAvailable = await this.launchNavigator.isAppAvailable(appleMaps);

      let app = null;

      if (isGoogleMapsAvailable) {
        app = this.launchNavigator.APP.GOOGLE_MAPS;
      } else if (isAppleMapsAvailable) {
        app = this.launchNavigator.APP.APPLE_MAPS;
      } else {
        app = this.launchNavigator.APP.USER_SELECT;
      }

      const options: LaunchNavigatorOptions = {
        app: app
      };

      const destination = [
        parseFloat(this.provider.latitude),
        parseFloat(this.provider.longitude)
      ];

      await this.launchNavigator.navigate(destination, options);

    } catch (err) {
      console.warn(err);
    }

  }

  Book(){

    if(!this.service){
      this.showToast('Select a service');
      return;
    }

    this.openPage('CalendarPage', { service: this.service,category: this.category, provider:this.provider })

  }

  SelectService(service: { _id: any; }){
    for(let s of this.services) s.selected = service._id === s._id;
    this.service = service;
    for(let c of this.categories) {
      if(c._id === this.service.serviceId ){
        this.category = c;
      }
    }
  }

}
