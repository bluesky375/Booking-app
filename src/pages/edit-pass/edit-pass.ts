import {Component, Injector,ViewChild} from '@angular/core';
import { IonicPage,Slides } from 'ionic-angular';
import {BasePage} from "../base-page/base-page";
import {User} from "../../providers/user";

@IonicPage()
@Component({
  selector: 'page-edit-pass',
  templateUrl: 'edit-pass.html',
})
export class EditPassPage extends BasePage{

  @ViewChild(Slides) slides: Slides;
  pass:string = "";
  pass1:string = "";
  pass2:string = "";
  callback:any;

  constructor(injector: Injector,
    public user: User) {
    super(injector);
    this.callback = this.NavParams("callback");
  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    this.firebase_CurrentScreen('Edit User Password Screen');
  }

  SubmitForm(){
    if(this.pass === "" || !this.pass
      || this.pass1 === "" || !this.pass1
      || this.pass2 === "" || !this.pass2){
       this.showToast('Please fill the form data');
      return
    }
    if(this.pass1 !== this.pass2){
      this.showToast('Passwords do not match');
    }
    let data = {
      pass: this.pass,
      pass1: this.pass1,
      pass2: this.pass2,
      id: this.user.getUserInfo()._id,
      token: this.user.getUserInfo().token
    };

    this.showLoadingView('ep');
    this.user.editPass(data).subscribe(data => {
      if(data.success){
        this.showContentView();
        this.showToast('You\'ve successfully updated your password');
        let res = {data:data};
        this.callback(res).then(()=>{
          this.goBack();
        });
      }else{
        this.showToast(data.message);
      }
    }, e => {
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

}
