webpackJsonp([5],{

/***/ 1064:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageModule", function() { return ShopPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop__ = __webpack_require__(1089);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(607);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ShopPageModule = /** @class */ (function () {
    function ShopPageModule() {
    }
    ShopPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shop__["a" /* ShopPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shop__["a" /* ShopPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
            ],
        })
    ], ShopPageModule);
    return ShopPageModule;
}());

//# sourceMappingURL=shop.module.js.map

/***/ }),

/***/ 1089:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(614);
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






var ShopPage = /** @class */ (function (_super) {
    __extends(ShopPage, _super);
    function ShopPage(injector, sp, callNumber, launchNavigator, socialSharing, renderer) {
        var _this = _super.call(this, injector) || this;
        _this.sp = sp;
        _this.callNumber = callNumber;
        _this.launchNavigator = launchNavigator;
        _this.socialSharing = socialSharing;
        _this.renderer = renderer;
        _this.service = null;
        _this.services = [];
        _this.reviews = [];
        _this.category = _this.NavParams('category');
        _this.provider = _this.NavParams('provider');
        _this.firebase_CurrentScreen('Service Provider Profile Screen');
        return _this;
    }
    ShopPage.prototype.onImageLoad = function (imgLoader) {
        this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
    };
    ShopPage.prototype.ionViewDidLoad = function () {
        this.showLoadingView('shop=view');
        this.loadData();
    };
    ShopPage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var categories, j, _i, _a, s, services, i_1, _b, _c, category;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.services = [];
                        this.categories = [];
                        categories = [];
                        j = 0;
                        if (!(this.provider.services && this.provider.services.length > 0)) return [3 /*break*/, 4];
                        _i = 0, _a = this.provider.services;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        s = _a[_i];
                        return [4 /*yield*/, this.sp.getServiceById(s).subscribe(function (service) {
                                categories.push(JSON.parse(service._body));
                                j++;
                                if (j === _this.provider.services.length) {
                                    for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
                                        var s_1 = categories_1[_i];
                                        s_1.selected = false;
                                        _this.categories.push(s_1);
                                    }
                                }
                            })];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        services = [];
                        if (!(this.provider.categories && this.provider.categories.length > 0)) return [3 /*break*/, 9];
                        i_1 = 0;
                        _b = 0, _c = this.provider.categories;
                        _d.label = 5;
                    case 5:
                        if (!(_b < _c.length)) return [3 /*break*/, 8];
                        category = _c[_b];
                        return [4 /*yield*/, this.sp.getCategoryById(category).subscribe(function (service) {
                                services.push(JSON.parse(service._body));
                                i_1++;
                                if (i_1 === _this.provider.categories.length) {
                                    for (var _i = 0, services_1 = services; _i < services_1.length; _i++) {
                                        var s = services_1[_i];
                                        s.selected = false;
                                        _this.services.push(s);
                                    }
                                    _this.showContentView();
                                    _this.onRefreshComplete();
                                }
                            }, function (e) {
                                console.error(e);
                                _this.showErrorView();
                                _this.onRefreshComplete();
                            })];
                    case 6:
                        _d.sent();
                        _d.label = 7;
                    case 7:
                        _b++;
                        return [3 /*break*/, 5];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        this.showContentView();
                        _d.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ShopPage.prototype.loadProvider = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sp.getPersonnelById(this.provider._id).subscribe(function (provider) {
                            _this.provider = provider;
                            _this.showContentView();
                            _this.onRefreshComplete();
                        }, function (e) {
                            console.error(e);
                            _this.showErrorView();
                            _this.onRefreshComplete();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShopPage.prototype.onReload = function (refresher) {
        this.refresher = refresher;
        this.loadData();
        this.loadProvider();
    };
    ShopPage.prototype.onShare = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.socialSharing.share('I booked ' + this.provider.name + ' - ' + this.provider.title + ' on spekapp. download at http://www.spekapp.com', null, null)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.warn(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ShopPage.prototype.onCall = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.provider.number)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.callNumber.callNumber(this.provider.number, true)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        console.warn(err_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ShopPage.prototype.goToMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var googleMaps, appleMaps, isGoogleMapsAvailable, isAppleMapsAvailable, app, options, destination, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        googleMaps = this.launchNavigator.APP.GOOGLE_MAPS;
                        appleMaps = this.launchNavigator.APP.APPLE_MAPS;
                        return [4 /*yield*/, this.launchNavigator.isAppAvailable(googleMaps)];
                    case 1:
                        isGoogleMapsAvailable = _a.sent();
                        return [4 /*yield*/, this.launchNavigator.isAppAvailable(appleMaps)];
                    case 2:
                        isAppleMapsAvailable = _a.sent();
                        app = null;
                        if (isGoogleMapsAvailable) {
                            app = this.launchNavigator.APP.GOOGLE_MAPS;
                        }
                        else if (isAppleMapsAvailable) {
                            app = this.launchNavigator.APP.APPLE_MAPS;
                        }
                        else {
                            app = this.launchNavigator.APP.USER_SELECT;
                        }
                        options = {
                            app: app
                        };
                        destination = [
                            parseFloat(this.provider.latitude),
                            parseFloat(this.provider.longitude)
                        ];
                        return [4 /*yield*/, this.launchNavigator.navigate(destination, options)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_3 = _a.sent();
                        console.warn(err_3);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ShopPage.prototype.Book = function () {
        if (!this.service) {
            this.showToast('Select a service');
            return;
        }
        this.openPage('CalendarPage', { service: this.service, category: this.category, provider: this.provider });
    };
    ShopPage.prototype.SelectService = function (service) {
        for (var _i = 0, _a = this.services; _i < _a.length; _i++) {
            var s = _a[_i];
            s.selected = service._id === s._id;
        }
        this.service = service;
        for (var _b = 0, _c = this.categories; _b < _c.length; _b++) {
            var c = _c[_b];
            if (c._id === this.service.serviceId) {
                this.category = c;
            }
        }
    };
    ShopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shop',template:/*ion-inline-start:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/shop/shop.html"*/'<ion-header no-border="">\n  <ion-navbar color="primary">\n    <ion-title>{{ provider?.name }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onShare()">\n        <ion-icon name="share"></ion-icon>\n      </button>\n      <button ion-button="" clear (click)="dismiss()" icon-only="">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #container>\n\n  <ion-refresher (ionRefresh)="onReload($event)">\n\n    <ion-refresher-content pullingText="Pull to Refresh" refreshingText="Refreshing..."></ion-refresher-content>\n\n  </ion-refresher>\n\n  <div class="card-img">\n    <img-loader [src]="provider?.url" (load)="onImageLoad($event)"></img-loader>\n  </div>\n\n\n  <div class="card-container">\n    <!--<ion-fab right top>-->\n      <!--<button ion-fab (click)="onLike()">-->\n        <!--<ion-icon [name]="isLiked ? \'heart\' : \'heart-outline\'"></ion-icon>-->\n      <!--</button>-->\n    <!--</ion-fab>-->\n    <ion-card class="radius-top card-top" color="light">\n      <ion-card-content>\n        <p margin-top float-end>\n          <ion-icon color="dark" name="pin"></ion-icon>\n          <span color="dark" class="text-small" ion-text>\n            {{ provider?.description }}\n          </span>\n        </p>\n        <div class="content_">\n          <div class="heading_" style="margin-top: 0">\n            <h2>{{ provider?.name }}</h2>\n          </div>\n        </div>\n\n        <span *ngIf="provider?.reviews.length > 0" style="display: flex">\n            <star-rating [starType]="\'svg\'" [size]="\'medium\'" [readOnly]="true" [showHalfStars]="false" [rating]="provider?.rating"></star-rating>\n            <span class="dark">({{provider?.reviews.length}})</span>\n        </span>\n\n        <p  margin-top ion-text color="dark">{{ provider?.title }}</p>\n\n        <section class="content_" *ngIf="services.length > 0">\n          <div class="heading_">\n            <h2>Services</h2>\n          </div>\n\n          <ion-scroll scrollX="true" direction="x" style="height: 80px">\n            <ion-row nowrap align-items-center margin-horizontal>\n              <ion-col col-auto float-left *ngFor="let service of services">\n                <button ion-button round [ngClass]="{\'gradient-bg\':service.selected,\'outline\':!service.selected}" (click)="SelectService(service)" style="margin-bottom: 15px;">{{service.title}}</button>\n              </ion-col>\n            </ion-row>\n          </ion-scroll>\n        </section>\n\n\n        <ion-row class="buttons_">\n          <ion-col col-4 text-center tapabble [class.disabled]="!provider?.number" (click)="onCall()">\n            <div>\n              <ion-icon name="call" color="primary"></ion-icon>\n            </div>\n            <p class="bold" ion-text color="primary">Call</p>\n          </ion-col>\n          <ion-col col-4 text-center tapabble (click)="goToMap()">\n            <div>\n              <ion-icon name="map" color="primary"></ion-icon>\n            </div>\n            <p class="bold" ion-text color="primary">Directions</p>\n          </ion-col>\n          <ion-col col-4 text-center tapabble  (click)="Book()">\n            <div>\n              <ion-icon name="stopwatch" color="primary"></ion-icon>\n            </div>\n            <p class="bold" ion-text color="primary">Book</p>\n          </ion-col>\n        </ion-row>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <section padding margin-top>\n\n    <ion-row align-items-center>\n      <ion-col col-12>\n        <h5 no-margin>\n          <ion-icon class="text-medium" name="chatbubbles" color="accent"></ion-icon>\n          Comments and Reactions\n        </h5>\n      </ion-col>\n      <!--<ion-col col-4 text-end>-->\n        <!--<button class="bold" ion-button small block round color="primary" (click)="openPage(\'AddReviewPage\', { providerId: provider._id })">-->\n          <!--Post a Review-->\n        <!--</button>-->\n      <!--</ion-col>-->\n    </ion-row>\n\n    <div *ngIf="!provider?.reviews.length" text-center>\n      <p class="text-medium" color="accent">\n        No reviews found\n      </p>\n    </div>\n\n    <ion-list no-lines>\n      <div margin-bottom padding class="radius light-bg border" *ngFor="let review of provider?.reviews">\n        <ion-item no-padding color="light">\n          <ion-avatar item-start>\n            <img defaultImage="./assets/imgs/avatar.png"\n                 [lazyLoad]="review.user?.avatar?.url"\n                 [scrollObservable]="container.ionScroll" />\n          </ion-avatar>\n          <h2 class="bold no-margin">{{ review.user?.username }}</h2>\n          <p class="text-small no-margin" ion-text color="accent">\n            {{ review.timeposted | date:\'mediumDate\' }}\n          </p>\n          <star-rating *ngIf="review.rating" [starType]="\'svg\'" [size]="\'small\'" [readOnly]="true" [showHalfStars]="false" [rating]="review.rating"></star-rating>\n        </ion-item>\n        <ion-row>\n          <ion-col no-padding col-12>\n            <p class="text-medium bold no-margin" ion-text color="dark">{{ review.comment }}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-list>\n    <!--<div text-center *ngIf="reviews.length">-->\n      <!--<button class="bold" ion-button icon-right clear color="dark" >-->\n        <!--View all reviews-->\n        <!--<ion-icon name="arrow-round-forward"></ion-icon>-->\n      <!--</button>-->\n    <!--</div>-->\n\n  </section>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/shop/shop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_3__providers_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ShopPage);
    return ShopPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=shop.js.map

/***/ })

});
//# sourceMappingURL=5.js.map