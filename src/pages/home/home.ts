import {Component, Injector, Renderer} from '@angular/core';
import {Platform} from 'ionic-angular';
import {ServicesProvider} from "../../providers/services";
import { User } from "../../providers/user";
import {BasePage} from "../base-page/base-page";

import {ImgLoader} from "ionic-image-loader";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), { optional: true }),
        query(':enter', stagger('100ms', [animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))]), { optional: true })
      ])
    ])
  ]
})
export class HomePage extends BasePage{

  categories:any = [];
  type:any;
  num: number = 0;
  loadMore: boolean = true;

  constructor(injector:Injector,
    public platform: Platform,
    public sp : ServicesProvider,
    public user: User,
    public renderer: Renderer) {
    super(injector);

  }

  ionViewDidLoad() {
    this.firebase_CurrentScreen('User Home Screen');
    this.showLoadingView('home');
    this.loadData('');
  }

  async loadData(type: string){

      await this.sp.getServices(this.num).subscribe( (data) => {

        if(type !== 'more') this.categories = [];

        if (data.length > 0) {

          if(data.length < 6) this.loadMore = false;

          for(let i of data){
            this.categories.push(i);
          }

          this.showContentView();

        } else {

          this.loadMore = false;
          if(type !== 'more') this.showEmptyView();

        }
        this.onRefreshComplete();

      }, (err) => {
        console.log(err);
        this.showErrorView();
        this.onRefreshComplete();
      });

  }

  onReload(refresher: any) {
    this.num = 0;
    this.loadMore = true;
    this.refresher = refresher;
    this.loadData('');
  }

  onLoadMore(infiniteScroll: any) {
    this.infiniteScroll = infiniteScroll;
    this.num  = this.num + 6;
    this.loadData('more');
  }

  onImageLoad(imgLoader: ImgLoader) {
    this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
  }

  Service(category: any){
    this.openPage('ServicesPage',{category:category})
  }

}
