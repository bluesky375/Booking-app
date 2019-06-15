import { Component, Injector } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { BasePage } from "../base-page/base-page";
import { ServicesProvider } from "../../providers/services";
import { User } from "../../providers/user";
import * as moment from "moment";

@IonicPage()
@Component({
  selector: "page-my-service-detail",
  templateUrl: "my-service-detail.html"
})
export class MyServiceDetailPage extends BasePage {
  data: any;
  constructor(
    injector: Injector,
    public sp: ServicesProvider,
    public user: User
  ) {
    super(injector);
    this.data = this.NavParams("booked");
    this.firebase_CurrentScreen("User Service Detail Screen");
  }

  ionViewDidLoad() {
    let fd = moment(this.data.date)
      .format("llll")
      .split(",")[0];
    let tp = moment(this.data.timeBooked)
      .format("llll")
      .split(",")[0];

    this.data.reviewed = false;
    this.data.comment = "";
    this.data.rating = "";
    this.data.full_date =
      fd + ", " + moment(this.data.date).format("MMM Do, YYYY");
    this.data.timeposted =
      tp + ", " + moment(this.data.timeBooked).format("MMM Do, YYYY");

    if (this.data.provider_.reviews.length > 0) {
      for (let r of this.data.provider_.reviews) {
        if (this.data.userId === r.userId && this.data._id === r.bookedId) {
          this.data.reviewed = true;
          this.data.comment = r.comment;
          this.data.rating = r.rating;
        }
      }
    }
  }

  myCallbackFunction = (_params: {
    bookedId: any;
    comment: any;
    rating: any;
  }) => {
    return new Promise((resolve, reject) => {
      if (this.data._id === _params.bookedId) {
        this.data.reviewed = true;
        this.data.comment = _params.comment;
        this.data.rating = _params.rating;
      }
      resolve();
    });
  };

  completed(
    item: { client_completed: boolean; professional_completed: any },
    index: any
  ) {
    this.showConfirm(
      "Are you sure you want to mark this appointment as completed"
    )
      .then(() => {
        this.showLoadingView("p-home2");
        try {
          this.sp.completedService(item, "client").subscribe(
            data => {
              item.client_completed = true;
              if (item.professional_completed) {
                this.goBack();
              }
              this.showToast(
                "You've successfully marked this appointment as complete"
              );
              this.showContentView();
            },
            error => {
              console.log(error);
              this.showErrorView();
              this.showToast(error.message);
            }
          );
        } catch (e) {
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
      })
      .catch(err => console.log(err));
  }

  pay(item: { client_paid: boolean; professional_paid: any }, index: any) {
    this.showConfirm("Are you sure payment has been completed'")
      .then(() => {
        this.showLoadingView("invoice");

        this.sp.paidService(item, "client").subscribe(
          data => {
            item.client_paid = true;
            if (item.professional_paid) {
              this.goBack();
            }
            this.showToast(
              "You've successfully marked this appointment as paid"
            );
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
      .catch(err => console.log(err));
  }
}
