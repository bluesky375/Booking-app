import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import {ServicesProvider} from "../../providers/services";
import { BasePage } from '../base-page/base-page';
import swal from 'sweetalert';
import { RatingChangeEvent } from 'angular-star-rating';
import {User} from "../../providers/user";

@IonicPage()
@Component({
  selector: 'page-add-review-page',
  templateUrl: 'add-review-page.html'
})
export class AddReviewPage extends BasePage {

  title: any = 'Add Review';
  callback: any;
  private review: any = {
    userId: '',
    rating: 3,
    comment: '',
    providerId: '',
    bookedId: ''
  };


  constructor(injector: Injector,
    private sp: ServicesProvider,
    private user: User) {
    super(injector);

    this.review.providerId = this.NavParams('providerId');
    this.review.bookedId = this.NavParams('bookedId');
    this.review.userId = this.user.getUserInfo()._id;
    this.callback = this.NavParams('callback');

    if(this.NavParams('type') === 'edit'){
      this.title = 'Edit Review';

      this.review.rating = this.NavParams('review').rating;
      this.review.comment = this.NavParams('review').comment;
    }

  }


  ionViewDidLoad() {
    this.firebase_CurrentScreen('Add Review Screen');
  }

  onRatingChange(event: RatingChangeEvent) {
    this.review.rating = event.rating;
  }

  onSubmit() {

    if(!this.review.rating){
      this.showToast('Please select a star rating.');
      return;
    }

    this.showLoadingView('submitting a review');

    this.sp.PostReview(this.review).subscribe( (data) => {

      this.showContentView();
      this.callback(this.review).then(()=>{
        this.onDismiss();
      });
      this.firebase_LogEvent('REVIEWED_SUCCESS', JSON.stringify(data));

      swal('Good job!', 'Thank you for your review', 'success');

    }, (e) => {
      this.firebase_LogEvent('REVIEWED_ERROR', JSON.stringify(e));
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

  onDismiss() {
    this.dismiss();
  }

}
