import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyServiceDetailPage } from './my-service-detail';
import {SharedModule} from "../../shared.module";

@NgModule({
  declarations: [
    MyServiceDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MyServiceDetailPage),
    SharedModule
  ],
})
export class MyServiceDetailPageModule {}
