webpackJsonp([22],{

/***/ 1047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar__ = __webpack_require__(1072);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(607);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CalendarPageModule = /** @class */ (function () {
    function CalendarPageModule() {
    }
    CalendarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__calendar__["a" /* CalendarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__calendar__["a" /* CalendarPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
            ],
        })
    ], CalendarPageModule);
    return CalendarPageModule;
}());

//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ 1072:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_page_base_page__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
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





var CalendarPage = /** @class */ (function (_super) {
    __extends(CalendarPage, _super);
    function CalendarPage(injector, user, sp) {
        var _this = _super.call(this, injector) || this;
        _this.user = user;
        _this.sp = sp;
        _this.slots = [];
        _this.date = new Date();
        _this.time = null;
        _this.eventList = [];
        _this.service = _this.NavParams('service');
        _this.category = _this.NavParams('category');
        _this.provider = _this.NavParams('provider');
        _this.slots = [
            { time: '08:00 am', selected: false }, { time: '09:00 am', selected: false }, { time: '10:00 am', selected: false }, { time: '11:00 am', selected: false }, { time: '12:00 am', selected: false }, { time: '01:00 pm', selected: false },
            { time: '02:00 pm', selected: false }, { time: '03:00 pm', selected: false }, { time: '04:00 pm', selected: false }, { time: '05:00 pm', selected: false }, { time: '06:00 pm', selected: false }, { time: '07:00 pm', selected: false }, { time: '08:00 pm', selected: false }
        ];
        _this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        _this.getDaysOfMonth();
        _this.dateSelected({ day: _this.currentDate, selected: false });
        _this.firebase_CurrentScreen('Calendar Screen');
        return _this;
    }
    CalendarPage.prototype.selectDate = function (day) {
        var _this = this;
        this.isSelected = false;
        this.selectedEvent = [];
        var thisDate1 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day.day + " 00:00:00";
        var thisDate2 = this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day.day + " 23:59:59";
        if (this.eventList.length > 0) {
            this.eventList.forEach(function (event) {
                if (((event.startDate >= thisDate1) && (event.startDate <= thisDate2)) || ((event.endDate >= thisDate1) && (event.endDate <= thisDate2))) {
                    _this.isSelected = true;
                    _this.selectedEvent.push(event);
                }
            });
        }
        for (var _i = 0, _a = this.daysInThisMonth; _i < _a.length; _i++) {
            var days = _a[_i];
            days.selected = false;
        }
        day.selected = true;
    };
    CalendarPage.prototype.SelectTime = function (slot) {
        for (var _i = 0, _a = this.slots; _i < _a.length; _i++) {
            var s = _a[_i];
            s.selected = slot.time === s.time;
        }
        this.time = slot.time;
    };
    CalendarPage.prototype.dateSelected = function (day) {
        this.thisDate = new Date(this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day.day);
        this.selectedDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.thisDate).format('dddd MMMM Do, YYYY');
    };
    CalendarPage.prototype.getDaysOfMonth = function () {
        this.daysInThisMonth = [];
        this.daysInLastMonth = [];
        this.daysInNextMonth = [];
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push({ selected: false, day: i });
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (var i = 0; i < thisNumOfDays; i++) {
            this.daysInThisMonth.push({ selected: false, day: i + 1 });
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        // let nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
        for (var i = 0; i < (6 - lastDayThisMonth); i++) {
            this.daysInNextMonth.push(i + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (var i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
                this.daysInNextMonth.push({ selected: false, day: i });
            }
        }
    };
    CalendarPage.prototype.goToLastMonth = function (day) {
        var _this = this;
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.getDaysOfMonth();
        if (day) {
            setTimeout(function () {
                for (var _i = 0, _a = _this.daysInThisMonth; _i < _a.length; _i++) {
                    var days = _a[_i];
                    days.selected = days.day === day.day;
                }
            }, 100);
        }
    };
    CalendarPage.prototype.goToNextMonth = function (day) {
        var _this = this;
        console.log(day);
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        this.getDaysOfMonth();
        if (day) {
            setTimeout(function () {
                for (var _i = 0, _a = _this.daysInThisMonth; _i < _a.length; _i++) {
                    var days = _a[_i];
                    days.selected = days.day === day.day;
                }
            }, 100);
        }
    };
    CalendarPage.prototype.Submit = function () {
        if (!this.time) {
            return this.showToast('Choose a time slot');
        }
        if (!this.quantity || this.quantity < 1) {
            return this.showToast('Enter a valid number of people');
        }
        var current = new Date();
        var t = __WEBPACK_IMPORTED_MODULE_4_moment__(current).format('h:mm a');
        var z = t.split(" ");
        var ch = t.split(":");
        var hrs;
        hrs = parseInt(ch[0]);
        if (z[1] === 'PM') {
            hrs = 12 + parseInt(ch[0]);
        }
        var mm = hrs * 60;
        var cm = parseInt(ch[1]);
        var ct = mm + cm;
        //SELECTED TIME
        var sz = this.time.split(" ");
        var sh = this.time.split(":");
        var shrs;
        shrs = parseInt(sh[0]);
        if (sz[1] === 'pm') {
            shrs = 12 + parseInt(sh[0]);
        }
        var smm = shrs * 60;
        var sm = parseInt(sh[1]);
        var st = smm + sm;
        //
        console.log(st, ct);
        var cur = __WEBPACK_IMPORTED_MODULE_4_moment__(current).format('dddd MMMM Do, YYYY');
        var sel = __WEBPACK_IMPORTED_MODULE_4_moment__(this.thisDate).format('dddd MMMM Do, YYYY');
        if (cur === sel) {
            if ((st <= ct) || ((st - ct) < 30)) {
                this.showToast("This time slot has expired");
            }
            else {
                this.Booked(this.time, this.thisDate, this.service, this.category);
            }
        }
        else if (current > this.thisDate) {
            this.showToast("This time slot has expired");
        }
        else {
            this.Booked(this.time, this.thisDate, this.service, this.category);
        }
    };
    CalendarPage.prototype.Booked = function (time, date, service, category) {
        var b = { time: time, date: date, service: service, category: category, fulldate: this.selectedDate, provider: this.provider, quantity: this.quantity };
        this.openPage("ConfirmPage", { booked: b });
    };
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calendar',template:/*ion-inline-start:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/calendar/calendar.html"*/'<ion-header no-border>\n  <ion-navbar color="primary">\n    <ion-title *ngIf="service?.title">{{service?.title}}</ion-title>\n    <ion-buttons end>\n      <button ion-button="" clear (click)="dismiss()" icon-only="">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="gradient-bg calendar-container">\n    <div class="calendar-header">\n      <ion-row class="calendar-month">\n        <ion-col col-2 (click)="goToLastMonth(null)"><ion-icon name="arrow-back"></ion-icon></ion-col>\n        <ion-col col-8>{{currentMonth}} {{currentYear}}</ion-col>\n        <ion-col col-2 (click)="goToNextMonth(null)"><ion-icon name="arrow-forward"></ion-icon></ion-col>\n      </ion-row>\n    </div>\n    <div class="calendar-body">\n      <ion-grid>\n        <ion-row class="calendar-weekday">\n          <ion-col>Su</ion-col>\n          <ion-col>Mo</ion-col>\n          <ion-col>Tu</ion-col>\n          <ion-col>We</ion-col>\n          <ion-col>Th</ion-col>\n          <ion-col>Fr</ion-col>\n          <ion-col>Sa</ion-col>\n        </ion-row>\n        <ion-row class="calendar-date">\n          <ion-col col-1 *ngFor="let lastDay of daysInLastMonth;" class="last-month" (click)="goToLastMonth(lastDay);dateSelected(lastDay)">\n            <span [ngClass]="{\'selected-date\': lastDay.selected}">{{lastDay.day}}</span>\n          </ion-col>\n          <ion-col col-1 *ngFor="let day of daysInThisMonth" (click)="selectDate(day);dateSelected(day)">\n            <span class="currentDate" *ngIf="currentDate === day.day; else otherDate">{{day.day}}</span>\n            <ng-template #otherDate class="otherDate">\n              <span [ngClass]="{\'selected-date\': day.selected}">{{day.day}}</span><br>\n              <!--<div class="event-bullet" *ngIf="checkEvent(day)"></div>-->\n            </ng-template>\n          </ion-col>\n          <ion-col col-1 *ngFor="let nextDay of daysInNextMonth" class="next-month" (click)="goToNextMonth(nextDay);dateSelected(nextDay)">\n            <span [ngClass]="{\'selected-date\': nextDay.selected}">{{nextDay.day}}</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n  <section class="content">\n    <div class="heading">\n      <h2 class="date_">{{selectedDate}}</h2>\n    </div>\n  </section>\n\n  <hr *ngIf="provider">\n\n  <section class="content" *ngIf="provider">\n    <div class="heading">\n      <div>\n        <h2>{{provider?.name}}</h2>\n        <p>{{provider?.title}}</p>\n      </div>\n    </div>\n  </section>\n\n  <hr>\n\n  <section class="content">\n    <div class="heading">\n      <p>Choose Time</p>\n    </div>\n  </section>\n  <ion-scroll scrollX="true" direction="x" style="height: 80px">\n    <ion-row nowrap align-items-center margin-horizontal>\n      <ion-col col-auto float-left *ngFor="let slot of slots">\n        <button round ion-button [ngClass]="{\'gradient-bg\':slot.selected,\'outline\':!slot.selected}" (click)="SelectTime(slot)" style="margin-bottom: 15px;">{{slot.time}}</button>\n      </ion-col>\n    </ion-row>\n  </ion-scroll>\n\n  <hr>\n  <section class="content">\n    <div class="heading">\n      <p>Number of People</p>\n    </div>\n    <ion-item>\n      <ion-input placeholder="eg. 1 if booking for one person" type="number" name="quantity" [(ngModel)]="quantity" ></ion-input>\n    </ion-item>\n  </section>\n\n  <div padding>\n    <button (click)="Submit()" ion-button block round color="primary">Continue</button>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/tman/Documents/Hybrid/ionic/spekapp/src/pages/calendar/calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services__["a" /* ServicesProvider */]])
    ], CalendarPage);
    return CalendarPage;
}(__WEBPACK_IMPORTED_MODULE_1__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=calendar.js.map

/***/ })

});
//# sourceMappingURL=22.js.map