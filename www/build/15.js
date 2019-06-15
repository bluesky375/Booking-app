webpackJsonp([15],{

/***/ 1055:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProServicePageModule", function() { return EditProServicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_pro_service__ = __webpack_require__(1080);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProServicePageModule = /** @class */ (function () {
    function EditProServicePageModule() {
    }
    EditProServicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_pro_service__["a" /* EditProServicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_pro_service__["a" /* EditProServicePage */]),
            ],
        })
    ], EditProServicePageModule);
    return EditProServicePageModule;
}());

//# sourceMappingURL=edit-pro-service.module.js.map

/***/ }),

/***/ 1080:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_services__ = __webpack_require__(38);
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




var EditProServicePage = /** @class */ (function (_super) {
    __extends(EditProServicePage, _super);
    function EditProServicePage(injector, sp, user) {
        var _this = _super.call(this, injector) || this;
        _this.sp = sp;
        _this.user = user;
        _this.categories = [];
        _this.services = [];
        _this.my_services = [];
        _this.callback = _this.NavParams("callback");
        return _this;
    }
    EditProServicePage.prototype.ionViewDidLoad = function () {
        this.firebase_CurrentScreen('Edit Service Provider Service Screen');
        this.showLoadingView('e-p-i');
        this.provider = this.user.getUserInfo();
        this.loadCategories();
    };
    EditProServicePage.prototype.loadCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sp.getAllServices().subscribe(function (data) {
                            _this.categories = [];
                            if (data.length > 0) {
                                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                                    var c = data_1[_i];
                                    c.selected = false;
                                    for (var _a = 0, _b = _this.provider.services; _a < _b.length; _a++) {
                                        var mc = _b[_a];
                                        if (mc === c._id)
                                            c.selected = true;
                                    }
                                    _this.categories.push(c);
                                }
                                _this.loadServices();
                            }
                            else {
                                _this.showContentView();
                            }
                            _this.onRefreshComplete();
                        }, function (err) {
                            console.log(err);
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
    EditProServicePage.prototype.loadServices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sp.getAllCategories().subscribe(function (data) {
                            _this.services = [];
                            if (data.length > 0) {
                                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                                    var c = data_2[_i];
                                    c.selected = false;
                                    for (var _a = 0, _b = _this.provider.categories; _a < _b.length; _a++) {
                                        var mc = _b[_a];
                                        if (mc === c._id)
                                            c.selected = true;
                                    }
                                    _this.services.push(c);
                                }
                                for (var _c = 0, _d = _this.categories; _c < _d.length; _c++) {
                                    var c = _d[_c];
                                    if (c.selected) {
                                        for (var _e = 0, _f = _this.services; _e < _f.length; _e++) {
                                            var s = _f[_e];
                                            if (s.serviceId === c._id) {
                                                _this.my_services.push(s);
                                            }
                                        }
                                    }
                                }
                                _this.showContentView();
                            }
                            else {
                                _this.showContentView();
                            }
                            _this.onRefreshComplete();
                        }, function (err) {
                            console.log(err);
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
    EditProServicePage.prototype.ClickedCat = function (cat) {
        cat.selected = !cat.selected;
        this.my_services = [];
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.selected) {
                for (var _b = 0, _c = this.services; _b < _c.length; _b++) {
                    var s = _c[_b];
                    if (s.serviceId === c._id)
                        this.my_services.push(s);
                }
            }
            else {
                for (var _d = 0, _e = this.services; _d < _e.length; _d++) {
                    var s = _e[_d];
                    if (s.serviceId === c._id)
                        s.selected = false;
                }
            }
        }
    };
    EditProServicePage.prototype.SubmitForm = function () {
        var _this = this;
        var categories = [];
        var services = [];
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.selected)
                categories.push(c._id);
        }
        for (var _b = 0, _c = this.services; _b < _c.length; _b++) {
            var s = _c[_b];
            if (s.selected)
                services.push(s._id);
        }
        if (categories.length === 0 || services.length === 0) {
            this.showConfirm("Are you sure don't want to choose any service?").then(function () {
                _this.submit(categories, services);
            }).catch(function (err) { return console.log(err); });
        }
        else {
            this.submit(categories, services);
        }
    };
    EditProServicePage.prototype.submit = function (services, categories) {
        var _this = this;
        this.showLoadingView('e-p-i');
        this.provider.services = services;
        this.provider.categories = categories;
        this.provider.id = this.user.getUserInfo()._id;
        this.user.editProInfo(this.provider).subscribe(function (data) {
            _this.showContentView();
            _this.showToast('You\'ve successfully updated your services');
            var res = { data: data.professional, type: 'services', categories: _this.categories, services: _this.services };
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
    EditProServicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-pro-service',template:/*ion-inline-start:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/edit-pro-service/edit-pro-service.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <ion-title>Edit Services</ion-title>\n    <ion-buttons end>\n      <button ion-button="" clear (click)="dismiss()" icon-only="">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <section class="content_" *ngIf="categories.length > 0">\n    <div class="heading_">\n      <h2>Categories</h2>\n    </div>\n\n    <ion-row align-items-center margin-horizontal>\n      <ion-col col-auto float-left *ngFor="let category of categories">\n        <button ion-button round [ngClass]="{\'gradient-bg\':category.selected,\'outline\':!category.selected}"\n                (click)="ClickedCat(category)" style="margin-bottom: 15px;">{{category.name}}</button>\n      </ion-col>\n    </ion-row>\n  </section>\n\n  <section class="content_" *ngIf="my_services.length > 0">\n    <div class="heading_">\n      <h2>Services</h2>\n    </div>\n\n    <ion-row align-items-center margin-horizontal>\n      <ion-col col-auto float-left *ngFor="let service of my_services">\n        <button ion-button round [ngClass]="{\'gradient-bg\':service.selected,\'outline\':!service.selected}"\n                (click)="service.selected = !service.selected" style="margin-bottom: 15px;">{{service.title}}</button>\n      </ion-col>\n    </ion-row>\n  </section>\n\n\n</ion-content>\n\n\n<ion-footer padding>\n  <button color="primary" ion-button block round (click)="SubmitForm()">\n    Save\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/edit-pro-service/edit-pro-service.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_3__providers_services__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* User */]])
    ], EditProServicePage);
    return EditProServicePage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=edit-pro-service.js.map

/***/ })

});
//# sourceMappingURL=15.js.map