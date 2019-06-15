import { Component, Injector } from "@angular/core";
import { Platform } from "ionic-angular";
import { BasePage } from "../base-page/base-page";
import { User } from "../../providers/user";
import { ServicesProvider } from "../../providers/services";
import * as moment from "moment";

@Component({
  selector: "page-professionals-home",
  templateUrl: "professionals-home.html"
})
export class ProfessionalsHomePage extends BasePage {
  results: any = [];
  preBooked: any = [];
  loaded: boolean = false;

  date: Date = new Date();
  time: any = null;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;

  constructor(
    injector: Injector,
    public user: User,
    public platform: Platform,
    public sp: ServicesProvider
  ) {
    super(injector);
    this.monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    this.getDaysOfMonth();
    this.dateSelected({
      day: this.currentDate,
      selected: false,
      event: false,
      data: {}
    });
    this.firebase_CurrentScreen("Service Provider Home Screen");
  }

  ionViewDidLoad() {
    this.loadData();
  }

  async loadData() {
    try {
      await this.sp.getPreBookedServices().subscribe(
        data => {
          this.results = [];

          let date = new Date();

          if (data.length > 0) {
            for (let d of data) {
              let fd = moment(d.date)
                .format("llll")
                .split(",")[0];
              let tp = moment(d.timeBooked)
                .format("llll")
                .split(",")[0];

              d.full_date = fd + ", " + moment(d.date).format("MMM Do, YYYY");
              d.timeposted =
                tp + ", " + moment(d.timeBooked).format("MMM Do, YYYY");

              let z = d.time.split(" ");
              let ch = z[0].split(":");
              let hrs: number;

              hrs = parseInt(ch[0]);
              if (z[1] === "PM" || z[1] === "pm") {
                hrs = 12 + parseInt(ch[0]);
              }

              let d_date = new Date(d.date);
              let dat = new Date(
                d_date.getFullYear(),
                d_date.getMonth(),
                d_date.getDate(),
                hrs,
                parseInt(ch[1]),
                0
              );

              if (date < dat) {
                this.results.push(d);
              }
            }

            this.preBooked = this.results;

            this.loadEventThisMonth(this.results);

            this.showContentView();
          } else {
            this.showContentView();
          }

          this.loaded = true;

          this.onRefreshComplete();
        },
        error => {
          console.log(error);

          this.showErrorView();
          this.onRefreshComplete();
        }
      );
    } catch (error) {
      console.log(error);

      this.showErrorView();
      this.onRefreshComplete();
    }
  }

  onReload(refresher: any) {
    this.refresher = refresher;
    this.loadData();
  }

  confirm(item: any, status: any, name: string, index: any) {
    this.showConfirm("Are you sure you want to " + name + " this service?")
      .then(() => {
        this.showLoadingView("c-app");
        let data = {
          item: item,
          status: status,
          id: this.user.getUserInfo()._id
        };
        console.log(data);

        this.sp.confirmBooking(data).subscribe(
          d => {
            this.showContentView();
            this.results.splice(index, 1);
            // if(name !== 'reject'){this.GoTo('ProfessionalsHomePage');}
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
      })
      .catch(err => console.log(err));
  }

  async loadEventThisMonth(data: {
    forEach: (arg0: (item: any) => void) => void;
  }) {
    for (let days of this.daysInThisMonth) days.event = false;

    data.forEach((item: { date: moment.MomentInput }) => {
      this.daysInThisMonth.forEach(
        (day: { day: string; event: boolean; data: any }) => {
          if (
            moment(item.date).format("dddd MMMM Do, YYYY") ===
            moment(
              new Date(
                this.date.getFullYear() +
                  "-" +
                  (this.date.getMonth() + 1) +
                  "-" +
                  day.day +
                  " 00:00:00"
              )
            ).format("dddd MMMM Do, YYYY")
          ) {
            day.event = true;
            day.data = item;
          }
        }
      );
    });
  }

  viewAll() {
    this.results = this.preBooked;
  }

  selectDate(day: { selected: boolean }) {
    for (let days of this.daysInThisMonth) days.selected = false;
    day.selected = true;
  }

  dateSelected(day: {
    day?: any;
    selected?: boolean;
    event?: boolean;
    data: any;
  }) {
    if (day.data) {
      this.results = this.preBooked;

      let data = [];

      this.results.forEach((item: { _id: any }) => {
        if (item._id === day.data._id) {
          data.push(item);
        }
      });

      this.results = data;
    } else {
      this.results = [];
    }
  }

  getDaysOfMonth() {
    this.daysInThisMonth = [];
    this.daysInLastMonth = [];
    this.daysInNextMonth = [];
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
    if (this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }

    let firstDayThisMonth = new Date(
      this.date.getFullYear(),
      this.date.getMonth(),
      1
    ).getDay();
    let prevNumOfDays = new Date(
      this.date.getFullYear(),
      this.date.getMonth(),
      0
    ).getDate();
    for (
      let i = prevNumOfDays - (firstDayThisMonth - 1);
      i <= prevNumOfDays;
      i++
    ) {
      this.daysInLastMonth.push({
        selected: false,
        day: i,
        event: false,
        data: null
      });
    }

    let thisNumOfDays = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      0
    ).getDate();
    for (let i = 0; i < thisNumOfDays; i++) {
      this.daysInThisMonth.push({
        selected: false,
        day: i + 1,
        event: false,
        data: null
      });
    }

    let lastDayThisMonth = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      0
    ).getDay();
    // let nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    for (let i = 0; i < 6 - lastDayThisMonth; i++) {
      this.daysInNextMonth.push(i + 1);
    }
    let totalDays =
      this.daysInLastMonth.length +
      this.daysInThisMonth.length +
      this.daysInNextMonth.length;
    if (totalDays < 36) {
      for (let i = 7 - lastDayThisMonth; i < 7 - lastDayThisMonth + 7; i++) {
        this.daysInNextMonth.push({
          selected: false,
          day: i,
          event: false,
          data: null
        });
      }
    }
  }

  goToLastMonth(day: { day: any }) {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
    this.loadEventThisMonth(this.preBooked);
    if (day) {
      setTimeout(() => {
        for (let days of this.daysInThisMonth) {
          days.selected = days.day === day.day;
        }
      }, 100);
    }
  }

  goToNextMonth(day: { day: any }) {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
    this.getDaysOfMonth();
    this.loadEventThisMonth(this.preBooked);
    if (day) {
      setTimeout(() => {
        for (let days of this.daysInThisMonth) {
          days.selected = days.day === day.day;
        }
      }, 100);
    }
  }
}
