webpackJsonp([12],{

/***/ 1058:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInvoicePageModule", function() { return MyInvoicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_invoice__ = __webpack_require__(1083);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(607);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyInvoicePageModule = /** @class */ (function () {
    function MyInvoicePageModule() {
    }
    MyInvoicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_invoice__["a" /* MyInvoicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_invoice__["a" /* MyInvoicePage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
            ],
        })
    ], MyInvoicePageModule);
    return MyInvoicePageModule;
}());

//# sourceMappingURL=my-invoice.module.js.map

/***/ }),

/***/ 1083:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyInvoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_services__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_page_base_page__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var MyInvoicePage = /** @class */ (function (_super) {
    __extends(MyInvoicePage, _super);
    function MyInvoicePage(injector, sp) {
        var _this = _super.call(this, injector) || this;
        _this.sp = sp;
        _this.option = 'unpaid';
        _this.paid = [];
        _this.unpaid = [];
        _this.loaded = false;
        _this.myCallbackFunction = function (_params) {
            return new Promise(function (resolve) {
                for (var _i = 0, _a = _this.unpaid; _i < _a.length; _i++) {
                    var u = _a[_i];
                    if (u._id === _params.bookedId) {
                        u.reviewed = true;
                        u.comment = _params.comment;
                        u.rating = _params.rating;
                    }
                }
                resolve();
            });
        };
        _this.firebase_CurrentScreen('User Invoice Screen');
        return _this;
    }
    MyInvoicePage.prototype.ionViewDidLoad = function () {
        this.showLoadingView('invoice page');
        this.loadData();
    };
    MyInvoicePage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.sp.getCompletedBookedByUserId().subscribe(function (data) {
                                _this.paid = [];
                                _this.unpaid = [];
                                if (data.length > 0) {
                                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                                        var d = data_1[_i];
                                        var fd = __WEBPACK_IMPORTED_MODULE_3_moment__(d.date).format('llll').split(',')[0];
                                        var tp = __WEBPACK_IMPORTED_MODULE_3_moment__(d.timeBooked).format('llll').split(',')[0];
                                        d.reviewed = false;
                                        d.comment = '';
                                        d.rating = '';
                                        d.full_date = fd + ", " + __WEBPACK_IMPORTED_MODULE_3_moment__(d.date).format('MMM Do, YYYY');
                                        d.timeposted = tp + ", " + __WEBPACK_IMPORTED_MODULE_3_moment__(d.timeBooked).format('MMM Do, YYYY');
                                        if (d.professional_paid && d.client_paid) {
                                            if (d.provider_.reviews.length > 0) {
                                                for (var _a = 0, _b = d.provider_.reviews; _a < _b.length; _a++) {
                                                    var r = _b[_a];
                                                    if (d.userId === r.userId && d._id === r.bookedId) {
                                                        d.reviewed = true;
                                                        d.comment = r.comment;
                                                        d.rating = r.rating;
                                                    }
                                                }
                                            }
                                            _this.paid.push(d);
                                        }
                                        else {
                                            _this.unpaid.push(d);
                                        }
                                    }
                                    _this.showContentView();
                                }
                                else {
                                    _this.showEmptyView();
                                }
                                _this.loaded = true;
                                _this.onRefreshComplete();
                            }, function (error) {
                                _this.loaded = true;
                                console.log(error);
                                _this.showErrorView();
                                _this.onRefreshComplete();
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        this.showErrorView();
                        this.onRefreshComplete();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MyInvoicePage.prototype.onReload = function (refresher) {
        this.refresher = refresher;
        this.loadData();
    };
    MyInvoicePage.prototype.pay = function (item, index) {
        var _this = this;
        this.showConfirm("Are you sure payment has been completed'").then(function () {
            _this.showLoadingView('invoice');
            _this.sp.paidService(item, 'client').subscribe(function () {
                item.client_paid = true;
                if (item.professional_paid) {
                    _this.paid.push(item);
                    _this.unpaid.splice(index, 1);
                }
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
        }).catch(function (err) { return console.log(err); });
    };
    MyInvoicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-invoice',template:/*ion-inline-start:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/my-invoice/my-invoice.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <ion-title>Invoices</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <empty-view *ngIf="isErrorViewVisible" icon="alert" text="Bad internet connection"></empty-view>\n\n  <empty-view *ngIf="isEmptyViewVisible" icon="bookmark" text="No completed service"></empty-view>\n\n  <ion-refresher (ionRefresh)="onReload($event)">\n\n    <ion-refresher-content pullingText="Pull to Refresh" refreshingText="Refreshing..."></ion-refresher-content>\n\n  </ion-refresher>\n\n  <div>\n    <ion-segment [(ngModel)]="option">\n      <ion-segment-button value="unpaid">\n        UnPaid\n      </ion-segment-button>\n      <ion-segment-button value="paid">\n        Paid\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <section [ngSwitch]="option">\n    <div class="content"  *ngSwitchCase="\'unpaid\'">\n      <div *ngIf="unpaid.length > 0">\n        <div *ngFor="let booked of unpaid">\n          <section class="content" style="margin-top: 20px;">\n            <div class="heading">\n\n              <div style="display:flex;width:100%">\n\n                <p class="bold header" style="width:80%">{{booked.service?.title}}</p>\n\n              </div>\n\n              <div style="display:flex;width:100%">\n\n                <p *ngIf="booked?.service?.gh_price" margin-top style="width:30%">\n                  <ion-icon name="pricetag"></ion-icon>\n                  <span>\n                      GHC{{ booked?.service?.gh_price * booked?.quantity}} <br/>\n                         <span *ngIf="booked?.quantity === 1">(1 person)</span>\n                         <span *ngIf="booked?.quantity > 1">({{booked?.quantity}} people)</span>\n                    </span>\n                </p>\n\n                <p *ngIf="booked?.full_date" margin-top text-end style="width:70%;text-align:right">\n                  <ion-icon name="calendar"></ion-icon>\n                  <span>{{ booked?.full_date }}</span>\n                </p>\n\n              </div>\n\n              <div  style="display:flex;width:100%">\n                <p *ngIf="booked?.service?.duration" margin-top style="width:30%">\n                  <ion-icon name="stopwatch"></ion-icon>\n                  <span *ngIf="booked?.service?.duration === 1 && booked?.service?.durationType === \'hours\'">1 hour</span>\n                  <span *ngIf="booked?.service?.duration !== 1 && booked?.service?.durationType">{{booked?.service?.duration}} {{booked?.service?.durationType}}</span>\n                  <span *ngIf="booked?.service?.duration !== 1 && !booked?.service?.durationType">{{booked?.service?.duration}} minutes</span>\n                </p>\n                <p *ngIf="booked?.time" margin-top text-end style="width:70%;text-align:right">\n                  <ion-icon name="time"></ion-icon>\n                  <span>{{ booked?.time }}</span>\n                </p>\n              </div>\n\n              <div (click)="openPage(\'ShopPage\', { category: booked.category,provider:booked.provider_ })"  *ngIf="booked?.provider_"  style="display:flex;width:100%">\n                <p margin-top style="width:50%">\n                  <ion-icon name="user"></ion-icon>\n                  <span>{{booked?.provider_?.name }}</span>\n                </p>\n                <p *ngIf="booked?.provider_?.description"  margin-top text-end style="width:50%;text-align:right">\n                  <ion-icon color="dark" name="pin"></ion-icon>\n                  <span>\n                      {{ booked?.provider_?.description }}\n                  </span>\n                </p>\n              </div>\n\n              <div *ngIf="!booked?.client_paid"  padding>\n                <button color="secondary" ion-button round block (click)="pay(booked,$index)">PAID</button>\n              </div>\n\n              <p class="bold" text-center padding *ngIf="!booked?.professional_paid && booked?.client_paid">\n                Paid: <em style="color:#f53d3d">Awaiting service provider\'s approval</em>\n              </p>\n\n            </div>\n          </section>\n        </div>\n      </div>\n      <ion-list *ngIf="unpaid.length === 0 && loaded">\n        <ion-item>\n          <p text-center>You have no unpaid invoices</p>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class="content" *ngSwitchCase="\'paid\'">\n      <div *ngIf="paid.length > 0">\n        <div *ngFor="let booked of paid">\n          <section class="content" style="margin-top: 20px;">\n            <div class="heading">\n\n              <div style="display:flex;width:100%">\n\n                <p class="bold header" style="width:80%">{{booked.service?.title}}</p>\n\n              </div>\n\n              <div style="display:flex;width:100%">\n\n                <p *ngIf="booked?.service?.gh_price" margin-top style="width:30%">\n                  <ion-icon name="pricetag"></ion-icon>\n                  <span>\n                    GHC{{ booked?.service?.gh_price * booked?.quantity}} <br/>\n                       <span *ngIf="booked?.quantity === 1">(1 person)</span>\n                       <span *ngIf="booked?.quantity > 1">({{booked?.quantity}} people)</span>\n                  </span>\n                </p>\n\n                <p *ngIf="booked?.full_date" margin-top text-end style="width:70%;text-align:right">\n                  <ion-icon name="calendar"></ion-icon>\n                  <span>{{ booked?.full_date }}</span>\n                </p>\n\n              </div>\n\n              <div  style="display:flex;width:100%">\n                <p *ngIf="booked?.service?.duration" margin-top style="width:30%">\n                  <ion-icon name="stopwatch"></ion-icon>\n                  <span *ngIf="booked?.service?.duration === 1 && booked?.service?.durationType === \'hours\'">1 hour</span>\n                  <span *ngIf="booked?.service?.duration !== 1 && booked?.service?.durationType">{{booked?.service?.duration}} {{booked?.service?.durationType}}</span>\n                  <span *ngIf="booked?.service?.duration !== 1 && !booked?.service?.durationType">{{booked?.service?.duration}} minutes</span>\n                </p>\n                <p *ngIf="booked?.time" margin-top text-end style="width:70%;text-align:right">\n                  <ion-icon name="time"></ion-icon>\n                  <span>{{ booked?.time }}</span>\n                </p>\n              </div>\n\n              <div (click)="openPage(\'ShopPage\', { category: booked.category,provider:booked.provider_ })"  *ngIf="booked?.provider_"  style="display:flex;width:100%">\n                <p margin-top style="width:50%">\n                  <ion-icon name="user"></ion-icon>\n                  <span>{{booked?.provider_?.name }}</span>\n                </p>\n                <p *ngIf="booked?.provider_?.description"  margin-top text-end style="width:50%;text-align:right">\n                  <ion-icon color="dark" name="pin"></ion-icon>\n                  <span>\n                      {{ booked?.provider_?.description }}\n                  </span>\n                </p>\n              </div>\n\n              <div *ngIf="!booked?.reviewed" padding>\n                <button color="secondary" ion-button round block (click)="openPage(\'AddReviewPage\', { providerId: booked.provider_._id, bookedId: booked._id ,type: \'add\',callback:myCallbackFunction})">Review Service</button>\n              </div>\n\n              <div *ngIf="booked?.reviewed">\n                <div margin-bottom padding class="radius light-bg border">\n                  <ion-item *ngIf="booked?.rating" no-padding color="light">\n                    <star-rating *ngIf="booked?.rating" [starType]="\'svg\'" [size]="\'small\'" [readOnly]="true" [showHalfStars]="false" [rating]="booked?.rating"></star-rating>\n                    <span item-end (click)="openPage(\'AddReviewPage\', { providerId: booked.provider_._id, bookedId: booked._id ,type: \'edit\',review:{rating:booked.rating,comment:booked.comment},callback:myCallbackFunction})">\n                      edit\n                    </span>\n                  </ion-item>\n                  <ion-row>\n                    <ion-col *ngIf="booked.comment !== \'\'" no-padding col-12>\n                      <p class="text-medium bold no-margin" ion-text color="dark">{{ booked?.comment }}</p>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </div>\n\n\n            </div>\n          </section>\n        </div>\n      </div>\n      <ion-list *ngIf="paid.length === 0 && loaded">\n        <ion-item>\n          <p text-center>You have no paid invoices</p>\n        </ion-item>\n      </ion-list>\n    </div>\n  </section>\n</ion-content>\n'/*ion-inline-end:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/my-invoice/my-invoice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_1__providers_services__["a" /* ServicesProvider */]])
    ], MyInvoicePage);
    return MyInvoicePage;
}(__WEBPACK_IMPORTED_MODULE_2__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=my-invoice.js.map

/***/ })

});
//# sourceMappingURL=12.js.map