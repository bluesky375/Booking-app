webpackJsonp([4],{

/***/ 1065:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin__ = __webpack_require__(1090);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(607);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SigninPageModule = /** @class */ (function () {
    function SigninPageModule() {
    }
    SigninPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signin__["a" /* SigninPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signin__["a" /* SigninPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
            ],
        })
    ], SigninPageModule);
    return SigninPageModule;
}());

//# sourceMappingURL=signin.module.js.map

/***/ }),

/***/ 1090:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_page_base_page__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tab_tab__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__ = __webpack_require__(211);
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







var SigninPage = /** @class */ (function (_super) {
    __extends(SigninPage, _super);
    function SigninPage(injector, fcm, platform, user) {
        var _this = _super.call(this, injector) || this;
        _this.fcm = fcm;
        _this.platform = platform;
        _this.user = user;
        _this.email = '';
        _this.password = '';
        _this.tabBarElement = null;
        _this.tabBarElement = document.querySelector('.toolbar');
        if (_this.tabBarElement) {
            _this.tabBarElement.style.display = 'none';
        }
        _this.firebase_CurrentScreen('Sign In Screen');
        _this.platform.registerBackButtonAction(function () {
            _this.showConfirm('Are you sure you want to exit this app?').then(function () {
                navigator['app'].exitApp();
            }).catch(function (err) { return console.error(err); });
        });
        return _this;
    }
    SigninPage.prototype.login = function () {
        var _this = this;
        if (this.email === '' || this.password === '') {
            this.showToast('Please enter both username and password');
        }
        else {
            var d = {
                email: this.email,
                password: this.password
            };
            this.showLoadingView('sign-in2');
            this.user.Login(d).subscribe(function (data) {
                if (data.success) {
                    _this.showContentView();
                    var d_1 = {
                        _id: null,
                        type: 'user',
                        device_token: null
                    };
                    _this.fcm.getToken().then(function (token) {
                        d_1._id = data.user._id;
                        d_1.device_token = token;
                        if (data.user.userType === 'Professional')
                            d_1.type = 'professional';
                        _this.user.updateDeviceToken(d_1).subscribe(function (d) { console.log(d); });
                    });
                    if (data.user.userType === 'Client') {
                        _this.GoTo(__WEBPACK_IMPORTED_MODULE_4__tab_tab__["a" /* TabPage */]);
                    }
                    else if (data.user.userType === 'Professional') {
                        _this.GoTo(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                    }
                    else {
                        _this.GoTo(__WEBPACK_IMPORTED_MODULE_4__tab_tab__["a" /* TabPage */]);
                    }
                }
                else {
                    _this.showErrorView();
                    _this.showToast(data.msg);
                }
            }, function (error) {
                console.log(error);
                _this.showToast("Invalid email or password");
                _this.showErrorView();
            });
        }
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/signin/signin.html"*/'<!--<ion-content class="container">-->\n  <!--<div class="login-block">-->\n    <!--<div class="desktop">-->\n      <!--<div  class="top-block">-->\n        <!--<h3 class="title_">-->\n          <!--<img src="assets/imgs/logo.png" alt="">-->\n        <!--</h3>-->\n      <!--</div>-->\n      <!--<div class="middle-block">-->\n        <!--<form class="content">-->\n          <!--<ion-list>-->\n            <!--<ion-item>-->\n              <!--<ion-label floating>Your Email</ion-label>-->\n              <!--<ion-input type="email" name="email" [(ngModel)]="email" ></ion-input>-->\n            <!--</ion-item>-->\n            <!--<ion-item>-->\n              <!--<ion-label floating>Your Password</ion-label>-->\n              <!--<ion-input type="password" name="password" [(ngModel)]="password" ></ion-input>-->\n            <!--</ion-item>-->\n            <!--<ion-item class="bottom-label">-->\n              <!--<div style="width:100%;display:flex;padding-top:10px">-->\n                <!--<div style="width:100%;text-align:right">-->\n                  <!--<button (click)="login()" color="light" ion-button block>-->\n                    <!--LOGIN-->\n                  <!--</button>-->\n                <!--</div>-->\n              <!--</div>-->\n            <!--</ion-item>-->\n          <!--</ion-list>-->\n        <!--</form>-->\n      <!--</div>-->\n      <!--<div class="bottom-block">-->\n        <!--<div class="content" style="width:100%;display:flex">-->\n          <!--<div style="width:50%;text-align:left">-->\n            <!--<button (click)="ForgotPass()"  color="light" class="btn-small" ion-button small clear>FORGOT PASSWORD?</button>-->\n          <!--</div>-->\n          <!--<div style="width:50%;text-align:right">-->\n            <!--<button (click)="SignUp()" color="light" class="btn-small" ion-button small clear>REGISTER HERE</button>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</ion-content>-->\n<ion-content padding text-center class="gradient-bg">\n\n  <img margin class="logo" src="assets/imgs/logo.png" width="120">\n\n  <form novalidate>\n\n    <ion-item class="transparent">\n      <ion-label stacked color="light">Email</ion-label>\n      <ion-input type="email" name="email" [(ngModel)]="email" ></ion-input>\n    </ion-item>\n\n    <ion-item class="transparent">\n      <ion-label stacked color="light">Password</ion-label>\n      <ion-input type="password" name="password" [(ngModel)]="password" ></ion-input>\n    </ion-item>\n\n    <div padding>\n      <button (click)="login()" color="light" ion-button block outline round>\n        Login\n      </button>\n    </div>\n\n    <div padding>\n      <button type="button" class="bold" ion-button block clear color="light" (click)="navigateTo(\'SignupPage\')">\n        No Account yet? create one\n      </button>\n\n      <button type="button" class="bold" ion-button block clear color="light"\n              (click)="navigateTo(\'ForgotpassPage\')">\n        forgot password\n      </button>\n    </div>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* User */]])
    ], SigninPage);
    return SigninPage;
}(__WEBPACK_IMPORTED_MODULE_3__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=signin.js.map

/***/ })

});
//# sourceMappingURL=4.js.map