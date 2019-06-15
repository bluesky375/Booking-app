import {Component, Injector} from '@angular/core';
import { IonicPage, } from 'ionic-angular';
import {ServicesProvider} from "../../providers/services";
import {BasePage} from "../base-page/base-page";
import * as moment from "moment";


@IonicPage()
@Component({
  selector: 'page-my-invoice',
  templateUrl: 'my-invoice.html',
})
export class MyInvoicePage extends BasePage{

  item:any;
  option: string = 'unpaid';
  paid: any = [];
  unpaid: any = [];
  loaded: boolean = false;

  constructor(injector: Injector,
              public sp: ServicesProvider) {
    super(injector);
    this.firebase_CurrentScreen('User Invoice Screen');
  }

  ionViewDidLoad() {
    this.showLoadingView('invoice page');
    this.loadData();
  }

  myCallbackFunction = (_params: { bookedId: any; comment: any; rating: any; }) => {
    return new Promise((resolve) => {
        for(let u of this.unpaid) {
          if(u._id === _params.bookedId) {
            u.reviewed = true;
            u.comment = _params.comment;
            u.rating = _params.rating;
          }
        }
      resolve();
    });
  };

  async loadData(){
    try {

      await this.sp.getCompletedBookedByUserId().subscribe( (data) => {
        this.paid = [];
        this.unpaid = [];

        if(data.length > 0){
          for(let d of data){

            let fd = moment(d.date).format('llll').split(',')[0];
            let tp = moment(d.timeBooked).format('llll').split(',')[0];

            d.reviewed = false;
            d.comment = '';
            d.rating = '';
            d.full_date =  fd+", "+ moment(d.date).format('MMM Do, YYYY');
            d.timeposted = tp+", "+moment(d.timeBooked).format('MMM Do, YYYY');


            if(d.professional_paid && d.client_paid){
              if(d.provider_.reviews.length > 0){
                for(let r of d.provider_.reviews){
                  if(d.userId === r.userId && d._id === r.bookedId){
                    d.reviewed = true;
                    d.comment = r.comment;
                    d.rating = r.rating;
                  }
                }
              }
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
        this.loaded = true;
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

  pay(item: { client_paid: boolean; professional_paid: any; },index: any){

    this.showConfirm("Are you sure payment has been completed'").then( () => {

      this.showLoadingView('invoice');

      this.sp.paidService(item,'client').subscribe(() => {
        item.client_paid = true;
        if(item.professional_paid) {
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

