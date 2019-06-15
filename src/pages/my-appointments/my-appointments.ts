import {Component, Injector} from '@angular/core';
import {Platform} from 'ionic-angular';
import {BasePage} from "../base-page/base-page";
import {User} from "../../providers/user";
import {ServicesProvider} from "../../providers/services";
import * as moment from "moment";
import * as _ from 'underscore/underscore'

@Component({
  selector: 'page-my-appointments',
  templateUrl: 'my-appointments.html',
})

export class MyAppointmentsPage  extends BasePage {

  Booked_app:any = [];
  Booked_app_data:any = [];
  Prebooked:any = [];
  Prebooked_data:any = [];
  appointments : any = [];
  option: any = 'pending';

  date: Date = new Date();
  time: any = null;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;

  PreBookedloaded:boolean = false;
  Bookedloaded:boolean = false;
  loaded:boolean = false;

  constructor(injector:Injector,
      public platform: Platform,
      public sp: ServicesProvider,
      public user: User,
  ) {
    super(injector);
    this.monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.getDaysOfMonth();
    this.dateSelected({day:this.currentDate,selected:false, event: false, data: {}});
    this.firebase_CurrentScreen('User Request and Appointments Screen');
  }

  ionViewDidLoad() {
    this.loadAppointments();
    this.loadRequests();
  }

  async loadAppointments() {

      await this.sp.getBookedServicesById(this.user.getUserInfo()._id,true).subscribe((data) => {

        this.Booked_app  = [];

        if(data.length > 0){
          for(let d of data){

            let fd = moment(d.date).format('llll').split(',')[0];
            let tp = moment(d.timeBooked).format('llll').split(',')[0];

            d.full_date =  fd+", "+ moment(d.date).format('MMM Do, YYYY');
            d.timeposted = tp+", "+moment(d.timeBooked).format('MMM Do, YYYY');


            this.Booked_app.push(d);
            this.appointments.push(d)


          }

          this.Booked_app = _.sortBy(this.Booked_app,'timeBooked').reverse();

          this.Booked_app_data = this.Booked_app;

          this.loadEventThisMonth(this.appointments);

          this.showContentView();
        }else{
          this.showContentView();
        }

        this.PreBookedloaded = true;

        if(this.Bookedloaded){
          this.loaded = true;
        }

        this.onRefreshComplete();

      },(e) => {
        this.PreBookedloaded = true;
        console.log(e);
        this.showErrorView();
        this.onRefreshComplete();

      });


  }

  async loadRequests() {

      await this.sp.getBookedServicesById(this.user.getUserInfo()._id,false).subscribe((data) => {

          this.Prebooked  = [];
        let date: any = new Date();
          if(data.length > 0){
             for(let d of data){
                 let fd = moment(d.date).format('llll').split(',')[0];
                 let tp = moment(d.timeBooked).format('llll').split(',')[0];

                 d.full_date =  fd+", "+ moment(d.date).format('MMM Do, YYYY');
                 d.timeposted = tp+", "+moment(d.timeBooked).format('MMM Do, YYYY');

               let z = d.time.split(" ");
               let ch = z[0].split(":");
               let hrs: number;

               hrs = parseInt(ch[0]);
               if(z[1] === 'PM' || z[1] === 'pm'){
                 hrs = 12 + parseInt(ch[0]);
               }

               let d_date: any = new Date(d.date);
               let dat:any = new Date(d_date.getFullYear(), d_date.getMonth(), d_date.getDate(), hrs, parseInt(ch[1]), 0);

               if(date < dat){
                 this.Prebooked.push(d);
                 this.appointments.push(d);
               }
             }


             this.Prebooked = _.sortBy(this.Prebooked,'timeBooked').reverse();

             this.Prebooked_data = this.Prebooked;

             this.loadEventThisMonth(this.appointments);

            this.showContentView();
          }else{
            this.showContentView();
          }

        this.Bookedloaded = true;

        if(this.PreBookedloaded){
          this.loaded = true;
        }

        this.onRefreshComplete();

      },(e) => {
        this.Bookedloaded = true;
        console.log(e);
        this.showErrorView();
        this.onRefreshComplete();

      });

  }

  onReload(refresher: any) {
    this.refresher = refresher;
    this.appointments = [];
    this.loadAppointments();
    this.loadRequests();
  }

  deleteIt(b: any,index: any,type: string){

    this.showConfirm('Are you sure you want to cancel this services booking?').then( () => {

      this.showLoadingView('del-app');

      this.sp.deleteBookedService(b,this.user.getUserInfo()._id).subscribe( data => {
        this.showContentView();
        if(type === '0'){
          this.Prebooked.splice(index, 1);
          this.Prebooked_data.splice(this.Prebooked_data.indexOf(b), 1);
        }else{
          this.Booked_app.splice(index, 1);
          this.Booked_app_data.splice(this.Booked_app_data.indexOf(b), 1);
        }
        this.showToast("the service booking was cancelled successfully")
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
      });

    }).catch( (err) => console.log(err));

  }

  async loadEventThisMonth(data: { forEach: (arg0: (item: any) => void) => void; }) {

    for(let days of this.daysInThisMonth) days.event = false;

    data.forEach( (item: { date: moment.MomentInput; }) => {
      this.daysInThisMonth.forEach( (day: { day: string; event: boolean; data: any; }) => {
       if(moment(item.date).format('dddd MMMM Do, YYYY') === moment(new Date(this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day.day+" 00:00:00")).format('dddd MMMM Do, YYYY')){
         day.event = true;
         day.data = item;
       }
      });
    });

  }

  viewAll() {
    this.Prebooked = this.Prebooked_data;
  }

  viewAll2() {
    this.Booked_app = this.Booked_app_data;
  }

  selectDate(day: { selected: boolean; }) {
    for(let days of this.daysInThisMonth) days.selected = false;
    day.selected = true;
  }

  dateSelected(day: { day?: any; selected?: boolean; event?: boolean; data: any; }){

    if(this.option === 'pending'){

        if(day.data){

          this.Prebooked = this.Prebooked_data;

          let data = [];

          this.Prebooked.forEach(  (item: { _id: any; }) => {
              if(item._id === day.data._id){
                 data.push(item);
              }
          });

          this.Prebooked = data;

        }else{

          this.Prebooked = [];

        }
    }else{

      if(day.data){

        this.Booked_app = this.Booked_app_data;

        let data = [];

        this.Booked_app.forEach(  (item: { _id: any; }) => {
          if(item._id === day.data._id){
            data.push(item);
          }
        });

        this.Booked_app = data;

      }else{
        this.Booked_app = [];
      }
    }
  }

  getDaysOfMonth() {
    this.daysInThisMonth = [];
    this.daysInLastMonth = [];
    this.daysInNextMonth = [];
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
    if(this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }

    let firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    let prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for(let i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push({selected:false,day:i,event: false,data:null});
    }

    let thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
    for (let i = 0; i < thisNumOfDays; i++) {
      this.daysInThisMonth.push({selected:false,day:i + 1,event: false,data:null});
    }

    let lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
    // let nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    for (let i = 0; i < (6-lastDayThisMonth); i++) {
      this.daysInNextMonth.push(i+1);
    }
    let totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
    if(totalDays<36) {
      for(let i = (7-lastDayThisMonth); i < ((7-lastDayThisMonth)+7); i++) {
        this.daysInNextMonth.push({selected:false,day:i,event: false,data:null});
      }
    }
  }

  goToLastMonth(day: { day: any; }) {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
    this.loadEventThisMonth(this.appointments);
    if(day){
      setTimeout( () => {
        for(let days of this.daysInThisMonth) {
          days.selected = days.day === day.day;
        }
      },100)
    }
  }

  goToNextMonth(day: { day: any; }) {

    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
    this.getDaysOfMonth();
    this.loadEventThisMonth(this.appointments);
    if(day){
      setTimeout( () => {
        for(let days of this.daysInThisMonth) {
          days.selected = days.day === day.day;
        }
      },100)
    }
  }

  completed(item: { client_completed: boolean; professional_completed: any; },index: any){

    this.showConfirm("Are you sure you want to mark this appointment as completed").then( () => {

      this.showLoadingView('p-home2');
      try {

        this.sp.completedService(item,'client').subscribe(data => {
          item.client_completed = true;
          if(item.professional_completed){
            this.Booked_app.splice(index, 1);
            this.Booked_app_data.splice(index, 1);
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

      } catch (e) {
        this.showContentView();
        let error: string;
        if(e._body){
          error = JSON.parse(e._body).message
        }else {
          error = e.message
        }
        this.showToast(error);
        console.log(e);
      }
    }).catch( (err) => console.log(err));


  }
}
