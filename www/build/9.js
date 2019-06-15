webpackJsonp([9],{

/***/ 1060:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(1085);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(607);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 1085:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_page_base_page__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services__ = __webpack_require__(38);
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





var SearchPage = /** @class */ (function (_super) {
    __extends(SearchPage, _super);
    function SearchPage(injector, renderer, keyboard, events, sp) {
        var _this = _super.call(this, injector) || this;
        _this.renderer = renderer;
        _this.keyboard = keyboard;
        _this.events = events;
        _this.sp = sp;
        _this.placeholder = '';
        _this.results = [];
        _this.s_type = '';
        _this.result = '';
        _this.loaded = true;
        _this.b_loaded = false;
        _this.num = 0;
        _this.type = _this.NavParams('type');
        return _this;
    }
    SearchPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.input.setFocus();
            _this.keyboard.show();
        }, 150);
    };
    SearchPage.prototype.onImageLoad = function (imgLoader) {
        this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        this.placeholder = (this.type === 'provider') ? 'Search Service Providers' : 'Search Services';
    };
    SearchPage.prototype.getItems = function (e) {
        this.b_loaded = false;
    };
    SearchPage.prototype.SearchResult = function () {
        var _this = this;
        this.loaded = false;
        this.sp.SearchItem(this.num, this.result, this.type).subscribe(function (result) {
            _this.results = [];
            _this.s_type = result.type;
            if (result.data.length) {
                _this.results = result.data;
                _this.showContentView();
                _this.loaded = true;
                _this.b_loaded = true;
            }
            else {
                _this.loaded = true;
                _this.b_loaded = true;
                _this.showContentView();
            }
            _this.onRefreshComplete();
        }, function (e) {
            _this.loaded = true;
            _this.b_loaded = true;
            console.log(e);
            _this.showErrorView();
            _this.onRefreshComplete();
        });
    };
    SearchPage.prototype.Service = function (category) {
        this.openPage('ServicesPage', { category: category });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", Object)
    ], SearchPage.prototype, "input", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/search/search.html"*/'<ion-header no-border>\n  <ion-toolbar  color="primary" no-border style="display: flex">\n    <button clear ion-button item-start icon-only color="dark" class="back-button_" (click)="goBack()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    <form (submit)="SearchResult()">\n      <ion-searchbar placeholder="{{placeholder}}" #input name="search" (ionInput)="getItems($event)" [(ngModel)]="result"></ion-searchbar>\n      <button type="submit"  style="display:none"></button>\n    </form>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [hidden]="loaded" class="spinner-container">\n    <ion-spinner></ion-spinner>\n  </div>\n  <div *ngIf="results.length > 0">\n    <div *ngIf="type === \'service\'">\n      <div *ngIf="s_type === \'service\'">\n        <div class="card-img" *ngFor="let result of results" (click)="Service(result)">\n          <img-loader [src]="result?.url" (load)="onImageLoad($event)"></img-loader>\n          <div>\n            <h5 class="bold" ion-text color="light">{{ result?.name }}</h5>\n            <span class="bold" ion-text color="light">\n          {{ result?.description }}\n        </span>\n          </div>\n        </div>\n      </div>\n      <div *ngIf="s_type === \'categories\'">\n        <div class="card-img" *ngFor="let result of results" (click)="openPage(\'ServicePage\', { service: result,category: result.category })">\n          <img-loader [src]="result?.url" (load)="onImageLoad($event)"></img-loader>\n          <div>\n            <h5 class="bold" ion-text color="light">{{ result?.title }}</h5>\n            <span class="bold" ion-text color="light">\n          {{ result?.description }}\n        </span>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div *ngIf="type === \'provider\'">\n      <ion-card no-margin margin-bottom color="light" *ngFor="let result of results" (click)="openPage(\'ShopPage\', { provider:result })">\n        <div class="card-img">\n          <img-loader [src]="result?.url" (load)="onImageLoad($event)"></img-loader>\n        </div>\n        <ion-card-content>\n          <ion-row no-padding>\n            <ion-col col-8>\n              <p class="bold">{{ result?.name }}</p>\n              <span *ngIf="result?.reviews.length > 0" style="display: flex">\n              <star-rating [starType]="\'svg\'" [size]="\'medium\'" [readOnly]="true" [showHalfStars]="false" [rating]="result?.rating"></star-rating>\n              <span class="dark">({{result?.reviews.length}})</span>\n           </span>\n              <span class="bold text-small" ion-text color="accent">{{ result?.title }}</span>\n            </ion-col>\n            <ion-col col-4 text-end align-self-end>\n              <span class="bold text-small" ion-text color="primary">\n                <ion-icon color="primary" name="pin"></ion-icon>\n                {{ result?.description }}\n              </span>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n  <div [hidden]="!b_loaded" *ngIf="results.length === 0" class="no-product">\n    <h1>No result found for</h1>\n    <p>"{{result}}"</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__providers_services__["a" /* ServicesProvider */]])
    ], SearchPage);
    return SearchPage;
}(__WEBPACK_IMPORTED_MODULE_2__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=9.js.map