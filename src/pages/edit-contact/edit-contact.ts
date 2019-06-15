import {Component, Injector,ViewChild } from '@angular/core';
import { IonicPage,Slides } from 'ionic-angular';
import {BasePage} from "../base-page/base-page";
import {User} from "../../providers/user";
import {Observable} from 'rxjs/Rx';


@IonicPage()
@Component({
  selector: 'page-edit-contact',
  templateUrl: 'edit-contact.html',
})
export class EditContactPage extends BasePage{

  @ViewChild(Slides) slides: Slides;
  number: string = '';
  number2: string = '';
  email: string = '';
  Vcode: string = '';
  passed30: boolean = false;
  timer: number = 300000;
  init:boolean = true;
  id:string = '';
  mySubscription:any;
  callback:any;

  constructor(injector: Injector,
     public user:User) {
    super(injector);
    this.email = this.user.getUserInfo().email;
    this.number = this.user.getUserInfo().phone;
    this.callback = this.NavParams('callback');

    this.firebase_CurrentScreen('Edit User Contact Screen');
  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);
  }

  Submit(){
    if(this.number === '' || !this.number || this.number.length < 9 || this.number.length > 14){
      this.showToast('Please enter a valid phone number');
      return;
    }
    if(this.email === '' || !this.email){
      this.showToast('Please enter a valid email address');
      return;
    }

    let d = {
      init: this.init,
      id: this.user.getUserInfo()._id,
      old_number: this.user.getUserInfo().phone,
      old_email: this.user.getUserInfo().email,
      token: this.user.getUserInfo().token,
      email: this.email,
      number: this.number,
      number2: this.number2,
    };

    if(d.number === d.old_number && d.email === d.old_email){
      let res = {data:d};
      this.callback(res).then(()=>{
        this.goBack();
      });
      return;
    }

    this.showLoadingView('ec');
    window.localStorage.setItem('number',this.number);

    this.user.EditContacts(d).subscribe(data =>{
      if(data.success){
        this.showContentView();
        if(d.old_number === d.number){
          this.showToast('You\'ve successfully updated your contacts');
          let res = {data:data};
          this.callback(res).then(()=>{
            this.goBack();
          });
        }else{
          this.id = data.id;
          this.timer = 30;
          this.mySubscription = Observable.interval(1000).map(() => {}).subscribe(() => {
            this.timer = this.timer - 1;
            console.log(this.timer);
            if (this.timer === 0) {
              if(this.passed30 === false) {
                this.passed30 = true;
                this.timer = 59;
              }else{
                this.SwitchNumber();
              }
            }
          });
          this.passed30 = false;
          this.slides.lockSwipes(false);
          this.slides.slideNext();
          this.slides.lockSwipes(true);
        }
      }else{
        this.showToast(data.message);
      }
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
  }

  SubmitCode(){
    let data = {
      phone: this.number,
      code: this.Vcode,
      id: this.id,
      token: this.user.getUserInfo().token,
      type: 'local'
    };

    this.showLoadingView('ec2');

    this.user.ChangeNumber(data).subscribe(data => {
      if(data.success){
        this.showContentView();
        this.mySubscription.unsubscribe();
        window.localStorage.setItem('token',  JSON.stringify(data.access_token));
        window.localStorage.setItem('user',  JSON.stringify(data.user));
        window.localStorage.setItem('type', JSON.stringify(data.type));
        this.showToast('You\'ve successfully updated your contacts');
        let res = {data:data};
        this.callback(res).then(()=>{
          this.goBack();
        });
      }else{
        this.showErrorView();
        this.showToast(data.msg);
      }
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
  }

  SwitchNumber(){
    this.mySubscription.unsubscribe();
    this.init = false;
    this.number2 = window.localStorage.getItem('number');
    this.slides.lockSwipes(false);
    this.slides.slideTo(0, 500);
    this.slides.lockSwipeToNext(true);
  }
}
