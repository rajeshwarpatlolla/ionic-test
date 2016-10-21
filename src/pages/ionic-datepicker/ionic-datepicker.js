"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var IonicDatepicker = (function () {
    function IonicDatepicker(viewCtrl) {
        this.viewCtrl = viewCtrl;
        console.log('IonicDatepickerg Constructor');
        this.selectedDate = new Date();
        this.weeks = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
        this.dayList = [];
        this.rows = [0, 7, 14, 21, 28, 35];
        this.cols = [0, 1, 2, 3, 4, 5, 6];
        var currentDate = new Date();
        var firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDate();
        var lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        for (var i = firstDay; i <= lastDay; i++) {
            var tempDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            this.dayList.push({
                date: tempDate.getDate(),
                month: tempDate.getMonth(),
                year: tempDate.getFullYear(),
                day: tempDate.getDay(),
                epoch: tempDate.getTime()
            });
        }
        firstDay = this.dayList[0].day;
        for (var j = 0; j < firstDay; j++) {
            this.dayList.unshift({});
        }
    }
    IonicDatepicker.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    IonicDatepicker.prototype.dateClicked = function (dateObj) {
        console.log('dateClicked', dateObj);
        this.selectedDate = new Date(dateObj.epoch);
    };
    IonicDatepicker.prototype.refreshDateList = function () {
    };
    IonicDatepicker.prototype.prevMonth = function () {
        console.log('prevMonth');
    };
    IonicDatepicker.prototype.nextMonth = function () {
        console.log('nextMonth');
    };
    IonicDatepicker = __decorate([
        core_1.Component({
            templateUrl: 'ionic-datepicker.html'
        })
    ], IonicDatepicker);
    return IonicDatepicker;
}());
exports.IonicDatepicker = IonicDatepicker;
