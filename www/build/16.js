webpackJsonp([16],{

/***/ 1054:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProPassPageModule", function() { return EditProPassPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_pro_pass__ = __webpack_require__(1079);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProPassPageModule = /** @class */ (function () {
    function EditProPassPageModule() {
    }
    EditProPassPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_pro_pass__["a" /* EditProPassPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_pro_pass__["a" /* EditProPassPage */]),
            ],
        })
    ], EditProPassPageModule);
    return EditProPassPageModule;
}());

//# sourceMappingURL=edit-pro-pass.module.js.map

/***/ }),

/***/ 1079:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_page_base_page__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(32);
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




var EditProPassPage = /** @class */ (function (_super) {
    __extends(EditProPassPage, _super);
    function EditProPassPage(injector, user) {
        var _this = _super.call(this, injector) || this;
        _this.user = user;
        _this.pass = "";
        _this.pass1 = "";
        _this.pass2 = "";
        _this.callback = _this.NavParams("callback");
        return _this;
    }
    EditProPassPage.prototype.ionViewDidLoad = function () {
        this.slides.lockSwipes(true);
        this.firebase_CurrentScreen('Edit Service Provider Password Screen');
    };
    EditProPassPage.prototype.SubmitForm = function () {
        var _this = this;
        if (this.pass === "" || !this.pass
            || this.pass1 === "" || !this.pass1
            || this.pass2 === "" || !this.pass2) {
            this.showToast('Please fill the form data');
            return;
        }
        if (this.pass1 !== this.pass2) {
            this.showToast('Passwords do not match');
        }
        var data = {
            pass: this.pass,
            pass1: this.pass1,
            pass2: this.pass2,
            id: this.user.getUserInfo()._id,
            token: this.user.getUserInfo().token
        };
        this.showLoadingView('e-p-p');
        this.user.editProPass(data).subscribe(function (data) {
            if (data.success) {
                _this.showContentView();
                _this.showToast('You\'ve successfully updated your password');
                var res = { data: data };
                _this.callback(res).then(function () {
                    _this.goBack();
                });
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Slides */])
    ], EditProPassPage.prototype, "slides", void 0);
    EditProPassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-pro-pass',template:/*ion-inline-start:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/edit-pro-pass/edit-pro-pass.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <ion-title>Change Password</ion-title>\n    <ion-buttons end>\n      <button ion-button="" clear (click)="dismiss()" icon-only="">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-slides>\n    <ion-slide id="slide5" padding class="slide-w">\n      <div class="content">\n        <h3>CHANGE YOUR PASSWORD HERE</h3>\n        <div class="order-modal">\n\n            <ion-item>\n              <ion-input type="password" name="pass" placeholder="Old Password" [(ngModel)]="pass"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" name="pass1" placeholder="New Password"  [(ngModel)]="pass1"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" name="pass2" placeholder="Repeat New Password"  [(ngModel)]="pass2"></ion-input>\n            </ion-item>\n\n            <div padding>\n              <button ion-button color="primary" (click)="SubmitForm()" block round>SUBMIT</button>\n            </div>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n'/*ion-inline-end:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/edit-pro-pass/edit-pro-pass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* User */]])
    ], EditProPassPage);
    return EditProPassPage;
}(__WEBPACK_IMPORTED_MODULE_2__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=edit-pro-pass.js.map

/***/ })

});
//# sourceMappingURL=16.js.map