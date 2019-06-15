webpackJsonp([20],{

/***/ 1050:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInfoPageModule", function() { return EditInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_info__ = __webpack_require__(1075);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditInfoPageModule = /** @class */ (function () {
    function EditInfoPageModule() {
    }
    EditInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_info__["a" /* EditInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_info__["a" /* EditInfoPage */]),
            ],
        })
    ], EditInfoPageModule);
    return EditInfoPageModule;
}());

//# sourceMappingURL=edit-info.module.js.map

/***/ }),

/***/ 1075:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditInfoPage; });
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




var EditInfoPage = /** @class */ (function (_super) {
    __extends(EditInfoPage, _super);
    function EditInfoPage(injector, user) {
        var _this = _super.call(this, injector) || this;
        _this.user = user;
        _this.username = "";
        _this.username = _this.user.getUserInfo().username;
        _this.callback = _this.NavParams("callback");
        return _this;
    }
    EditInfoPage.prototype.ionViewDidLoad = function () {
        this.slides.lockSwipes(true);
        this.firebase_CurrentScreen('Edit User Information Screen');
    };
    EditInfoPage.prototype.SubmitForm = function () {
        var _this = this;
        if (this.username === "" || !this.username) {
            this.showToast('Please fill the form data');
            return;
        }
        var data = {
            username: this.username,
            avatar: this.user.getUserInfo().avatar,
            id: this.user.getUserInfo()._id,
            token: this.user.getUserInfo().token
        };
        this.showLoadingView('ei');
        this.user.editInfo(data).subscribe(function (data) {
            _this.showContentView();
            _this.showToast('You\'ve successfully updated your personal info');
            var res = { data: data };
            _this.callback(res).then(function () {
                _this.goBack();
            });
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
    ], EditInfoPage.prototype, "slides", void 0);
    EditInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-info',template:/*ion-inline-start:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/edit-info/edit-info.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <ion-title>Edit Personal Info</ion-title>\n    <ion-buttons end>\n      <button ion-button="" clear (click)="dismiss()" icon-only="">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n<ion-slides>\n  <ion-slide id="slide5" padding="" class="slide-w">\n    <div class="content">\n      <h3>USERNAME</h3>\n      <form novalidate class="order-modal">\n\n          <ion-item>\n            <ion-input type="text" name="username" placeholder="Username" [(ngModel)]="username"></ion-input>\n          </ion-item>\n\n          <div padding>\n            <button ion-button color="primary" (click)="SubmitForm()" block round>SUBMIT</button>\n          </div>\n\n      </form>\n    </div>\n  </ion-slide>\n</ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/edit-info/edit-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* User */]])
    ], EditInfoPage);
    return EditInfoPage;
}(__WEBPACK_IMPORTED_MODULE_2__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=edit-info.js.map

/***/ })

});
//# sourceMappingURL=20.js.map