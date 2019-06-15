webpackJsonp([23],{

/***/ 1046:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildProfilePageModule", function() { return BuildProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__build_profile__ = __webpack_require__(1071);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuildProfilePageModule = /** @class */ (function () {
    function BuildProfilePageModule() {
    }
    BuildProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__build_profile__["a" /* BuildProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__build_profile__["a" /* BuildProfilePage */]),
            ],
        })
    ], BuildProfilePageModule);
    return BuildProfilePageModule;
}());

//# sourceMappingURL=build-profile.module.js.map

/***/ }),

/***/ 1071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_country_code__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_page_base_page__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
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






var BuildProfilePage = /** @class */ (function (_super) {
    __extends(BuildProfilePage, _super);
    function BuildProfilePage(injector, user, countryCode) {
        var _this = _super.call(this, injector) || this;
        _this.user = user;
        _this.countryCode = countryCode;
        _this.code = "+233";
        _this.number = '';
        _this.number2 = '';
        _this.email = '';
        _this.Vcode = '';
        _this.passed30 = false;
        _this.timer = 300000;
        _this.init = true;
        _this.id = '';
        _this.profile = _this.NavParams('profile');
        return _this;
    }
    BuildProfilePage.prototype.ionViewDidLoad = function () {
        this.firebase_CurrentScreen('Build Profile Screen');
        this.slides.lockSwipes(true);
        this.codes = this.countryCode.getCodes().countries;
    };
    BuildProfilePage.prototype.Submit = function () {
        var _this = this;
        if (this.number === '' || this.number.length < 9 || this.number.length > 10) {
            this.showToast('Please enter a valid phone number');
            return;
        }
        if (this.profile.email === "") {
            if (this.email === '' || !this.email) {
                this.showToast('Please enter a valid email address');
                return;
            }
        }
        else {
            this.email = this.profile.email;
        }
        for (var _i = 0, _a = this.codes; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.code === this.code) {
                this.country = c;
            }
        }
        this.showLoadingView('build-profile');
        if (this.number.length === 10 && this.number.substr(0, 1) === '0') {
            this.number = this.number.substr(1, 10);
        }
        var data = {
            init: this.init,
            id: this.profile._id,
            profile: this.profile,
            email: this.email,
            number: this.number,
            number2: this.number2,
            country: this.country
        };
        window.localStorage.setItem('number', this.number);
        this.user.SaveFUser(data).subscribe(function (data) {
            if (data.success) {
                _this.showContentView();
                _this.id = data.id;
                _this.timer = 30;
                _this.mySubscription = __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].interval(1000).map(function () { }).subscribe(function () {
                    _this.timer = _this.timer - 1;
                    console.log(_this.timer);
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
                _this.showErrorView();
                _this.showToast(data.msg);
            }
        }, function (error) {
            console.log(error);
            _this.showErrorView();
            _this.showToast(error.message);
        });
    };
    BuildProfilePage.prototype.SubmitCode = function () {
        var _this = this;
        var data = {
            phone: this.country.code + "" + this.number,
            code: this.Vcode,
            id: this.id,
            type: 'facebook'
        };
        this.showLoadingView('build-profile2');
        this.user.Verify(data).subscribe(function (data) {
            if (data.success) {
                _this.showContentView();
                window.localStorage.setItem('token', JSON.stringify(data.access_token));
                window.localStorage.setItem('user', JSON.stringify(data.user));
                window.localStorage.setItem('type', JSON.stringify(data.type));
                _this.GoTo("HomePage");
            }
            else {
                _this.showErrorView();
                _this.showToast(data.msg);
            }
        }, function (error) {
            console.log(error);
            _this.showErrorView();
            _this.showToast(error.message);
        });
    };
    BuildProfilePage.prototype.SwitchNumber = function () {
        this.mySubscription.unsubscribe();
        this.init = false;
        this.number2 = window.localStorage.getItem('number');
        this.slides.lockSwipes(false);
        this.slides.slideTo(0, 500);
        this.slides.lockSwipeToNext(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Slides */])
    ], BuildProfilePage.prototype, "slides", void 0);
    BuildProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-build-profile',template:/*ion-inline-start:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/build-profile/build-profile.html"*/'<ion-slides pager>\n  <ion-slide id="slide5" class="slide-w">\n    <div class="content">\n      <h3>Hello, {{profile.username}}!</h3>\n      <p *ngIf="profile.phone === \'0000000000\' && profile.email !== \'\'">ENTER YOUR PHONE NUMBER</p>\n      <p *ngIf="profile.email === \'\' && profile.phone === \'0000000000\'">ENTER YOUR EMAIL AND PHONE NUMBER</p>\n      <div class="order-modal">\n        <ion-list>\n          <ion-item *ngIf="profile.email === \'\'">\n            <ion-input type="email" name="email" placeholder="Email" [(ngModel)]="email"></ion-input>\n          </ion-item>\n          <ion-item *ngIf="profile.phone === \'0000000000\'" class="n-select">\n            <ion-select [(ngModel)]="code">\n              <ion-option *ngFor="let code of codes" [value]="code.code">{{code.name}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item *ngIf="profile.phone === \'0000000000\'">\n            <ion-label>{{code}}</ion-label>\n            <ion-input type="number" name="number" [(ngModel)]="number"></ion-input>\n          </ion-item>\n          <ion-item class="button-cl">\n            <button ion-button color="light" class="navBtn" (click)="Submit()" block round>SUBMIT</button>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n  </ion-slide>\n  <ion-slide id="slide4" class="slide-p">\n    <div class="content">\n      <h3>ENTER VERIFICATION CODE</h3>\n      <p class="change"> <span *ngIf="!passed30">1:</span>{{timer}}</p>\n      <div class="order-modal">\n        <ion-list>\n          <ion-item>\n            <ion-input type="text" name="code" placeholder="Code" [(ngModel)]="Vcode"></ion-input>\n          </ion-item>\n          <ion-item class="button-cl">\n            <button ion-button color="light" class="navBtn" (click)="SubmitCode()" block round>VERIFY</button>\n          </ion-item>\n          <ion-item class="button-cl">\n            <p class="change" (click)="SwitchNumber();">CHANGE NUMBER</p>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n  </ion-slide>\n\n\n</ion-slides>\n'/*ion-inline-end:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/build-profile/build-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_2__providers_country_code__["a" /* CountryCode */]])
    ], BuildProfilePage);
    return BuildProfilePage;
}(__WEBPACK_IMPORTED_MODULE_4__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=build-profile.js.map

/***/ })

});
//# sourceMappingURL=23.js.map