import { Component, Injector } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { BasePage } from "../base-page/base-page";
import { User } from "../../providers/user";
import * as moment from "moment";
import { ServicesProvider } from "../../providers/services";
import swal from "sweetalert";
import { Calendar } from "@ionic-native/calendar";
import { Geolocation, GeolocationOptions } from "@ionic-native/geolocation";

@IonicPage()
@Component({
  selector: "page-confirm",
  templateUrl: "confirm.html"
})
export class ConfirmPage extends BasePage {
  service: any;
  category: any;
  time: string;
  slot: string;
  date: string;
  payment: string;
  location: string = "";
  booked: any = [];

  constructor(
    injector: Injector,
    public user: User,
    private calendar: Calendar,
    private geolocation: Geolocation,
    public sp: ServicesProvider
  ) {
    super(injector);
    this.service = this.NavParams("service");
    this.category = this.NavParams("category");
    this.time = this.NavParams("time");
    this.slot = this.NavParams("slot");
    this.date = moment(this.NavParams("day")).format("dddd MMM Do");
    this.booked = this.NavParams("booked");
    this.payment = this.NavParams("payment");
    this.firebase_CurrentScreen("Confirm Screen");
  }

  Book() {
    let open = true;
    let provider = null;
    if (this.booked.provider) {
      console.log(this.booked.provider);
      console.log(this.booked.provider._id);
      open = false;
      provider = this.booked.provider._id;
    }
    let d = {
      id: this.user.getUserInfo()._id,
      service: this.booked.service._id,
      category: this.booked.category._id,
      service_title: this.booked.service.title,
      date: this.booked.date,
      time: this.booked.time,
      quantity: this.booked.quantity,
      fulldate: this.booked.fulldate,
      open: open,
      provider: provider,
      coords: ""
    };
    console.log(d);
    this.showLoadingView("book");
    if (open) {
      const options: GeolocationOptions = {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 60000
      };
      this.geolocation
        .getCurrentPosition(options)
        .then(resp => {
          d.coords = JSON.stringify(resp.coords);
          this.submit(d);
        })
        .catch(error => {
          console.log(error);
          d.coords = "";
          this.submit(d);
        });
    } else {
      this.submit(d);
    }
  }

  submit(data: {
    id: any;
    service: any;
    category: any;
    service_title: any;
    date: any;
    time: any;
    quantity: any;
    fulldate: any;
    open: boolean;
    provider: any;
    coords: string;
  }) {
    this.sp.bookService(data).subscribe(
      data => {
        this.CreateEvent();
      },
      e => {
        console.log(e);
        this.showContentView();
        let error: string;
        if (e._body) {
          error = JSON.parse(e._body).message;
        } else {
          error = e.message;
        }
        this.showToast("An error occured. Please try again later");
      }
    );
  }

  async CreateEvent() {
    try {
      let provider;
      if (this.booked.provider) {
        provider = this.booked.provider.description;
      } else {
        provider = "-";
      }

      const event = await this.calendar.createEvent(
        "Appointment request on SpekApp",
        "" + provider,
        this.booked.service.title + " request @" + this.booked.service.duration,
        new Date(this.booked.date),
        new Date(this.booked.date)
      );

      console.log(event);
      swal("Great", "You've successfully booked this service", "success");
      this.showContentView();
      this.popAll();
    } catch (e) {
      console.log("error", e);
      swal("Great", "You've successfully booked this service.", "success");
      this.showErrorView();
      this.popAll();
    }
  }
}
