import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicesPage } from './services';
import {SharedModule} from "../../shared.module";

@NgModule({
  declarations: [
    ServicesPage,
  ],
  imports: [
    IonicPageModule.forChild(ServicesPage),
    SharedModule
  ],
})
export class ServicePageModule {}
