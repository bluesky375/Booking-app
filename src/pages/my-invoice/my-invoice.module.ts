import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyInvoicePage } from './my-invoice';
import {SharedModule} from "../../shared.module";

@NgModule({
  declarations: [
    MyInvoicePage,
  ],
  imports: [
    IonicPageModule.forChild(MyInvoicePage),
    SharedModule
  ],
})
export class MyInvoicePageModule {}
