import {Component, Injector, Renderer, ViewChild} from '@angular/core';
import {Events, IonicPage} from 'ionic-angular';
import {BasePage} from "../base-page/base-page";
import {Keyboard } from '@ionic-native/keyboard';
import {ImgLoader} from "ionic-image-loader";
import {ServicesProvider} from "../../providers/services";

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage extends BasePage{

  type: any;
  placeholder: string = '';
  @ViewChild('input') input;
  results: any = [];
  s_type: string = '';
  result: string = '';
  loaded:boolean = true;
  b_loaded:boolean = false;
  num: number = 0;
  constructor(injector: Injector,
              private renderer: Renderer,
              private keyboard: Keyboard,
              public events: Events,
              public sp : ServicesProvider) {
    super(injector);
    this.type = this.NavParams('type');
  }

  ionViewDidEnter() {
    setTimeout(()=>{
      this.input.setFocus();
      this.keyboard.show();
    }, 150);
  }


  onImageLoad(imgLoader: ImgLoader) {
    this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
  }

  ionViewDidLoad() {
    this.placeholder = (this.type === 'provider') ? 'Search Service Providers' : 'Search Services';
  }

  getItems(e){
    this.b_loaded = false;
  }

  SearchResult(){

      this.loaded = false;
      this.sp.SearchItem(this.num, this.result, this.type).subscribe( (result: any) => {
        this.results = [];

        this.s_type = result.type;

        if(result.data.length){

          this.results = result.data;

          this.showContentView();

          this.loaded = true;
          this.b_loaded = true;

        } else {
          this.loaded = true;
          this.b_loaded = true;
          this.showContentView();
        }

        this.onRefreshComplete();
      }, (e) => {
        this.loaded = true;
        this.b_loaded = true;
        console.log(e);
        this.showErrorView();
        this.onRefreshComplete();
      });

  }

  Service(category){
    this.openPage('ServicesPage',{category:category})
  }

}
