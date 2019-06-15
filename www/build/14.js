webpackJsonp([14],{

/***/ 1056:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPageModule", function() { return ForgotpassPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotpass__ = __webpack_require__(1081);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotpassPageModule = /** @class */ (function () {
    function ForgotpassPageModule() {
    }
    ForgotpassPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgotpass__["a" /* ForgotpassPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgotpass__["a" /* ForgotpassPage */]),
            ],
        })
    ], ForgotpassPageModule);
    return ForgotpassPageModule;
}());

//# sourceMappingURL=forgotpass.module.js.map

/***/ }),

/***/ 1081:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(32);
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



var ForgotpassPage = /** @class */ (function (_super) {
    __extends(ForgotpassPage, _super);
    function ForgotpassPage(injector, user) {
        var _this = _super.call(this, injector) || this;
        _this.user = user;
        _this.firebase_CurrentScreen('Forgot Password Screen');
        return _this;
    }
    ForgotpassPage.prototype.SendNow = function () {
        var _this = this;
        if (this.email === '') {
            this.showToast("Please enter your email");
        }
        else {
            var d = {
                email: this.email,
            };
            this.showLoadingView('fp');
            this.user.ForgotPass(d).subscribe(function (data) {
                if (data.success) {
                    _this.showContentView();
                    _this.showToast('You will receive an email any second now. Check your email for detail instructions on how to proceed.');
                    _this.goBack();
                }
                else {
                    _this.showErrorView();
                    _this.showToast('We are unable to send an email at this time. Try again later.');
                }
            }, function (error) {
                console.log(error);
                _this.showToast('This email is not in our system');
                _this.showErrorView();
            });
        }
    };
    ForgotpassPage.prototype.Login = function () {
        this.goBack();
    };
    ForgotpassPage.prototype.Register = function () {
        this.navigateTo("SignupPage");
    };
    ForgotpassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgotpass',template:/*ion-inline-start:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/forgotpass/forgotpass.html"*/'<ion-content class="gradient-bg">\n  <div class="login-block">\n    <div class="desktop">\n      <div  class="top-block">\n        <div class="ipoll-title">\n          <h3>No need to stress,</h3>\n          <p>we got this under control</p>\n        </div>\n      </div>\n      <div class="middle-block">\n        <form class="content">\n            <ion-item>\n              <ion-label stacked color="light">Your Email</ion-label>\n              <ion-input type="email" name="email" [(ngModel)]="email" ></ion-input>\n            </ion-item>\n\n            <div padding>\n              <button (click)="SendNow(email)" color="light" ion-button block outline round>\n                Send\n              </button>\n            </div>\n\n        </form>\n      </div>\n      <div class="bottom-block">\n        <div class="content" style="width:100%;display:flex">\n          <div style="width:50%;text-align:left">\n            <button (click)="Login()" color="light" class="btn-small" ion-button small clear>LOGIN</button>\n          </div>\n          <div style="width:50%;text-align:right">\n            <button (click)="Register()" color="light" class="btn-small" ion-button small clear>REGISTER HERE</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/forgotpass/forgotpass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* User */]])
    ], ForgotpassPage);
    return ForgotpassPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=forgotpass.js.map

/***/ })

});
//# sourceMappingURL=14.js.map