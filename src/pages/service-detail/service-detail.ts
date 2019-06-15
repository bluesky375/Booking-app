import { Component, Injector } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { BasePage } from "../base-page/base-page";
import { ServicesProvider } from "../../providers/services";
import { User } from "../../providers/user";
import { CallNumber } from "@ionic-native/call-number";
import moment from "moment";

@IonicPage()
@Component({
  selector: "page-service-detail",
  templateUrl: "service-detail.html"
})
export class ServiceDetailPage extends BasePage {
  data: any;
  constructor(
    injector: Injector,
    public sp: ServicesProvider,
    private callNumber: CallNumber,
    public user: User
  ) {
    super(injector);
    this.data = this.NavParams("booked");
    this.firebase_CurrentScreen("Service Provider Service Detail Screen");
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

    console.log(this.data);
  }

  makeCall(num: string) {
    this.callNumber
      .callNumber(num, true)
      .then()
      .catch(() => console.log("Error launching dialer"));
  }

  confirm(item: any, status: any, name: string) {
    this.showConfirm("Are you sure you want to " + name + " this service?")
      .then(() => {
        this.showLoadingView("c-app");
        try {
          let data = {
            item: item,
            status: status,
            id: this.user.getUserInfo()._id
          };

          this.sp.confirmBooking(data).subscribe(
            d => {
              this.showContentView();
              this.goBack();
              this.showToast(
                "You've successfully " + name + "ed this appointment"
              );
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

  completed(
    item: { professional_completed: boolean; client_completed: any },
    index: any
  ) {
    this.showConfirm(
      "Are you sure you want to mark this appointment as completed"
    )
      .then(() => {
        this.showLoadingView("p-home2");
        try {
          this.sp.completedService(item, "professional").subscribe(
            data => {
              item.professional_completed = true;
              if (item.client_completed) {
                this.goBack();
              }
              this.showToast(
                "You've successfully marked this appointment as complete"
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
        } catch (e) {
          console.log(e);
          this.showErrorView();
        }
      })
      .catch(err => console.log(err));
  }

  pay(item: { professional_paid: boolean; client_paid: any }, index: any) {
    this.showConfirm("Are you sure payment has been completed'")
      .then(() => {
        this.showLoadingView("invoice");

        this.sp.paidService(item, "professional").subscribe(
          data => {
            item.professional_paid = true;
            if (item.client_paid) {
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
