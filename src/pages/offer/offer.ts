import {Component, Injector, Renderer} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {BasePage} from "../base-page/base-page";
import * as moment from  'moment';
import {ImgLoader} from "ionic-image-loader";

@IonicPage()
@Component({
  selector: 'page-offer',
  templateUrl: 'offer.html',
})
export class OfferPage extends BasePage{

  category: any = null;
  offer : any = null;
  from: any;
  to: any;

  constructor(injector: Injector,
     public renderer: Renderer) {
    super(injector);
    this.offer = this.NavParams('offer');
    this.category = this.NavParams('category');
    this.firebase_CurrentScreen('User Offers Screen');
  }

  ionViewDidLoad() {
   this.from = moment(new Date(this.offer.from)).format("MMM Do YYYY");
   this.to = moment(new Date(this.offer.to)).format("MMM Do YYYY");
  }

  onImageLoad(imgLoader: ImgLoader) {
    this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
  }

}
