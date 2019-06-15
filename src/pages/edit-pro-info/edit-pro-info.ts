import { Component, Injector, ElementRef, ViewChild,NgZone} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {BasePage} from "../base-page/base-page";
import {User} from "../../providers/user";

import { AppConfig } from '../../app/app.config';

declare let google;

@IonicPage()
@Component({
  selector: 'page-edit-pro-info',
  templateUrl: 'edit-pro-info.html',
})
export class EditProInfoPage extends BasePage{

  @ViewChild('map') mapElement: ElementRef;

  private location: { lat?: number, lng?: number } = {};

  provider:any;
  callback:any;

  private map: any;
  private marker: any;

  constructor(injector: Injector,
              public zone: NgZone,
              public user: User) {
    super(injector);
    this.provider = this.user.getUserInfo();
    this.provider.id = this.user.getUserInfo()._id;
    console.log(this.provider);


    this.callback = this.NavParams("callback");
  }

  ionViewDidLoad() {
    this.firebase_CurrentScreen('Edit Service Provider Information Screen');
    this.location.lat = parseFloat(this.user.getUserInfo().latitude);
    this.location.lng = parseFloat(this.user.getUserInfo().longitude);
    if (typeof google == 'undefined' || typeof google.maps == 'undefined') {
      this.loadGoogleMaps()
    } else {
      this.initMap();
    }
  }

  loadGoogleMaps() {

    window['mapInit'] = () => {
      this.initMap();
    };

    const apiKey = AppConfig.GOOGLE_MAPS_API_KEY;

    let script = document.createElement('script');
    script.id = 'googleMaps';
    script.src = `https://maps.google.com/maps/api/js?key=${apiKey}&callback=mapInit`;
    document.body.appendChild(script);

  }

  async initMap() {

    let mapOptions: any = {
      zoom: 0,
      center: {lat: this.location.lat, lng: this.location.lng},
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.marker = new google.maps.Marker({
      icon: {
        url: './assets/imgs/pin.png',
        scaledSize: new google.maps.Size(32, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
      },
      position: {
        lat: this.location.lat,
        lng: this.location.lng
      },
      draggable:true,
      map: this.map,
    });

    this.map.panTo(this.location);
    this.map.setZoom(15);


    this.marker.addListener('dragend', (event) => {
      this.provider.latitude = event.latLng.lat();
      this.provider.longitude = event.latLng.lng();
    });


  }

  SubmitForm(){
    if(this.provider.name === "" || !this.provider.name
      || this.provider.title === "" || !this.provider.title
      || this.provider.description === ""|| !this.provider.description){
      this.showToast('Please fill the form data');
      return
    }


    this.showLoadingView('e-p-i');

    this.user.editProInfo(this.provider).subscribe(data => {
      this.showContentView();
      this.showToast('You\'ve successfully updated your personal info');
      let res = {data:data.professional};
      this.callback(res).then(()=>{
        this.goBack();
      });
    }, e => {
      this.showContentView();
      let error;
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
