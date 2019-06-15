webpackJsonp([21],{

/***/ 1049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContactPageModule", function() { return EditContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_contact__ = __webpack_require__(1074);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditContactPageModule = /** @class */ (function () {
    function EditContactPageModule() {
    }
    EditContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_contact__["a" /* EditContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_contact__["a" /* EditContactPage */]),
            ],
        })
    ], EditContactPageModule);
    return EditContactPageModule;
}());

//# sourceMappingURL=edit-contact.module.js.map

/***/ }),

/***/ 1074:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_page_base_page__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
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





var EditContactPage = /** @class */ (function (_super) {
    __extends(EditContactPage, _super);
    function EditContactPage(injector, user) {
        var _this = _super.call(this, injector) || this;
        _this.user = user;
        _this.number = '';
        _this.number2 = '';
        _this.email = '';
        _this.Vcode = '';
        _this.passed30 = false;
        _this.timer = 300000;
        _this.init = true;
        _this.id = '';
        _this.email = _this.user.getUserInfo().email;
        _this.number = _this.user.getUserInfo().phone;
        _this.callback = _this.NavParams('callback');
        _this.firebase_CurrentScreen('Edit User Contact Screen');
        return _this;
    }
    EditContactPage.prototype.ionViewDidLoad = function () {
        this.slides.lockSwipes(true);
    };
    EditContactPage.prototype.Submit = function () {
        var _this = this;
        if (this.number === '' || !this.number || this.number.length < 9 || this.number.length > 14) {
            this.showToast('Please enter a valid phone number');
            return;
        }
        if (this.email === '' || !this.email) {
            this.showToast('Please enter a valid email address');
            return;
        }
        var d = {
            init: this.init,
            id: this.user.getUserInfo()._id,
            old_number: this.user.getUserInfo().phone,
            old_email: this.user.getUserInfo().email,
            token: this.user.getUserInfo().token,
            email: this.email,
            number: this.number,
            number2: this.number2,
        };
        if (d.number === d.old_number && d.email === d.old_email) {
            var res = { data: d };
            this.callback(res).then(function () {
                _this.goBack();
            });
            return;
        }
        this.showLoadingView('ec');
        window.localStorage.setItem('number', this.number);
        this.user.EditContacts(d).subscribe(function (data) {
            if (data.success) {
                _this.showContentView();
                if (d.old_number === d.number) {
                    _this.showToast('You\'ve successfully updated your contacts');
                    var res = { data: data };
                    _this.callback(res).then(function () {
                        _this.goBack();
                    });
                }
                else {
                    _this.id = data.id;
                    _this.timer = 30;
                    _this.mySubscription = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].interval(1000).map(function () { }).subscribe(function () {
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
            }
            else {
                _this.showToast(data.message);
            }
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
    };
    EditContactPage.prototype.SubmitCode = function () {
        var _this = this;
        var data = {
            phone: this.number,
            code: this.Vcode,
            id: this.id,
            token: this.user.getUserInfo().token,
            type: 'local'
        };
        this.showLoadingView('ec2');
        this.user.ChangeNumber(data).subscribe(function (data) {
            if (data.success) {
                _this.showContentView();
                _this.mySubscription.unsubscribe();
                window.localStorage.setItem('token', JSON.stringify(data.access_token));
                window.localStorage.setItem('user', JSON.stringify(data.user));
                window.localStorage.setItem('type', JSON.stringify(data.type));
                _this.showToast('You\'ve successfully updated your contacts');
                var res = { data: data };
                _this.callback(res).then(function () {
                    _this.goBack();
                });
            }
            else {
                _this.showErrorView();
                _this.showToast(data.msg);
            }
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
    };
    EditContactPage.prototype.SwitchNumber = function () {
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
    ], EditContactPage.prototype, "slides", void 0);
    EditContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-contact',template:/*ion-inline-start:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/edit-contact/edit-contact.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <ion-title>Edit Contact Info</ion-title>\n    <ion-buttons end>\n      <button ion-button="" clear (click)="dismiss()" icon-only="">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n<ion-slides>\n  <ion-slide id="slide5" padding="" class="slide-w">\n    <div class="content">\n      <h3>CONTACT INFO</h3>\n      <div class="order-modal">\n\n          <ion-item>\n            <ion-input type="email" name="email" placeholder="Email" [(ngModel)]="email"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input placeholder="Number" type="text" name="number" [(ngModel)]="number"></ion-input>\n          </ion-item>\n\n          <div padding>\n            <button ion-button color="primary" class="navBtn" (click)="Submit()" block round>SUBMIT</button>\n          </div>\n      </div>\n    </div>\n  </ion-slide>\n  <ion-slide id="slide4" padding text-center class="slide-w">\n    <div class="content">\n      <h3>ENTER VERIFICATION CODE</h3>\n      <p class="change"> <span *ngIf="!passed30">1:</span>{{timer}}</p>\n      <div class="order-modal">\n\n          <ion-item>\n            <ion-input type="text" name="code" placeholder="Code" [(ngModel)]="Vcode"></ion-input>\n          </ion-item>\n\n          <div padding>\n            <button ion-button color="light" (click)="SubmitCode()" block round>VERIFY</button>\n          </div>\n\n        <div padding>\n          <button type="button" class="bold" ion-button block clear color="primary" (click)="SwitchNumber();">\n            CHANGE NUMBER\n          </button>\n        </div>\n\n      </div>\n    </div>\n  </ion-slide>\n\n\n</ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/edit-contact/edit-contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* User */]])
    ], EditContactPage);
    return EditContactPage;
}(__WEBPACK_IMPORTED_MODULE_2__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=edit-contact.js.map

/***/ })

});
//# sourceMappingURL=21.js.map