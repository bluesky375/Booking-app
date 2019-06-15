webpackJsonp([8],{

/***/ 1061:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDetailPageModule", function() { return ServiceDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_detail__ = __webpack_require__(1086);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServiceDetailPageModule = /** @class */ (function () {
    function ServiceDetailPageModule() {
    }
    ServiceDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__service_detail__["a" /* ServiceDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__service_detail__["a" /* ServiceDetailPage */]),
            ],
        })
    ], ServiceDetailPageModule);
    return ServiceDetailPageModule;
}());

//# sourceMappingURL=service-detail.module.js.map

/***/ }),

/***/ 1086:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
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






var ServiceDetailPage = /** @class */ (function (_super) {
    __extends(ServiceDetailPage, _super);
    function ServiceDetailPage(injector, sp, callNumber, user) {
        var _this = _super.call(this, injector) || this;
        _this.sp = sp;
        _this.callNumber = callNumber;
        _this.user = user;
        _this.data = _this.NavParams("booked");
        _this.firebase_CurrentScreen("Service Provider Service Detail Screen");
        return _this;
    }
    ServiceDetailPage.prototype.ionViewDidLoad = function () {
        var fd = __WEBPACK_IMPORTED_MODULE_5_moment___default()(this.data.date)
            .format("llll")
            .split(",")[0];
        var tp = __WEBPACK_IMPORTED_MODULE_5_moment___default()(this.data.timeBooked)
            .format("llll")
            .split(",")[0];
        this.data.reviewed = false;
        this.data.comment = "";
        this.data.rating = "";
        this.data.full_date =
            fd + ", " + __WEBPACK_IMPORTED_MODULE_5_moment___default()(this.data.date).format("MMM Do, YYYY");
        this.data.timeposted =
            tp + ", " + __WEBPACK_IMPORTED_MODULE_5_moment___default()(this.data.timeBooked).format("MMM Do, YYYY");
        console.log(this.data);
    };
    ServiceDetailPage.prototype.makeCall = function (num) {
        this.callNumber
            .callNumber(num, true)
            .then()
            .catch(function () { return console.log("Error launching dialer"); });
    };
    ServiceDetailPage.prototype.confirm = function (item, status, name) {
        var _this = this;
        this.showConfirm("Are you sure you want to " + name + " this service?")
            .then(function () {
            _this.showLoadingView("c-app");
            try {
                var data = {
                    item: item,
                    status: status,
                    id: _this.user.getUserInfo()._id
                };
                _this.sp.confirmBooking(data).subscribe(function (d) {
                    _this.showContentView();
                    _this.goBack();
                    _this.showToast("You've successfully " + name + "ed this appointment");
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
    ServiceDetailPage.prototype.completed = function (item, index) {
        var _this = this;
        this.showConfirm("Are you sure you want to mark this appointment as completed")
            .then(function () {
            _this.showLoadingView("p-home2");
            try {
                _this.sp.completedService(item, "professional").subscribe(function (data) {
                    item.professional_completed = true;
                    if (item.client_completed) {
                        _this.goBack();
                    }
                    _this.showToast("You've successfully marked this appointment as complete");
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
            }
            catch (e) {
                console.log(e);
                _this.showErrorView();
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    ServiceDetailPage.prototype.pay = function (item, index) {
        var _this = this;
        this.showConfirm("Are you sure payment has been completed'")
            .then(function () {
            _this.showLoadingView("invoice");
            _this.sp.paidService(item, "professional").subscribe(function (data) {
                item.professional_paid = true;
                if (item.client_paid) {
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
    ServiceDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-service-detail",template:/*ion-inline-start:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/service-detail/service-detail.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <ion-title>Service Detail</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <section class="content">\n\n    <div class="heading">\n      <h2>{{data?.service?.title}}</h2>\n      <p>{{data?.service?.description}}</p>\n    </div>\n\n  </section>\n\n  <hr>\n\n  <section class="content">\n\n    <div class="heading">\n      <div style="display:flex;width:100%">\n        <p *ngIf="data?.service?.gh_price" margin-top style="width:30%">\n          <ion-icon name="pricetag"></ion-icon>\n          <span>\n            GHC{{ data?.service?.gh_price * data?.quantity}} <br/>\n               <span *ngIf="data?.quantity === 1">(1 person)</span>\n               <span *ngIf="data?.quantity > 1">({{data?.quantity}} people)</span>\n          </span>\n        </p>\n\n        <p *ngIf="data?.full_date" margin-top text-end style="width:70%;text-align:right">\n          <ion-icon name="calendar"></ion-icon>\n          <span>\n            {{ data?.full_date }}\n        </span>\n        </p>\n      </div>\n      <div  style="display:flex;width:100%">\n        <p *ngIf="data?.service?.duration" margin-top style="width:30%">\n          <ion-icon name="stopwatch"></ion-icon>\n          <span *ngIf="data?.service?.duration === 1 && data?.service?.durationType === \'hours\'">1 hour</span>\n          <span *ngIf="data?.service?.duration !== 1 && data?.service?.durationType">{{data?.service?.duration}} {{data?.service?.durationType}}</span>\n          <span *ngIf="data?.service?.duration !== 1 && !data?.service?.durationType">{{data?.service?.duration}} minutes</span>\n        </p>\n        <p *ngIf="data?.time" margin-top text-end style="width:70%;text-align:right">\n          <ion-icon name="time"></ion-icon>\n          <span>\n            {{ data?.time }}\n        </span>\n        </p>\n      </div>\n\n    </div>\n\n  </section>\n\n  <hr *ngIf="data?.user">\n\n  <section *ngIf="data?.user" class="content">\n\n    <div class="heading">\n      <p *ngIf="data?.user?.phone && data.status === true" [hidden]="data.client_paid && data.professional_paid" (click)="makeCall(data.user.phone)"  margin-top float-end>\n        <ion-icon color="dark" name="call"></ion-icon>\n        <span class="text-small bold" ion-text color="dark">\n            CALL\n        </span>\n      </p>\n      <h2>{{data?.user?.username }}</h2>\n    </div>\n\n  </section>\n\n  <div padding class="book-it">\n    <ion-grid *ngIf="data.status === false">\n      <ion-row>\n        <ion-col col-6>\n          <button class="outline" ion-button round block (click)="confirm(data,false,\'reject\')">REJECT</button>\n        </ion-col>\n        <ion-col col-6>\n          <button color="secondary" ion-button round block (click)="confirm(data,true,\'accept\')">ACCEPT</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div *ngIf="data.status === true">\n      <div *ngIf="!data?.professional_completed" padding>\n        <button  color="secondary" ion-button round block (click)="completed(data,$index)">COMPLETED</button>\n      </div>\n      <ion-grid *ngIf="!data?.professional_paid && data?.professional_completed && data?.client_completed"  padding>\n        <button color="secondary" ion-button round block (click)="pay(data,$index)">PAID</button>\n      </ion-grid>\n      <p class="bold" text-center padding *ngIf="(data?.professional_completed && !data?.client_completed)\n                  || (data?.professional_paid && !data?.client_paid)">\n        <em style="color:#f53d3d;text-align: center">Awaiting client\'s approval</em>\n      </p>\n\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/service-detail/service-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_2__providers_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* User */]])
    ], ServiceDetailPage);
    return ServiceDetailPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=service-detail.js.map

/***/ })

});
//# sourceMappingURL=8.js.map