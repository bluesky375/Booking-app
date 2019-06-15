import {Component, Injector, Renderer} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {BasePage} from "../base-page/base-page";
import {ServicesProvider} from "../../providers/services";
import {ImgLoader} from "ionic-image-loader";


@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage extends BasePage{

  option: any = 'details';
  service:any;
  category:any;
  providers:any = [];

  constructor(injector:Injector,
     public sp: ServicesProvider,
     public renderer: Renderer ) {
    super(injector);
    this.service = this.NavParams('service');
    this.category = this.NavParams('category');
    this.firebase_CurrentScreen('Service Screen');
  }

  ionViewDidLoad(){
    this.showLoadingView('service-view');
    this.loadData();
  }

  onImageLoad(imgLoader: ImgLoader) {
    this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
  }

  async loadData() {
    this.providers = [];
    await this.sp.getPersonelByService(this.service._id).subscribe( (providers) => {
      if (providers.length) {

        for(let i of providers){
          i.expanded = false;
          this.providers.push(i);
        }
        this.showContentView();

      } else {
        this.showEmptyView();
      }

      this.onRefreshComplete();

    }, (e) => {
      console.error(e);
      this.showErrorView();
      this.onRefreshComplete();
    });


  }


  onReload(refresher){
    this.refresher = refresher;
    this.loadData();
  }

}
