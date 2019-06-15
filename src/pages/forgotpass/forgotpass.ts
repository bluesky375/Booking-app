import {Component, Injector} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {BasePage} from "../base-page/base-page";
import {User} from "../../providers/user";

@IonicPage()
@Component({
  selector: 'page-forgotpass',
  templateUrl: 'forgotpass.html',
})
export class ForgotpassPage extends BasePage{
  email: any;
  constructor(injector:Injector,
     public user: User) {
    super(injector);
    this.firebase_CurrentScreen('Forgot Password Screen');
  }


  SendNow(){
    if(this.email === ''){
      this.showToast("Please enter your email");
    }else{
      let d = {
        email: this.email,
      };
      this.showLoadingView('fp');
      this.user.ForgotPass(d).subscribe(data =>{
        if(data.success){
          this.showContentView();
          this.showToast('You will receive an email any second now. Check your email for detail instructions on how to proceed.');
          this.goBack();
        }else{
          this.showErrorView();
          this.showToast('We are unable to send an email at this time. Try again later.');
        }
      },error => {
        console.log(error);
        this.showToast('This email is not in our system');
        this.showErrorView();
      })
    }
  }

  Login(){
    this.goBack();
  }


  Register(){
    this.navigateTo("SignupPage");
  }

}
