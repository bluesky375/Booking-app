import { Component, Injector } from "@angular/core";
import { BasePage } from "../base-page/base-page";
import { ServicesProvider } from "../../providers/services";
import * as moment from "moment";

@Component({
  selector: "page-payment",
  templateUrl: "payment.html"
})
export class PaymentPage extends BasePage {
  arrears: any = [];
  loaded: boolean = false;
  config: any;
  total: any = 0;

  constructor(injector: Injector, private sp: ServicesProvider) {
    super(injector);
    this.firebase_CurrentScreen("Service Provider Arrears Screen");
  }

  ionViewDidLoad() {
    this.loadData();
  }

  async loadData() {
    try {
      await this.sp.SystemConfig().subscribe(
        data => {
          for (let c of data) {
            this.config = c;
          }

          this.loadArrears();

          this.showContentView();
        },
        e => {
          console.log(e);
          this.showErrorView();
          this.loaded = true;
        }
      );
    } catch (e) {
      console.log(e);
      this.showErrorView();
      this.loaded = true;
    }
  }

  async loadArrears() {
    try {
      await this.sp.getArrears().subscribe(
        data => {
          this.arrears = [];
          this.total = 0;
          if (data.length > 0) {
            for (let d of data) {
              let fd = moment(d.date)
                .format("llll")
                .split(",")[0];
              let tp = moment(d.timeBooked)
                .format("llll")
                .split(",")[0];

              d.reviewed = false;
              d.full_date = fd + ", " + moment(d.date).format("MMM Do, YYYY");
              d.timeposted =
                tp + ", " + moment(d.timeBooked).format("MMM Do, YYYY");

              d.amount = d.quantity * d.service.gh_price;
              d.owe = ((this.config.rate / 100) * d.amount).toFixed(2);
              this.total = this.total + parseFloat(d.owe);
              this.arrears.push(d);
            }
            this.showContentView();
          } else {
            this.showEmptyView();
          }
          this.total = this.total.toFixed(2);
          this.loaded = true;

          this.onRefreshComplete();
        },
        e => {
          console.log(e);
          this.showErrorView();
          this.loaded = true;
        }
      );
    } catch (e) {
      console.log(e);
      this.showErrorView();
      this.loaded = true;
    }
  }

  Submit(a: { owe: string }, index: any) {
    this.showConfirm("Are you sure you want to make for this service?")
      .then(() => {
        this.showLoadingView("");
        this.sp.makePayment(a).subscribe(
          data => {
            this.total = this.total - parseFloat(a.owe);
            this.arrears.splice(index, 1);
            this.showToast("Payment was made successfully");
            this.showContentView();
          },
          e => {
            this.showContentView();
            let error: string;
            if (e._body) {
              error = JSON.parse(e._body).message;
            } else {
              error = e.message;
            }
            this.showToast(error);
            console.log(e);
          }
        );
      })
      .catch(e => console.log(e));
  }

  SubmitAll() {
    this.showConfirm("Are you sure you want to make for all the services?")
      .then(() => {
        this.showLoadingView("");
        this.sp.makeAllPayment().subscribe(
          data => {
            this.arrears = [];
            this.showToast("Payment was made successfully");
            this.showEmptyView();
          },
          e => {
            this.showContentView();
            let error: string;
            if (e._body) {
              error = JSON.parse(e._body).message;
            } else {
              error = e.message;
            }
            this.showToast(error);
            console.log(e);
          }
        );
      })
      .catch(e => console.log(e));
  }

  onReload(refresher: any) {
    this.refresher = refresher;
    this.loadData();
  }
}
