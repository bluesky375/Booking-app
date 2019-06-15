import {Component, Injector} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {BasePage} from "../base-page/base-page";
import {User} from "../../providers/user";
import {ServicesProvider} from "../../providers/services";


@IonicPage()
@Component({
  selector: 'page-edit-pro-service',
  templateUrl: 'edit-pro-service.html',
})
export class EditProServicePage extends BasePage{

  provider:any;
  categories:any = [];
  services:any = [];
  my_services:any = [];
  callback:any;

  constructor(injector: Injector,
              public sp: ServicesProvider,
              public user: User) {
    super(injector);
    this.callback = this.NavParams("callback");
  }

  ionViewDidLoad() {
    this.firebase_CurrentScreen('Edit Service Provider Service Screen');
    this.showLoadingView('e-p-i');
    this.provider = this.user.getUserInfo();
    this.loadCategories();

  }

  async loadCategories(){

    await this.sp.getAllServices().subscribe( (data) => {

      this.categories = [];

      if (data.length > 0) {

        for(let c of data) {
            c.selected = false;
           for(let mc of this.provider.services){
             if(mc === c._id ) c.selected = true;
           }
           this.categories.push(c);
        }

        this.loadServices();

      } else {

       this.showContentView();

      }
      this.onRefreshComplete();
    }, (err) => {
      console.log(err);
      this.showErrorView();
      this.onRefreshComplete();
    });

  }

  async loadServices() {

    await this.sp.getAllCategories().subscribe( (data) => {

      this.services = [];

      if (data.length > 0) {

        for(let c of data) {
          c.selected = false;
          for(let mc of this.provider.categories){
            if(mc === c._id ) c.selected = true;
          }
          this.services.push(c);
        }


        for(let c of this.categories){
          if(c.selected) {
            for(let s of this.services) {
                if(s.serviceId === c._id){
                  this.my_services.push(s)
                }
            }
          }
        }

       this.showContentView();

      } else {

        this.showContentView();

      }
      this.onRefreshComplete();
    }, (err) => {
      console.log(err);
      this.showErrorView();
      this.onRefreshComplete();
    });
  }


  ClickedCat(cat) {
    cat.selected = !cat.selected;

    this.my_services = [];

    for(let c of this.categories){

      if(c.selected) {
        for(let s of this.services) {
          if(s.serviceId === c._id) this.my_services.push(s)
        }
      }

      else{
        for(let s of this.services) {
          if(s.serviceId === c._id) s.selected = false
        }
      }

    }
  }

  SubmitForm(){

    let categories = [];
    let services = [];

    for(let c of this.categories){
       if(c.selected) categories.push(c._id);
    }

    for(let s of this.services){
      if(s.selected) services.push(s._id);
    }

    if(categories.length === 0 || services.length === 0){
      this.showConfirm("Are you sure don't want to choose any service?").then( () => {
        this.submit(categories,services);

      }).catch( (err) => console.log(err));
    }else{
      this.submit(categories,services);
    }

  }

  submit(services,categories) {

    this.showLoadingView('e-p-i');

    this.provider.services = services;
    this.provider.categories = categories;
    this.provider.id = this.user.getUserInfo()._id;

    this.user.editProInfo(this.provider).subscribe(data => {
      this.showContentView();
      this.showToast('You\'ve successfully updated your services');
      let res = {data:data.professional,type:'services',categories: this.categories, services: this.services};
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
