webpackJsonp([2],{

/***/ 1067:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function() { return WalkthroughPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__walkthrough_page__ = __webpack_require__(1092);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(607);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WalkthroughPageModule = /** @class */ (function () {
    function WalkthroughPageModule() {
    }
    WalkthroughPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__walkthrough_page__["a" /* WalkthroughPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__walkthrough_page__["a" /* WalkthroughPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__walkthrough_page__["a" /* WalkthroughPage */]
            ]
        })
    ], WalkthroughPageModule);
    return WalkthroughPageModule;
}());

//# sourceMappingURL=walkthrough-page.module.js.map

/***/ }),

/***/ 1092:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkthroughPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {FirebaseAnalytics} from "@ionic-native/firebase-analytics";
var WalkthroughPage = /** @class */ (function () {
    function WalkthroughPage(navCtrl
    // ,private firebase: FirebaseAnalytics
    ) {
        this.navCtrl = navCtrl;
        // this.firebase.setCurrentScreen('Welcome Screen').then();
    }
    WalkthroughPage.prototype.ionViewDidLoad = function () {
    };
    WalkthroughPage.prototype.goToHome = function () {
        window.localStorage.setItem('skipIntroPage', JSON.stringify({ true: true }));
        this.navCtrl.setRoot('SigninPage');
    };
    WalkthroughPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-walkthrough-page',template:/*ion-inline-start:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/walkthrough-page/walkthrough-page.html"*/'<ion-content>\n  <ion-slides pager>\n\n    <ion-slide class="slide-1">\n      <div class="img-wrapper">\n        <img src="assets/imgs/slide-1.png" class="slide-image" />\n      </div>\n      <div class="caption">\n        <h2 class="slide-title bold" ion-text color="light">\n          Discover new services around you\n        </h2>\n      </div>\n    </ion-slide>\n\n    <ion-slide class="slide-2">\n      <div class="img-wrapper">\n        <img src="assets/imgs/slide-2.png" class="slide-image" />\n      </div>\n      <div class="caption">\n        <h2 class="slide-title bold" ion-text color="light">\n          1000s of vendors available to you with a click of search\n        </h2>\n      </div>\n    </ion-slide>\n\n    <ion-slide class="slide-3">\n      <div class="img-wrapper">\n        <img src="assets/imgs/slide-3.png" class="slide-image" />\n      </div>\n      <div class="caption">\n        <h2 class="slide-title bold" ion-text color="light">\n          Like or Review your favorite service providers\n        </h2>\n      </div>\n    </ion-slide>\n\n    <ion-slide class="slide-4">\n      <div class="caption">\n        <h2 ion-text color="light">Ready to explore?</h2>\n      </div>\n      <button ion-button large icon-right round color="light" (click)="goToHome()">\n        Get started\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n  <button class="skip-button bold" ion-button clear block color="light" (click)="goToHome()">\n    Skip\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/walkthrough-page/walkthrough-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavController */]
            // ,private firebase: FirebaseAnalytics
        ])
    ], WalkthroughPage);
    return WalkthroughPage;
}());

//# sourceMappingURL=walkthrough-page.js.map

/***/ })

});
//# sourceMappingURL=2.js.map