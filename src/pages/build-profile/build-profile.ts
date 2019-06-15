import { Component, Injector, ViewChild } from '@angular/core';
import { IonicPage,Slides } from 'ionic-angular';
import {CountryCode} from "../../providers/country-code";
import {User} from "../../providers/user";
import {BasePage} from "../base-page/base-page";
import {Observable} from 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-build-profile',
  templateUrl: 'build-profile.html',
})
export class BuildProfilePage extends BasePage{

  @ViewChild(Slides) slides: Slides;
  code:any = "+233";
  codes:any;
  country:any;
  number: string = '';
  number2: string = '';
  email: string = '';
  Vcode: string = '';
  profile:any;
  passed30: boolean = false;
  timer: number = 300000;
  init:boolean = true;
  id:string = '';
  mySubscription:any;

  constructor(injector: Injector,
     public user:User,
     public countryCode: CountryCode) {

    super(injector);
    this.profile = this.NavParams('profile')

  }

  ionViewDidLoad() {
    this.firebase_CurrentScreen('Build Profile Screen');
    this.slides.lockSwipes(true);
    this.codes = this.countryCode.getCodes().countries;
  }

  Submit(){

    if(this.number === '' || this.number.length < 9 || this.number.length > 10){
      this.showToast('Please enter a valid phone number');
      return;
    }

    if(this.profile.email === ""){
      if(this.email === '' || !this.email){
        this.showToast('Please enter a valid email address');
        return;
      }
    }
    else{
      this.email = this.profile.email;
    }

    for(let c of this.codes){
      if(c.code === this.code){
        this.country = c;
      }
    }

    this.showLoadingView('build-profile');

    if(this.number.length === 10 && this.number.substr(0,1) === '0'){
      this.number = this.number.substr(1,10);
    }

    let data = {
      init: this.init,
      id: this.profile._id,
      profile: this.profile,
      email: this.email,
      number: this.number,
      number2: this.number2,
      country: this.country
    };

    window.localStorage.setItem('number',this.number);
    this.user.SaveFUser(data).subscribe(data =>{

      if(data.success){
        this.showContentView();
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
      }else{
        this.showErrorView();
        this.showToast(data.msg);
      }
    },error => {
      console.log(error);
      this.showErrorView();
      this.showToast(error.message);

    });
  }

  SubmitCode(){
    let data = {
      phone: this.country.code+""+this.number,
      code: this.Vcode,
      id: this.id,
      type: 'facebook'
    };

    this.showLoadingView('build-profile2');


    this.user.Verify(data).subscribe(data => {

      if(data.success){
        this.showContentView();
        window.localStorage.setItem('token',  JSON.stringify(data.access_token));
        window.localStorage.setItem('user',  JSON.stringify(data.user));
        window.localStorage.setItem('type', JSON.stringify(data.type));
        this.GoTo("HomePage");
      }else{
        this.showErrorView();
        this.showToast( data.msg);
      }
    },error => {
      console.log(error);
      this.showErrorView();
      this.showToast(error.message);
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
