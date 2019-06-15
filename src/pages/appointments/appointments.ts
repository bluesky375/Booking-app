import {Component, Injector} from '@angular/core';
import {Platform} from 'ionic-angular';
import {BasePage} from '../base-page/base-page';
import {ServicesProvider} from "../../providers/services";
import {User} from "../../providers/user";
import * as moment from "moment";
import {CallNumber} from "@ionic-native/call-number";


@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html'
})
export class AppointmentsPage extends BasePage  {

  results:any = [];
  booked:any = [];
  loaded:boolean = false;

  date: Date = new Date();
  time: any = null;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  constructor(injector: Injector,
    public sp: ServicesProvider,
    public user:User,
    private callNumber: CallNumber,
    public platform:Platform) {

    super(injector);
    this.monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.getDaysOfMonth();
    this.dateSelected({day:this.currentDate,selected:false, event: false, data: {}});

  }

  ionViewDidLoad() {
    this.firebase_CurrentScreen('Service Provider Appointment Screen');
    this.loadData();
  }

  async loadData(){
    try {

     await this.sp.getConfirmedBooked().subscribe( (data) => {
       this.results = [];

       if(data.length > 0){
         for(let d of data){

           let fd = moment(d.date).format('llll').split(',')[0];
           let tp = moment(d.timeBooked).format('llll').split(',')[0];

           d.full_date =  fd+", "+ moment(d.date).format('MMM Do, YYYY');
           d.timeposted = tp+", "+moment(d.timeBooked).format('MMM Do, YYYY');

           this.results.push(d);

         }

         this.booked = this.results;

         this.loadEventThisMonth(this.results);

         this.showContentView();
       }else{
         this.showContentView();
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
    this.results = this.booked;
  }

  selectDate(day: { selected: boolean; }) {
    for(let days of this.daysInThisMonth) days.selected = false;
    day.selected = true;
  }

  dateSelected(day: { day?: any; selected?: boolean; event?: boolean; data: any; }){

    if(day.data){

      this.results = this.booked;

      let data = [];

      this.results.forEach(  (item: { _id: any; }) => {
        if(item._id === day.data._id){
          data.push(item);
        }
      });

      this.results = data;

    }else{

      this.results = [];

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
    this.loadEventThisMonth(this.booked);
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
    this.loadEventThisMonth(this.booked);
    if(day){
      setTimeout( () => {
        for(let days of this.daysInThisMonth) {
          days.selected = days.day === day.day;
        }
      },100)
    }
  }

  makeCall(num: string){
    this.callNumber.callNumber(num, true)
      .then( () => this.firebase_LogEvent('CALL_MADE_SUCCESS', JSON.stringify(num)))
      .catch(() => this.firebase_LogEvent('CALL_MADE_ERROR', JSON.stringify(num)));
  }

  deleteIt(b: any){

    this.showConfirm('Are you sure you want to cancel this services booking?').then( () => {

      this.showLoadingView('del-app');

      this.sp.deleteAcceptedService(b).subscribe( data => {
        this.showContentView();
        this.results.splice(this.results.indexOf(b), 1);
        this.booked.splice(this.booked.indexOf(b), 1);
        this.showToast("the service booking was cancelled successfully");
        this.firebase_LogEvent('SERVICE_APPOINTMENT_CANCELLED_BY_PROVIDER', JSON.stringify(b))
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

  completed(item: { professional_completed: boolean; client_completed: any; },index: any){

    this.showConfirm("Are you sure you want to mark this appointment as completed").then( () => {

      this.showLoadingView('p-home2');
      this.sp.completedService(item,'professional').subscribe(data => {
        item.professional_completed = true;
        if(item.client_completed){
          this.results.splice(index, 1);
          this.booked.splice(index, 1);
        }
        this.showToast("You've successfully marked this appointment as complete");
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
