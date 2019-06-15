import {Component, Injector} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {BasePage} from "../base-page/base-page";
import {ServicesProvider} from "../../providers/services";
import {User} from "../../providers/user";
import * as moment from  'moment';


@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage extends BasePage{

  service: any;
  category: any;
  provider: any;
  quantity: number;
  selectedDate: string;
  thisDate :any;
  slots = [];
  date: Date = new Date();
  time: any = null;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;

  eventList: any = [];
  selectedEvent: any;
  isSelected: any;

  constructor(injector: Injector,
      public user: User,
      public sp: ServicesProvider) {
    super(injector);
    this.service = this.NavParams('service');
    this.category = this.NavParams('category');
    this.provider = this.NavParams('provider');
    this.slots = [
      {time:'08:00 am',selected : false}, {time:'09:00 am',selected : false}, {time:'10:00 am',selected : false}, {time:'11:00 am',selected : false}, {time:'12:00 am',selected : false}, {time:'01:00 pm',selected : false},
      {time:'02:00 pm',selected : false}, {time:'03:00 pm',selected : false}, {time:'04:00 pm',selected : false}, {time:'05:00 pm',selected : false}, {time:'06:00 pm',selected : false}, {time:'07:00 pm',selected : false}, {time:'08:00 pm',selected : false}
    ];
    this.monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.getDaysOfMonth();
    this.dateSelected({day:this.currentDate,selected:false});
    this.firebase_CurrentScreen('Calendar Screen');
  }

  selectDate(day) {
    this.isSelected = false;
    this.selectedEvent = [];
    let thisDate1 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day.day+" 00:00:00";
    let thisDate2 = this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day.day+" 23:59:59";
    if(this.eventList.length > 0){
      this.eventList.forEach(event => {
        if(((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
          this.isSelected = true;
          this.selectedEvent.push(event);
        }
      });
    }
    for(let days of this.daysInThisMonth) days.selected = false;
    day.selected = true;
  }

  SelectTime(slot){
    for(let s of this.slots) s.selected = slot.time === s.time;
    this.time = slot.time;
  }

  dateSelected(day){
    this.thisDate = new Date(this.date.getFullYear()+"-"+(this.date.getMonth()+1)+"-"+day.day);
    this.selectedDate =  moment(this.thisDate).format('dddd MMMM Do, YYYY');
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
      this.daysInLastMonth.push({selected:false,day:i});
    }

    let thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
    for (let i = 0; i < thisNumOfDays; i++) {
      this.daysInThisMonth.push({selected:false,day:i + 1});
    }

    let lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
    // let nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    for (let i = 0; i < (6-lastDayThisMonth); i++) {
      this.daysInNextMonth.push(i+1);
    }
    let totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
    if(totalDays<36) {
      for(let i = (7-lastDayThisMonth); i < ((7-lastDayThisMonth)+7); i++) {
        this.daysInNextMonth.push({selected:false,day:i});
      }
    }
  }

  goToLastMonth(day) {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
    if(day){
      setTimeout( () => {
        for(let days of this.daysInThisMonth) {
          days.selected = days.day === day.day;
        }
      },100)
    }
  }

  goToNextMonth(day) {
    console.log(day);
    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
    this.getDaysOfMonth();
    if(day){
      setTimeout( () => {
        for(let days of this.daysInThisMonth) {
          days.selected = days.day === day.day;
        }
      },100)
    }
  }

  Submit(){

    if(!this.time) {
      return this.showToast('Choose a time slot');
    }

    if(!this.quantity || this.quantity < 1){
      return this.showToast('Enter a valid number of people');
    }

    let current = new Date();
    let t = moment(current).format('h:mm a');

    let z = t.split(" ");
    let ch = t.split(":");
    let hrs;
    hrs = parseInt(ch[0]);
    if(z[1] === 'PM'){
      hrs = 12 + parseInt(ch[0]);
    }
    let mm = hrs * 60;
    let cm = parseInt(ch[1]);
    let ct = mm + cm;
    //SELECTED TIME
    let sz = this.time.split(" ");
    let sh = this.time.split(":");
    let shrs;
    shrs = parseInt(sh[0]);
    if(sz[1] === 'pm'){
      shrs = 12 + parseInt(sh[0]);
    }
    let smm = shrs * 60;
    let sm = parseInt(sh[1]);
    let st = smm + sm;
    //
    console.log(st,ct);
    let cur = moment(current).format('dddd MMMM Do, YYYY');
    let sel = moment(this.thisDate).format('dddd MMMM Do, YYYY');
    if(cur === sel){
      if((st <= ct) || ((st - ct) < 30)) {
        this.showToast("This time slot has expired");
      }else{
        this.Booked(this.time,this.thisDate,this.service,this.category);
      }
    }else if(current > this.thisDate){
      this.showToast("This time slot has expired");
    }else{
      this.Booked(this.time,this.thisDate,this.service,this.category);
    }
  }

  Booked(time,date,service,category){

    let b = {time:time,date:date,service:service,category:category,fulldate:this.selectedDate,provider:this.provider,quantity:this.quantity};
    this.openPage("ConfirmPage",{booked:b});
  }




}
