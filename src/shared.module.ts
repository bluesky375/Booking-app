import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EmptyViewModule } from './components/empty-view/empty-view.module';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Ionic2RatingModule } from 'ionic2-rating';
import { IonicImageLoader } from 'ionic-image-loader';
import { ComponentsModule } from './components/components.module';
import { StarRatingModule } from 'angular-star-rating';
import { CalendarModule} from 'angular-calendar'
import { CalendarWeekHoursViewModule} from "angular-calendar-week-hours-view";


import localeDe from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeDe);

@NgModule({
  imports: [
    IonicModule,
    EmptyViewModule,
    ImgFallbackModule,
    LazyLoadImageModule,
    Ionic2RatingModule,
    IonicImageLoader,
    ComponentsModule,
    StarRatingModule,
    CalendarModule.forRoot(),
    CalendarWeekHoursViewModule
  ],
  exports: [
    EmptyViewModule,
    ImgFallbackModule,
    LazyLoadImageModule,
    Ionic2RatingModule,
    IonicImageLoader,
    ComponentsModule,
    StarRatingModule,
  ]
})

export class SharedModule {}
