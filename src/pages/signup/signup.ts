import {Component, Injector,ViewChild} from '@angular/core';
import {IonicPage, Platform, Slides} from 'ionic-angular';
import {BasePage} from "../base-page/base-page";
import {CountryCode} from "../../providers/country-code";
import {User} from "../../providers/user";
import {Observable} from 'rxjs/Rx';
import {TabPage} from "../tab/tab";
import {FCM} from "@ionic-native/fcm";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage extends BasePage{

  @ViewChild(Slides) slides: Slides;
  en:boolean = false;
  fr:boolean = false;
  init:boolean = true;
  id:string = '';
  lang:string = 'English';
  username:string = '';
  code:any = "+233";
  codes:any;
  country:any;
  number: string = '';
  number2: string = '';
  email: string = '';
  password: string = '';
  password2: string = '';
  Vcode: string = '';
  timer: number = 300000;
  count:number = 0;
  lng:boolean = false;
  name: boolean = false;
  num:boolean = false;
  em: boolean = false;
  passed30: boolean = false;
  mySubscription:any;
  currentIndex:any = null;

  constructor(injector:Injector,
     public user:User,
     public platform: Platform,
     private fcm: FCM,
     public countryCode: CountryCode) {
    super(injector);
    this.platform.registerBackButtonAction(() => {
      if(this.currentIndex === 0 || !this.currentIndex){
        this.goBack();
      }else{
        this.slides.lockSwipes(false);
        this.slides.slidePrev();
        this.slides.lockSwipeToNext(true);
      }
      this.firebase_CurrentScreen('Register Screen');
    });
  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    this.codes = this.countryCode.getCodes().countries;
  }

  next(num){
    let Continue = false;
    if(num === '2'){
      if(this.username === ''){
        this.showToast('Please enter your name');
      }else{
        Continue = true;
        this.name = true;
      }
    }
    if(num === '3'){
      if(this.number === '' || this.number.length < 9 || this.number.length > 10){
        this.showToast('Please enter a valid phone number');
      }else{
        for(let c of this.codes){
          if(c.code === this.code){
            this.country = c;
          }
        }
        this.showLoadingView('sign-3');
        if(this.number.length === 10 && this.number.substr(0,1) === '0'){
          this.number = this.number.substr(1,10);
          console.log(this.number);
        }
        let data = {
          init: this.init,
          id: this.id,
          language: this.lang,
          username: this.username,
          number: this.number,
          number2: this.number2,
          country: this.country
        };
        window.localStorage.setItem('number',this.number);
        this.user.SaveUser(data).subscribe(data =>{
          if(data.success){
            this.showContentView();
            this.id = data._id;
            this.timer = 30;
            this.mySubscription = Observable.interval(1000).map(() => {}).subscribe(() => {
              this.timer = this.timer - 1;
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
          }else{
            this.showToast(data.msg);
            this.showErrorView();
          }
        },error => {
           console.log(error);
          this.showToast("Invalid number");
          this.showErrorView();

        });
      }
    }
    if(Continue === true){
      this.count++;
      console.log(this.slides);
      this.slides.lockSwipes(false);
      this.slides.slideNext();
      this.slides.lockSwipeToNext(true);
    }
  }

  Submit(){
    if(this.email === '' || this.password === ''|| this.password2 === ''){

      this.showToast('Please enter both email and password');

    }else if(this.password !== this.password2) {
      this.showToast('Passwords do not match');
    }else{
      let data = {
        phone: this.country.code+""+this.number,
        email: this.email,
        password:this.password,
        password2:this.password2
      };
      this.showLoadingView('sup');
      this.user.addUser(data).subscribe(data =>{
        if(data.success){
          this.showContentView();
          this.id = data._id;
          let d = {
            _id: null,
            type:'user',
            device_token:null
          };
          this.fcm.getToken().then(token => {

            d._id = data.user._id;
            d.device_token = token;
            if(data.user.userType === 'Professional') d.type = 'professional';

            this.user.updateDeviceToken(d).subscribe( (d) => {console.log(d)})

          });
          this.GoTo(TabPage);
        }else{
          if(data.type === 'email'){
            this.slides.slideTo(3, 500);
          }
          this.showErrorView();
          this.showToast(data.msg);
        }
      },error => {

        console.log(error);
        this.showErrorView();
        this.showToast(error.message);

      })
    }
  }


  SwitchNumber(){
    this.mySubscription.unsubscribe();
    this.init = false;
    this.number2 = window.localStorage.getItem('number');
    this.slides.lockSwipes(false);
    this.slides.slideTo(1, 500);
    this.slides.lockSwipeToNext(true);
  }

  SubmitCode(){
    let data = {
      phone: this.country.code+""+this.number,
      code: this.Vcode,
      id: this.id
    };

    this.showLoadingView('sup2');

    this.user.Verify(data).subscribe(data => {
      if(data.success){
        this.showContentView();
        this.mySubscription.unsubscribe();
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipeToNext(true);
      }else{
        this.showToast(data.msg);
        this.showErrorView();
      }
    },error => {

      console.log(error);
      this.showErrorView();
      this.showToast(error.message);
    })
  }

  slideChanged(){
    if(this.currentIndex === 4){
      this.currentIndex = this.slides.getActiveIndex();
      if(this.currentIndex === 3){
        this.slides.slideTo(2, 500);
      }
    }
    this.currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', this.currentIndex);
  }


}
