import {Component, Injector,ViewChild} from '@angular/core';
import { IonicPage, Slides } from 'ionic-angular';
import {BasePage} from "../base-page/base-page";
import {User} from "../../providers/user";

@IonicPage()
@Component({
  selector: 'page-edit-info',
  templateUrl: 'edit-info.html',
})
export class EditInfoPage extends BasePage{

  @ViewChild(Slides) slides: Slides;
  username:string = "";
  callback:any;

  constructor(injector: Injector,
              public user: User) {
    super(injector);
    this.username = this.user.getUserInfo().username;
    this.callback = this.NavParams("callback");
  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    this.firebase_CurrentScreen('Edit User Information Screen');
  }

  SubmitForm(){
    if(this.username === "" || !this.username){
      this.showToast('Please fill the form data');
      return
    }
    let data = {
      username: this.username,
      avatar: this.user.getUserInfo().avatar,
      id: this.user.getUserInfo()._id,
      token: this.user.getUserInfo().token
    };

    this.showLoadingView('ei');

    this.user.editInfo(data).subscribe(data => {
      this.showContentView();
      this.showToast('You\'ve successfully updated your personal info');
      let res = {data:data};
      this.callback(res).then(()=>{
        this.goBack();
      });
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
