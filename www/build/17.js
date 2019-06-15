webpackJsonp([17],{

/***/ 1052:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProInfoPageModule", function() { return EditProInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_pro_info__ = __webpack_require__(1077);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProInfoPageModule = /** @class */ (function () {
    function EditProInfoPageModule() {
    }
    EditProInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_pro_info__["a" /* EditProInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_pro_info__["a" /* EditProInfoPage */]),
            ],
        })
    ], EditProInfoPageModule);
    return EditProInfoPageModule;
}());

//# sourceMappingURL=edit-pro-info.module.js.map

/***/ }),

/***/ 1077:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(611);
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




var EditProInfoPage = /** @class */ (function (_super) {
    __extends(EditProInfoPage, _super);
    function EditProInfoPage(injector, zone, user) {
        var _this = _super.call(this, injector) || this;
        _this.zone = zone;
        _this.user = user;
        _this.location = {};
        _this.provider = _this.user.getUserInfo();
        _this.provider.id = _this.user.getUserInfo()._id;
        console.log(_this.provider);
        _this.callback = _this.NavParams("callback");
        return _this;
    }
    EditProInfoPage.prototype.ionViewDidLoad = function () {
        this.firebase_CurrentScreen('Edit Service Provider Information Screen');
        this.location.lat = parseFloat(this.user.getUserInfo().latitude);
        this.location.lng = parseFloat(this.user.getUserInfo().longitude);
        if (typeof google == 'undefined' || typeof google.maps == 'undefined') {
            this.loadGoogleMaps();
        }
        else {
            this.initMap();
        }
    };
    EditProInfoPage.prototype.loadGoogleMaps = function () {
        var _this = this;
        window['mapInit'] = function () {
            _this.initMap();
        };
        var apiKey = __WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* AppConfig */].GOOGLE_MAPS_API_KEY;
        var script = document.createElement('script');
        script.id = 'googleMaps';
        script.src = "https://maps.google.com/maps/api/js?key=" + apiKey + "&callback=mapInit";
        document.body.appendChild(script);
    };
    EditProInfoPage.prototype.initMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var mapOptions;
            return __generator(this, function (_a) {
                mapOptions = {
                    zoom: 0,
                    center: { lat: this.location.lat, lng: this.location.lng },
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
                this.marker = new google.maps.Marker({
                    icon: {
                        url: './assets/imgs/pin.png',
                        scaledSize: new google.maps.Size(32, 32),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(0, 0)
                    },
                    position: {
                        lat: this.location.lat,
                        lng: this.location.lng
                    },
                    draggable: true,
                    map: this.map,
                });
                this.map.panTo(this.location);
                this.map.setZoom(15);
                this.marker.addListener('dragend', function (event) {
                    _this.provider.latitude = event.latLng.lat();
                    _this.provider.longitude = event.latLng.lng();
                });
                return [2 /*return*/];
            });
        });
    };
    EditProInfoPage.prototype.SubmitForm = function () {
        var _this = this;
        if (this.provider.name === "" || !this.provider.name
            || this.provider.title === "" || !this.provider.title
            || this.provider.description === "" || !this.provider.description) {
            this.showToast('Please fill the form data');
            return;
        }
        this.showLoadingView('e-p-i');
        this.user.editProInfo(this.provider).subscribe(function (data) {
            _this.showContentView();
            _this.showToast('You\'ve successfully updated your personal info');
            var res = { data: data.professional };
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditProInfoPage.prototype, "mapElement", void 0);
    EditProInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-pro-info',template:/*ion-inline-start:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/edit-pro-info/edit-pro-info.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <ion-title>Edit Personal Info</ion-title>\n    <ion-buttons end>\n      <button ion-button="" clear (click)="dismiss()" icon-only="">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n    <div class="content">\n\n        <ion-item>\n          <ion-label stacked color="primary">Full name</ion-label>\n          <ion-input type="text" name="name" [(ngModel)]="provider.name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked color="primary">Job Title</ion-label>\n          <ion-input type="text" name="title" [(ngModel)]="provider.title"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label stacked color="primary">Address</ion-label>\n          <ion-input type="text" name="description" [(ngModel)]="provider.description"></ion-input>\n        </ion-item>\n\n        <div>\n          <div #map class="map" id="map"></div>\n        </div>\n\n        <div padding="">\n          <button ion-button color="primary" (click)="SubmitForm()" block round>SUBMIT</button>\n        </div>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/edit-pro-info/edit-pro-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* User */]])
    ], EditProInfoPage);
    return EditProInfoPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=edit-pro-info.js.map

/***/ })

});
//# sourceMappingURL=17.js.map