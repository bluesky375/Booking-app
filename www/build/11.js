webpackJsonp([11],{

/***/ 1068:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyServiceDetailPageModule", function() { return MyServiceDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_service_detail__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(607);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyServiceDetailPageModule = /** @class */ (function () {
    function MyServiceDetailPageModule() {
    }
    MyServiceDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_service_detail__["a" /* MyServiceDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_service_detail__["a" /* MyServiceDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
            ],
        })
    ], MyServiceDetailPageModule);
    return MyServiceDetailPageModule;
}());

//# sourceMappingURL=my-service-detail.module.js.map

/***/ }),

/***/ 1093:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyServiceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyServiceDetailPage = /** @class */ (function (_super) {
    __extends(MyServiceDetailPage, _super);
    function MyServiceDetailPage(injector, sp, user) {
        var _this = _super.call(this, injector) || this;
        _this.sp = sp;
        _this.user = user;
        _this.myCallbackFunction = function (_params) {
            return new Promise(function (resolve, reject) {
                if (_this.data._id === _params.bookedId) {
                    _this.data.reviewed = true;
                    _this.data.comment = _params.comment;
                    _this.data.rating = _params.rating;
                }
                resolve();
            });
        };
        _this.data = _this.NavParams("booked");
        _this.firebase_CurrentScreen("User Service Detail Screen");
        return _this;
    }
    MyServiceDetailPage.prototype.ionViewDidLoad = function () {
        var fd = __WEBPACK_IMPORTED_MODULE_4_moment__(this.data.date)
            .format("llll")
            .split(",")[0];
        var tp = __WEBPACK_IMPORTED_MODULE_4_moment__(this.data.timeBooked)
            .format("llll")
            .split(",")[0];
        this.data.reviewed = false;
        this.data.comment = "";
        this.data.rating = "";
        this.data.full_date =
            fd + ", " + __WEBPACK_IMPORTED_MODULE_4_moment__(this.data.date).format("MMM Do, YYYY");
        this.data.timeposted =
            tp + ", " + __WEBPACK_IMPORTED_MODULE_4_moment__(this.data.timeBooked).format("MMM Do, YYYY");
        if (this.data.provider_.reviews.length > 0) {
            for (var _i = 0, _a = this.data.provider_.reviews; _i < _a.length; _i++) {
                var r = _a[_i];
                if (this.data.userId === r.userId && this.data._id === r.bookedId) {
                    this.data.reviewed = true;
                    this.data.comment = r.comment;
                    this.data.rating = r.rating;
                }
            }
        }
    };
    MyServiceDetailPage.prototype.completed = function (item, index) {
        var _this = this;
        this.showConfirm("Are you sure you want to mark this appointment as completed")
            .then(function () {
            _this.showLoadingView("p-home2");
            try {
                _this.sp.completedService(item, "client").subscribe(function (data) {
                    item.client_completed = true;
                    if (item.professional_completed) {
                        _this.goBack();
                    }
                    _this.showToast("You've successfully marked this appointment as complete");
                    _this.showContentView();
                }, function (error) {
                    console.log(error);
                    _this.showErrorView();
                    _this.showToast(error.message);
                });
            }
            catch (e) {
                _this.showContentView();
                var error = void 0;
                if (e._body) {
                    error = JSON.parse(e._body).message;
                }
                else {
                    error = e.message;
                }
                _this.showToast(error);
                console.log(e);
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    MyServiceDetailPage.prototype.pay = function (item, index) {
        var _this = this;
        this.showConfirm("Are you sure payment has been completed'")
            .then(function () {
            _this.showLoadingView("invoice");
            _this.sp.paidService(item, "client").subscribe(function (data) {
                item.client_paid = true;
                if (item.professional_paid) {
                    _this.goBack();
                }
                _this.showToast("You've successfully marked this appointment as paid");
                _this.showContentView();
            }, function (e) {
                _this.showContentView();
                var error;
                if (e._body) {
                    error = JSON.parse(e._body).message;
                }
                else {
                    error = e.message;
                }
                _this.showToast(error);
                console.log(e);
            });
        })
            .catch(function (err) { return console.log(err); });
    };
    MyServiceDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-my-service-detail",template:/*ion-inline-start:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/my-service-detail/my-service-detail.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <ion-title>Service Detail</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <section class="content">\n\n    <div class="heading">\n      <h2>{{data?.service?.title}}</h2>\n      <p>{{data?.service?.description}}</p>\n    </div>\n\n  </section>\n\n  <hr>\n\n  <section class="content">\n\n    <div class="heading">\n      <div style="display:flex;width:100%">\n        <p *ngIf="data?.service?.gh_price" margin-top style="width:30%">\n          <ion-icon name="pricetag"></ion-icon>\n          <span>\n            GHC{{ data?.service?.gh_price * data?.quantity}} <br/>\n               <span *ngIf="data?.quantity === 1">(1 person)</span>\n               <span *ngIf="data?.quantity > 1">({{data?.quantity}} people)</span>\n          </span>\n        </p>\n\n        <p *ngIf="data?.fulldate" margin-top text-end style="width:70%;text-align:right">\n          <ion-icon name="calendar"></ion-icon>\n          <span>\n            {{ data?.fulldate }}\n        </span>\n        </p>\n      </div>\n      <div  style="display:flex;width:100%">\n        <p *ngIf="data?.service?.duration" margin-top style="width:30%">\n          <ion-icon name="stopwatch"></ion-icon>\n          <span *ngIf="data?.service?.duration === 1 && data?.service?.durationType === \'hours\'">1 hour</span>\n          <span *ngIf="data?.service?.duration !== 1 && data?.service?.durationType">{{data?.service?.duration}} {{data?.service?.durationType}}</span>\n          <span *ngIf="data?.service?.duration !== 1 && !data?.service?.durationType">{{data?.service?.duration}} minutes</span>\n        </p>\n        <p *ngIf="data?.time" margin-top text-end style="width:70%;text-align:right">\n          <ion-icon name="time"></ion-icon>\n          <span>\n            {{ data?.time }}\n        </span>\n        </p>\n      </div>\n\n    </div>\n\n  </section>\n\n  <hr *ngIf="data?.user">\n\n  <hr *ngIf="data?.provider_">\n\n  <section *ngIf="data?.provider_" class="content">\n\n    <div (click)="openPage(\'ShopPage\', { category: data.category,provider:data.provider_ })"\n         [hidden]="data?.open && (!data?.professional_paid && !data?.client_paid && !data?.professional_completed && !data?.client_completed)"\n         class="heading">\n      <p *ngIf="data?.provider_?.description" margin-top float-end>\n        <ion-icon color="dark" name="pin"></ion-icon>\n        <span class="text-small bold" ion-text color="dark">\n            {{ data?.provider_?.description }}\n        </span>\n      </p>\n      <h2>{{data?.provider_?.name }}</h2>\n      <p>{{data?.provider_?.title}}</p>\n    </div>\n\n  </section>\n\n  <div *ngIf="!data?.reviewed && data?.professional_paid && data?.client_paid" padding>\n    <button color="secondary" ion-button round block (click)="openPage(\'AddReviewPage\', { providerId: booked.provider_._id, bookedId: booked._id ,type: \'add\',callback:myCallbackFunction})">Review Service</button>\n  </div>\n\n  <div *ngIf="data?.reviewed && data?.professional_paid && data?.client_paid">\n    <div margin-bottom padding class="radius light-bg border">\n      <ion-item *ngIf="data?.rating" no-padding color="light">\n        <star-rating *ngIf="data?.rating" [starType]="\'svg\'" [size]="\'small\'" [readOnly]="true" [showHalfStars]="false" [rating]="data?.rating"></star-rating>\n        <span item-end (click)="openPage(\'AddReviewPage\', { providerId: data.provider_._id, dataId: data._id ,type: \'edit\',review:{rating:data.rating,comment:data.comment},callback:myCallbackFunction})">\n                      edit\n                    </span>\n      </ion-item>\n      <ion-row>\n        <ion-col *ngIf="data.comment !== \'\'" no-padding col-12>\n          <p class="text-medium bold no-margin" ion-text color="dark">{{ data?.comment }}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n\n  <div padding class="book-it">\n    <div *ngIf="data.status === true">\n      <div *ngIf="!data?.client_completed" padding>\n        <button  color="secondary" ion-button round block (click)="completed(data,$index)">COMPLETED</button>\n      </div>\n      <ion-grid *ngIf="!data?.client_paid && data?.professional_completed && data?.client_completed"  padding>\n        <button color="secondary" ion-button round block (click)="pay(data,$index)">PAID</button>\n      </ion-grid>\n      <p class="bold" text-center *ngIf="(!data?.professional_completed && data?.client_completed)\n                  || (!data?.professional_paid && data?.client_paid)">\n        <em style="color:#f53d3d;">Awaiting service provider\'s approval</em>\n      </p>\n\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/my-service-detail/my-service-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_2__providers_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* User */]])
    ], MyServiceDetailPage);
    return MyServiceDetailPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=my-service-detail.js.map

/***/ })

});
//# sourceMappingURL=11.js.map