import {Component, Injector} from '@angular/core';
import { IonicPage, Platform} from 'ionic-angular';
import {User} from "../../providers/user";
import {BasePage} from "../base-page/base-page";
import {TabPage} from "../tab/tab";
import {TabsPage} from "../tabs/tabs";
import {FCM} from "@ionic-native/fcm";


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage extends BasePage{

  email:string = '';
  password:string = '';
  tabBarElement:any = null;

  constructor(injector:Injector,
    private fcm: FCM,
    private platform: Platform,
    public user: User) {
    super(injector);
    this.tabBarElement = document.querySelector('.toolbar');
    if(this.tabBarElement){
      this.tabBarElement.style.display = 'none';
    }
    this.firebase_CurrentScreen('Sign In Screen');
    this.platform.registerBackButtonAction(() => {

      this.showConfirm('Are you sure you want to exit this app?').then( () => {

        navigator['app'].exitApp();

      }).catch( (err) => console.error(err))

   })
  }

  login(){
    if(this.email === '' || this.password === ''){
      this.showToast('Please enter both username and password');
    }else{
      let d = {
        email: this.email,
        password:this.password
      };
      this.showLoadingView('sign-in2');
      this.user.Login(d).subscribe(data =>{
        if(data.success){
          this.showContentView();
          let d = {
            _id: null,
            type:'user',
            device_token:null
          };
          this.fcm.getToken().then(token => {
            d._id = data.user._id;
            d.device_token = token;
            if(data.user.userType === 'Professional') d.type = 'professional';
            this.user.updateDeviceToken(d).subscribe( (d) => {console.log(d);})

          });
          if(data.user.userType === 'Client'){
            this.GoTo(TabPage);
          }else if(data.user.userType === 'Professional'){
            this.GoTo(TabsPage);
          }else{
            this.GoTo(TabPage);
          }
        }else{
          this.showErrorView();
          this.showToast(data.msg);
        }
      },error => {
        console.log(error);
        this.showToast("Invalid email or password");
        this.showErrorView();
      })
    }
  }

}
