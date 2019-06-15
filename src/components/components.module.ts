import { NgModule } from '@angular/core';
import { Ionic2RatingModule } from 'ionic2-rating';
import { IonicImageLoader } from 'ionic-image-loader';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
	imports: [
		Ionic2RatingModule,
		IonicImageLoader,
		StarRatingModule
	],
	exports: [

  ]
})
export class ComponentsModule {}
