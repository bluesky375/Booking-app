import { Component, Injector } from "@angular/core";
import { BasePage } from "../base-page/base-page";
import { HomePage } from "../home/home";
import { ProfilePage } from "../profile/profile";
import { ServiceProvidersPage } from "../service-providers/service-providers";
import { MyAppointmentsPage } from "../my-appointments/my-appointments";
import { Platform } from "ionic-angular";

@Component({
  selector: "page-tab",
  templateUrl: "tab.html"
})
export class TabPage extends BasePage {
  tab1Root = HomePage;
  tab2Root = MyAppointmentsPage;
  tab3Root = ServiceProvidersPage;
  // tab4Root = ServicesPage;
  tab5Root = ProfilePage;

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
