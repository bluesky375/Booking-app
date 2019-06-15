import {Component, Injector, Renderer} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {BasePage} from "../base-page/base-page";
import { User } from "../../providers/user";
import {ServicesProvider} from "../../providers/services";
import * as moment from  'moment';
import {ImgLoader} from "ionic-image-loader";

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage extends BasePage{

  type:any = 'info';
  category:any;
  info:any;
  services:any = [];
  offers:any = [];
  providers:any = [];
  catLoaded:Boolean = false;
  offLoaded:Boolean = false;
  SerLoaded:Boolean = false;
  itemExpandHeight: number = 230;

  constructor(injector: Injector,
     public sp: ServicesProvider,
     public renderer: Renderer,
     public user: User) {
    super(injector);
    this.category = this.NavParams('category');
    this.firebase_CurrentScreen('Services Screen');
  }

  ionViewDidLoad() {
    this.showLoadingView('service');
    this.loadCategoryData();
    this.loadOfferData();
    this.loadServiceProviders();
  }

  onImageLoad(imgLoader: ImgLoader) {
    this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
  }

  async loadCategoryData(){
    this.services = [];
    await this.sp.getCategoriesByType(this.category._id).subscribe( (services) => {
      if (services.length) {

        for(let i of services){
          i.expanded = false;
          this.services.push(i);
        }
        this.catLoaded = true;

        if (this.offLoaded  && this.SerLoaded){
          this.showContentView();
        }

      } else {
        this.catLoaded = true;
        if (this.offLoaded  && this.SerLoaded && this.services.length === 0){
          this.showContentView();
        }
      }

      if (this.offLoaded  && this.SerLoaded) {
        this.onRefreshComplete();
      }
    }, (e) => {
      console.error(e);
      this.showErrorView();
      this.onRefreshComplete();
    });

  }

  async loadOfferData(){
    this.offers = [];
    await this.sp.getOffersByType(this.category._id).subscribe( (offers) => {
      if (offers.length) {

        for(let i of offers){
          i.from = moment(i.from).format("MMM Do");
          i.to = moment(i.to).format("MMM Do");
          this.offers.push(i);
        }

        this.offLoaded = true;

        if(this.catLoaded  && this.SerLoaded){
          this.showContentView();
        }

      } else {
        this.offLoaded = true;
        if (this.catLoaded  && this.SerLoaded && this.offers.length === 0){
          this.showContentView();
        }
      }

      if (this.catLoaded && this.SerLoaded) {
        this.onRefreshComplete();
      }
    },(e) => {
      console.error(e);
      this.showErrorView();
      this.onRefreshComplete();
    });
  }

  async loadServiceProviders(){
    
    await this.sp.getPersonelByCategory(this.category._id).subscribe( (providers) => {
      this.providers = [];
      if (providers.length) {

        for(let i of providers){
          i.expanded = false;
          this.providers.push(i);
        }
        this.SerLoaded = true;

        if (this.offLoaded  && this.catLoaded){
          this.showContentView();
        }

      } else {
        this.SerLoaded = true;
        if (this.offLoaded  && this.catLoaded && this.providers.length === 0){
          this.showContentView();
        }
      }

      if (this.offLoaded  && this.catLoaded) {
        this.onRefreshComplete();
      }
    }, (e) => {
      console.error(e);
      this.showErrorView();
      this.onRefreshComplete();
    });
  }

  // book(service){
  //   this.navigateTo('CalendarPage',{service:service,category:this.category});
  // }
  //
  // UserProfile(){
  //   this.navigateTo('ProfilePage')
  // }
  //
  // presentPopover(myEvent) {
  //   this.showPopover(myEvent,Popover)
  // }


  onReload(refresher) {
    this.refresher = refresher;
    this.loadCategoryData();
    this.loadOfferData();
    this.loadServiceProviders();
  }

}
