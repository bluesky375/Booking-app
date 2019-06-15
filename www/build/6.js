webpackJsonp([6],{

/***/ 1063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePageModule", function() { return ServicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(1088);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(607);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServicePageModule = /** @class */ (function () {
    function ServicePageModule() {
    }
    ServicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__services__["a" /* ServicesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__services__["a" /* ServicesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
            ],
        })
    ], ServicePageModule);
    return ServicePageModule;
}());

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ 1088:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services__ = __webpack_require__(38);
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





var ServicesPage = /** @class */ (function (_super) {
    __extends(ServicesPage, _super);
    function ServicesPage(injector, sp, renderer, user) {
        var _this = _super.call(this, injector) || this;
        _this.sp = sp;
        _this.renderer = renderer;
        _this.user = user;
        _this.type = 'info';
        _this.services = [];
        _this.offers = [];
        _this.providers = [];
        _this.catLoaded = false;
        _this.offLoaded = false;
        _this.SerLoaded = false;
        _this.itemExpandHeight = 230;
        _this.category = _this.NavParams('category');
        _this.firebase_CurrentScreen('Services Screen');
        return _this;
    }
    ServicesPage.prototype.ionViewDidLoad = function () {
        this.showLoadingView('service');
        this.loadCategoryData();
        this.loadOfferData();
        this.loadServiceProviders();
    };
    ServicesPage.prototype.onImageLoad = function (imgLoader) {
        this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
    };
    ServicesPage.prototype.loadCategoryData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.services = [];
                        return [4 /*yield*/, this.sp.getCategoriesByType(this.category._id).subscribe(function (services) {
                                if (services.length) {
                                    for (var _i = 0, services_1 = services; _i < services_1.length; _i++) {
                                        var i = services_1[_i];
                                        i.expanded = false;
                                        _this.services.push(i);
                                    }
                                    _this.catLoaded = true;
                                    if (_this.offLoaded && _this.SerLoaded) {
                                        _this.showContentView();
                                    }
                                }
                                else {
                                    _this.catLoaded = true;
                                    if (_this.offLoaded && _this.SerLoaded && _this.services.length === 0) {
                                        _this.showContentView();
                                    }
                                }
                                if (_this.offLoaded && _this.SerLoaded) {
                                    _this.onRefreshComplete();
                                }
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
    ServicesPage.prototype.loadOfferData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.offers = [];
                        return [4 /*yield*/, this.sp.getOffersByType(this.category._id).subscribe(function (offers) {
                                if (offers.length) {
                                    for (var _i = 0, offers_1 = offers; _i < offers_1.length; _i++) {
                                        var i = offers_1[_i];
                                        i.from = __WEBPACK_IMPORTED_MODULE_4_moment__(i.from).format("MMM Do");
                                        i.to = __WEBPACK_IMPORTED_MODULE_4_moment__(i.to).format("MMM Do");
                                        _this.offers.push(i);
                                    }
                                    _this.offLoaded = true;
                                    if (_this.catLoaded && _this.SerLoaded) {
                                        _this.showContentView();
                                    }
                                }
                                else {
                                    _this.offLoaded = true;
                                    if (_this.catLoaded && _this.SerLoaded && _this.offers.length === 0) {
                                        _this.showContentView();
                                    }
                                }
                                if (_this.catLoaded && _this.SerLoaded) {
                                    _this.onRefreshComplete();
                                }
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
    ServicesPage.prototype.loadServiceProviders = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sp.getPersonelByCategory(this.category._id).subscribe(function (providers) {
                            _this.providers = [];
                            if (providers.length) {
                                for (var _i = 0, providers_1 = providers; _i < providers_1.length; _i++) {
                                    var i = providers_1[_i];
                                    i.expanded = false;
                                    _this.providers.push(i);
                                }
                                _this.SerLoaded = true;
                                if (_this.offLoaded && _this.catLoaded) {
                                    _this.showContentView();
                                }
                            }
                            else {
                                _this.SerLoaded = true;
                                if (_this.offLoaded && _this.catLoaded && _this.providers.length === 0) {
                                    _this.showContentView();
                                }
                            }
                            if (_this.offLoaded && _this.catLoaded) {
                                _this.onRefreshComplete();
                            }
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
    // book(service){
    //   this.navigateTo('CalendarPage',{service:service,category:this.category});
    // }
    //
    // UserProfile(){
    //   this.navigateTo('ProfilePage')
    // }
    //
    // presentPopover(myEvent) {
    //   this.showPopover(myEvent,Popover)
    // }
    ServicesPage.prototype.onReload = function (refresher) {
        this.refresher = refresher;
        this.loadCategoryData();
        this.loadOfferData();
        this.loadServiceProviders();
    };
    ServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-services',template:/*ion-inline-start:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/services/services.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <ion-title *ngIf="category.name">{{category.name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button="" clear (click)="dismiss()" icon-only="">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <div *ngIf="!isErrorViewVisible && !isEmptyViewVisible " class="card-img">\n    <img-loader [src]="category.url" (load)="onImageLoad($event)"></img-loader>\n  </div>\n\n  <empty-view *ngIf="isErrorViewVisible" icon="alert" text="Bad internet connection"></empty-view>\n\n  <empty-view *ngIf="isEmptyViewVisible" icon="bookmark" text="No information found"></empty-view>\n\n  <ion-refresher (ionRefresh)="onReload($event)">\n\n    <ion-refresher-content pullingText="Pull to Refresh" refreshingText="Refreshing..."></ion-refresher-content>\n\n  </ion-refresher>\n\n  <section class="content" *ngIf="services.length > 0">\n\n    <div class="heading">\n      <h2>Choose preferred service</h2>\n      <p>We have a pool of categories to browse from. Which do you prefer?</p>\n    </div>\n\n    <ion-scroll scrollX="true" direction="x" style="height: 140px">\n      <ion-row nowrap align-items-center margin-horizontal>\n        <ion-col col-auto float-left *ngFor="let service of services">\n          <ion-card class="card-category" color="light"\n                    (click)="openPage(\'ServicePage\', { service: service,category: category })">\n            <div class="card-image">\n              <img-loader (load)="onImageLoad($event)"\n                          [src]="service.url">\n              </img-loader>\n            </div>\n            <ion-card-content class="gradient-bg" text-center text-nowrap>\n              <p class="text-small bold ellipsis">{{ service.title }}</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-scroll>\n\n  </section>\n\n  <section class="content" *ngIf="providers.length > 0">\n\n    <div class="heading">\n      <h2>Choose prefered vendor</h2>\n      <p>We curated our service providers to fit your search. Book an appointment with a service provider of your choosing</p>\n    </div>\n\n    <ion-scroll scrollX="true" direction="x" style="height: 140px">\n      <ion-row nowrap align-items-center margin-horizontal>\n        <ion-col col-auto float-left *ngFor="let provider of providers">\n          <ion-card class="card-category" color="light"\n                    (click)="openPage(\'ShopPage\', {category: category ,provider:provider})">\n            <div class="card-image">\n              <img-loader (load)="onImageLoad($event)"\n                          [src]="provider.url">\n              </img-loader>\n            </div>\n            <ion-card-content class="gradient-bg" text-center text-nowrap>\n              <p class="text-small bold ellipsis">{{ provider.title }}</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-scroll>\n\n  </section>\n\n  <!--<section class="content" *ngIf="offers.length > 0">-->\n\n    <!--<div class="heading">-->\n      <!--<h2>Special Offers</h2>-->\n      <!--<p>Grab these special offers from your favourite shops</p>-->\n    <!--</div>-->\n\n    <!--<div class="offers">-->\n      <!--<ion-scroll scrollX="true" direction="x" style="height: 270px">-->\n        <!--<ion-row nowrap margin-horizontal>-->\n          <!--<ion-col col-auto float-left *ngFor="let offer of offers"-->\n                   <!--(click)="openPage(\'OfferPage\', { offer: offer, category: category })">-->\n\n            <!--<ion-card color="light">-->\n\n              <!--<div class="image-container">-->\n                <!--<img-loader useImg (load)="onImageLoad($event)"-->\n                            <!--[src]="offer.url">-->\n                <!--</img-loader>-->\n              <!--</div>-->\n            <!--</ion-card>-->\n            <!--<p no-margin text-nowrap text-center class="text-medium ellipsis bold">{{ offer.title }}</p>-->\n          <!--</ion-col>-->\n        <!--</ion-row>-->\n      <!--</ion-scroll>-->\n    <!--</div>-->\n\n  <!--</section>-->\n</ion-content>\n'/*ion-inline-end:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/services/services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_3__providers_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* User */]])
    ], ServicesPage);
    return ServicesPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=services.js.map

/***/ })

});
//# sourceMappingURL=6.js.map