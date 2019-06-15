webpackJsonp([3],{

/***/ 1066:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(1091);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 1091:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_page_base_page__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_country_code__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tab_tab__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__ = __webpack_require__(211);
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








var SignupPage = /** @class */ (function (_super) {
    __extends(SignupPage, _super);
    function SignupPage(injector, user, platform, fcm, countryCode) {
        var _this = _super.call(this, injector) || this;
        _this.user = user;
        _this.platform = platform;
        _this.fcm = fcm;
        _this.countryCode = countryCode;
        _this.en = false;
        _this.fr = false;
        _this.init = true;
        _this.id = '';
        _this.lang = 'English';
        _this.username = '';
        _this.code = "+233";
        _this.number = '';
        _this.number2 = '';
        _this.email = '';
        _this.password = '';
        _this.password2 = '';
        _this.Vcode = '';
        _this.timer = 300000;
        _this.count = 0;
        _this.lng = false;
        _this.name = false;
        _this.num = false;
        _this.em = false;
        _this.passed30 = false;
        _this.currentIndex = null;
        _this.platform.registerBackButtonAction(function () {
            if (_this.currentIndex === 0 || !_this.currentIndex) {
                _this.goBack();
            }
            else {
                _this.slides.lockSwipes(false);
                _this.slides.slidePrev();
                _this.slides.lockSwipeToNext(true);
            }
            _this.firebase_CurrentScreen('Register Screen');
        });
        return _this;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        this.slides.lockSwipes(true);
        this.codes = this.countryCode.getCodes().countries;
    };
    SignupPage.prototype.next = function (num) {
        var _this = this;
        var Continue = false;
        if (num === '2') {
            if (this.username === '') {
                this.showToast('Please enter your name');
            }
            else {
                Continue = true;
                this.name = true;
            }
        }
        if (num === '3') {
            if (this.number === '' || this.number.length < 9 || this.number.length > 10) {
                this.showToast('Please enter a valid phone number');
            }
            else {
                for (var _i = 0, _a = this.codes; _i < _a.length; _i++) {
                    var c = _a[_i];
                    if (c.code === this.code) {
                        this.country = c;
                    }
                }
                this.showLoadingView('sign-3');
                if (this.number.length === 10 && this.number.substr(0, 1) === '0') {
                    this.number = this.number.substr(1, 10);
                    console.log(this.number);
                }
                var data = {
                    init: this.init,
                    id: this.id,
                    language: this.lang,
                    username: this.username,
                    number: this.number,
                    number2: this.number2,
                    country: this.country
                };
                window.localStorage.setItem('number', this.number);
                this.user.SaveUser(data).subscribe(function (data) {
                    if (data.success) {
                        _this.showContentView();
                        _this.id = data._id;
                        _this.timer = 30;
                        _this.mySubscription = __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].interval(1000).map(function () { }).subscribe(function () {
                            _this.timer = _this.timer - 1;
                            if (_this.timer === 0) {
                                if (_this.passed30 === false) {
                                    _this.passed30 = true;
                                    _this.timer = 59;
                                }
                                else {
                                    _this.SwitchNumber();
                                }
                            }
                        });
                        _this.passed30 = false;
                        _this.slides.lockSwipes(false);
                        _this.slides.slideNext();
                        _this.slides.lockSwipes(true);
                    }
                    else {
                        _this.showToast(data.msg);
                        _this.showErrorView();
                    }
                }, function (error) {
                    console.log(error);
                    _this.showToast("Invalid number");
                    _this.showErrorView();
                });
            }
        }
        if (Continue === true) {
            this.count++;
            console.log(this.slides);
            this.slides.lockSwipes(false);
            this.slides.slideNext();
            this.slides.lockSwipeToNext(true);
        }
    };
    SignupPage.prototype.Submit = function () {
        var _this = this;
        if (this.email === '' || this.password === '' || this.password2 === '') {
            this.showToast('Please enter both email and password');
        }
        else if (this.password !== this.password2) {
            this.showToast('Passwords do not match');
        }
        else {
            var data = {
                phone: this.country.code + "" + this.number,
                email: this.email,
                password: this.password,
                password2: this.password2
            };
            this.showLoadingView('sup');
            this.user.addUser(data).subscribe(function (data) {
                if (data.success) {
                    _this.showContentView();
                    _this.id = data._id;
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
                    _this.GoTo(__WEBPACK_IMPORTED_MODULE_6__tab_tab__["a" /* TabPage */]);
                }
                else {
                    if (data.type === 'email') {
                        _this.slides.slideTo(3, 500);
                    }
                    _this.showErrorView();
                    _this.showToast(data.msg);
                }
            }, function (error) {
                console.log(error);
                _this.showErrorView();
                _this.showToast(error.message);
            });
        }
    };
    SignupPage.prototype.SwitchNumber = function () {
        this.mySubscription.unsubscribe();
        this.init = false;
        this.number2 = window.localStorage.getItem('number');
        this.slides.lockSwipes(false);
        this.slides.slideTo(1, 500);
        this.slides.lockSwipeToNext(true);
    };
    SignupPage.prototype.SubmitCode = function () {
        var _this = this;
        var data = {
            phone: this.country.code + "" + this.number,
            code: this.Vcode,
            id: this.id
        };
        this.showLoadingView('sup2');
        this.user.Verify(data).subscribe(function (data) {
            if (data.success) {
                _this.showContentView();
                _this.mySubscription.unsubscribe();
                _this.slides.lockSwipes(false);
                _this.slides.slideNext();
                _this.slides.lockSwipeToNext(true);
            }
            else {
                _this.showToast(data.msg);
                _this.showErrorView();
            }
        }, function (error) {
            console.log(error);
            _this.showErrorView();
            _this.showToast(error.message);
        });
    };
    SignupPage.prototype.slideChanged = function () {
        if (this.currentIndex === 4) {
            this.currentIndex = this.slides.getActiveIndex();
            if (this.currentIndex === 3) {
                this.slides.slideTo(2, 500);
            }
        }
        this.currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', this.currentIndex);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Slides */])
    ], SignupPage.prototype, "slides", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/signup/signup.html"*/'<ion-slides (ionSlideDidChange)="slideChanged()" pager>\n  <ion-slide id="slide2" class="gradient-bg" padding>\n    <div class="content">\n      <ion-icon class="n-icon" name="ios-contact"></ion-icon>\n      <h3 class="light">PLEASE ENTER YOUR NAME</h3>\n      <div class="order-modal">\n          <ion-item>\n            <ion-input type="text" name="username" placeholder="Aditek?" [(ngModel)]="username"></ion-input>\n          </ion-item>\n\n        <div padding>\n          <button (click)="next(\'2\')" color="light" icon-right ion-button block outline round>\n            NEXT\n            <ion-icon ios="ios-arrow-round-forward" md="ios-arrow-round-forward"></ion-icon>\n          </button>\n        </div>\n\n      </div>\n    </div>\n  </ion-slide>\n  <ion-slide id="slide3" class="gradient-bg" padding>\n    <div class="content">\n      <ion-icon class="n-icon n-icon1" name="ios-call"></ion-icon>\n      <h3>YOUR PHONE NUMBER?</h3>\n      <div class="order-modal">\n\n          <ion-item class="n-select">\n            <ion-select [(ngModel)]="code">\n              <ion-option *ngFor="let code of codes" [value]="code.code">{{code.name}}</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>{{code}}</ion-label>\n            <ion-input type="number" name="number" [(ngModel)]="number"></ion-input>\n          </ion-item>\n\n          <div padding>\n            <button (click)="next(\'3\')" color="light" icon-right ion-button block outline round>\n              NEXT\n              <ion-icon ios="ios-arrow-round-forward" md="ios-arrow-round-forward"></ion-icon>\n            </button>\n          </div>\n\n      </div>\n    </div>\n  </ion-slide>\n  <ion-slide id="slide4" class="gradient-bg" padding>\n    <div class="content" text-center>\n      <h3>ENTER VERIFICATION CODE</h3>\n      <p class="change"> <span *ngIf="!passed30">1:</span>{{timer}}</p>\n      <div class="order-modal">\n\n          <ion-item>\n            <ion-input type="text" name="code" placeholder="Code" [(ngModel)]="Vcode"></ion-input>\n          </ion-item>\n\n          <div padding>\n            <button (click)="SubmitCode()" color="light" ion-button block outline round>\n              VERIFY\n            </button>\n          </div>\n\n          <div padding>\n          <button type="button" class="bold" ion-button block clear color="light" (click)="SwitchNumber();">\n            CHANGE NUMBER\n          </button>\n          </div>\n\n      </div>\n    </div>\n  </ion-slide>\n  <ion-slide id="slide5" class="gradient-bg" padding>\n    <div class="content">\n      <h3>ONE LAST STEP!</h3>\n      <div class="order-modal">\n\n          <ion-item>\n            <ion-input type="email" name="email" placeholder="Email" [(ngModel)]="email"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="password" name="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="password" name="password" placeholder="Repeat Password" [(ngModel)]="password2"></ion-input>\n          </ion-item>\n\n          <div padding>\n            <button (click)="Submit()" color="light" ion-button block outline round>\n              DONE\n            </button>\n          </div>\n\n      </div>\n    </div>\n  </ion-slide>\n\n</ion-slides>\n'/*ion-inline-end:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_4__providers_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_3__providers_country_code__["a" /* CountryCode */]])
    ], SignupPage);
    return SignupPage;
}(__WEBPACK_IMPORTED_MODULE_2__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=3.js.map