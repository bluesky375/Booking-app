import {Component, Injector} from '@angular/core';
import {BasePage} from "../base-page/base-page";
import {ProfessionalsHomePage} from '../professionals-home/professionals-home';
import {AppointmentsPage} from "../appointments/appointments";
import {PaymentPage} from "../payment/payment";
import {ProProfilePage} from "../pro-profile/pro-profile";
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage extends BasePage{

  tab1Root = ProfessionalsHomePage;
  tab2Root = AppointmentsPage;
  tab3Root = PaymentPage;
  tab5Root = ProProfilePage;

  constructor(injector: Injector, private platform: Platform) {
    super(injector);
    this.platform.registerBackButtonAction(() => {
      this.showConfirm("Are you sure you want to exit this app?")
        .then(() => {
          navigator["app"].exitApp();
        })
        .catch(err => console.error(err));
    });
  }



}
