import {Component, Injector} from '@angular/core';
import { IonicPage, } from 'ionic-angular';
import {ServicesProvider} from "../../providers/services";
import {BasePage} from "../base-page/base-page";
import * as moment from "moment";

@IonicPage()
@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage extends BasePage{

  item:any;
  option: string = 'unpaid';
  paid: any = [];
  unpaid: any = [];
  loaded: boolean = false;

  constructor(injector: Injector,
     public sp: ServicesProvider) {
    super(injector);
  }

  ionViewDidLoad() {
    this.firebase_CurrentScreen('Service Provider Invoice Screen');
    this.showLoadingView('invoice page');
    this.loadData();
  }

  async loadData(){
    try {

      await this.sp.getCompletedBooked().subscribe( (data) => {
        this.paid = [];
        this.unpaid = [];

        if(data.length > 0){
          for(let d of data){

            let fd = moment(d.date).format('llll').split(',')[0];
            let tp = moment(d.timeBooked).format('llll').split(',')[0];

            d.full_date =  fd+", "+ moment(d.date).format('MMM Do, YYYY');
            d.timeposted = tp+", "+moment(d.timeBooked).format('MMM Do, YYYY');

            if(d.professional_paid && d.client_paid){
              this.paid.push(d)
            }else{
              this.unpaid.push(d);
            }

          }

          this.showContentView();
        }else{
          this.showEmptyView();
        }

        this.loaded = true;
        this.onRefreshComplete();
      }, (error) => {
        console.log(error);

        this.showErrorView();
        this.onRefreshComplete();
      });


    }catch (e) {
      console.log(e);
      this.showErrorView();
      this.onRefreshComplete();
    }
  }

  onReload(refresher: any) {
    this.refresher = refresher;
    this.loadData();
  }

  pay(item: { professional_paid: boolean; client_paid: any; },index: any){

    this.showConfirm("Are you sure payment has been completed").then( () => {

      this.showLoadingView('invoice');

      this.sp.paidService(item,'professional').subscribe(data => {
        item.professional_paid = true;
        if(item.client_paid) {
          this.paid.push(item);
          this.unpaid.splice(index, 1);
        }
        this.showContentView();
      },e => {
        this.showContentView();
        let error: string;
        if(e._body){
          error = JSON.parse(e._body).message
        }else {
          error = e.message
        }
        this.showToast(error);
        console.log(e);
      })
    }).catch( (err) => console.log(err));

  }


}
