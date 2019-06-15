import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildProfilePage } from './build-profile';

@NgModule({
  declarations: [
    BuildProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(BuildProfilePage),
  ],
})
export class BuildProfilePageModule {}
