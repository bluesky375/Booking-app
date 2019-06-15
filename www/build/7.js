webpackJsonp([7],{

/***/ 1062:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePageModule", function() { return ServicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service__ = __webpack_require__(1087);
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
                __WEBPACK_IMPORTED_MODULE_2__service__["a" /* ServicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__service__["a" /* ServicePage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
            ],
        })
    ], ServicePageModule);
    return ServicePageModule;
}());

//# sourceMappingURL=service.module.js.map

/***/ }),

/***/ 1087:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services__ = __webpack_require__(38);
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



var ServicePage = /** @class */ (function (_super) {
    __extends(ServicePage, _super);
    function ServicePage(injector, sp, renderer) {
        var _this = _super.call(this, injector) || this;
        _this.sp = sp;
        _this.renderer = renderer;
        _this.option = 'details';
        _this.providers = [];
        _this.service = _this.NavParams('service');
        _this.category = _this.NavParams('category');
        _this.firebase_CurrentScreen('Service Screen');
        return _this;
    }
    ServicePage.prototype.ionViewDidLoad = function () {
        this.showLoadingView('service-view');
        this.loadData();
    };
    ServicePage.prototype.onImageLoad = function (imgLoader) {
        this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
    };
    ServicePage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.providers = [];
                        return [4 /*yield*/, this.sp.getPersonelByService(this.service._id).subscribe(function (providers) {
                                if (providers.length) {
                                    for (var _i = 0, providers_1 = providers; _i < providers_1.length; _i++) {
                                        var i = providers_1[_i];
                                        i.expanded = false;
                                        _this.providers.push(i);
                                    }
                                    _this.showContentView();
                                }
                                else {
                                    _this.showEmptyView();
                                }
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
    ServicePage.prototype.onReload = function (refresher) {
        this.refresher = refresher;
        this.loadData();
    };
    ServicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-service',template:/*ion-inline-start:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/service/service.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <ion-title *ngIf="service.title">{{service.title}}</ion-title>\n    <ion-buttons end>\n      <button ion-button="" clear (click)="dismiss()" icon-only="">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <ion-refresher (ionRefresh)="onReload($event)">\n\n    <ion-refresher-content pullingText="Pull to Refresh" refreshingText="Refreshing..."></ion-refresher-content>\n\n  </ion-refresher>\n  <section class="header_">\n    <div *ngIf="category" class="card-img">\n      <img-loader [src]="service?.url" (load)="onImageLoad($event)"></img-loader>\n    </div>\n  </section>\n\n  <div>\n    <ion-segment [(ngModel)]="option">\n      <ion-segment-button value="details">\n        Service Details\n      </ion-segment-button>\n      <ion-segment-button value="shops">\n        Shops\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n\n  <section [ngSwitch]="option">\n    <div class="content"  *ngSwitchCase="\'details\'">\n      <div *ngIf="service.description"  class="heading">\n        <p>{{service.description}}</p>\n      </div>\n      <div class="heading">\n        <p *ngIf="service?.gh_price" margin-top>\n          <ion-icon name="pricetag"></ion-icon>\n          <span>\n            GHC{{service?.gh_price}}\n          </span>\n        </p>\n        <p *ngIf="service.duration"  margin-top>\n          <ion-icon name="stopwatch"></ion-icon>\n          <span *ngIf="service.duration === 1 && service.durationType === \'hours\'">1 hour</span>\n          <span *ngIf="service.duration !== 1 && service.durationType">{{service.duration}} {{service.durationType}}</span>\n          <span *ngIf="service.duration !== 1 && !service.durationType">{{service.duration}} minutes</span>\n        </p>\n      </div>\n\n      <br><br>\n\n      <div padding>\n        <button (click)="openPage(\'CalendarPage\', { service: service,category: category,provider:null })" color="primary" ion-button block round>\n          Book Appointment\n        </button>\n      </div>\n\n    </div>\n    <div class="shop" *ngSwitchCase="\'shops\'">\n\n      <empty-view *ngIf="isErrorViewVisible" icon="alert" text="Bad internet connection"></empty-view>\n\n      <empty-view *ngIf="isEmptyViewVisible" icon="bookmark" text="No shop exist at the moment"></empty-view>\n\n      <div *ngIf="providers.length">\n        <ion-card no-margin margin-bottom color="light" *ngFor="let provider of providers" (click)="openPage(\'ShopPage\', { category: category,provider:provider })">\n          <div class="card-img">\n            <img-loader [src]="provider.url" (load)="onImageLoad($event)"></img-loader>\n          </div>\n          <ion-card-content>\n            <ion-row no-padding>\n              <ion-col col-8>\n                <p class="bold">{{ provider.name }}</p>\n                <span *ngIf="provider?.reviews.length > 0" style="display: flex">\n              <star-rating [starType]="\'svg\'" [size]="\'medium\'" [readOnly]="true" [showHalfStars]="false" [rating]="provider?.rating"></star-rating>\n              <span class="dark">({{provider?.reviews.length}})</span>\n           </span>\n                <span class="bold text-small" ion-text color="accent">{{ provider.title }}</span>\n              </ion-col>\n              <ion-col col-4 text-end align-self-end>\n              <span class="bold text-small" ion-text color="primary">\n                <ion-icon color="primary" name="pin"></ion-icon>\n                {{ provider.description }}\n              </span>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n  </section>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/service/service.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_2__providers_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ServicePage);
    return ServicePage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=service.js.map

/***/ })

});
//# sourceMappingURL=7.js.map