import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'ionic-datepicker.html'
})
export class IonicDatepicker {
  weeks;
  months;
  years;
  daysList;
  rows;
  cols;
  firstDay;
  selectedDate;
  selectedMonth;
  selectedYear;
  today;

  constructor(public viewCtrl: ViewController,public params: NavParams) {
    console.log('IonicDatepicker Constructor');
    this.selectedDate = new Date();
    this.weeks = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.years = this.getYearsList();
    this.rows = [0, 7, 14, 21, 28, 35];
    this.cols = [0, 1, 2, 3, 4, 5, 6];
    this.today = this.resetHMSM(new Date());
    let currentDate = new Date();
    this.selectedMonth = this.months[currentDate.getMonth()];
    this.selectedYear = currentDate.getFullYear();
    this.loadDaysList(currentDate);
    console.log(this.params.data.datepickerConfig);
  }

  resetHMSM(currentDate) {
    currentDate.setHours(0);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0);
    return currentDate;
  }

  getYearsList() {
    console.log('getYearsList');
    let yearsList = [];
    for (let year = 1900; year <= 2100; year++) {
      yearsList.push(year);
    }
    return yearsList;
  }

  loadDaysList(ipDate) {
    this.daysList = [];
    let firstDay = new Date(ipDate.getFullYear(), ipDate.getMonth(), 1).getDate();
    let lastDay = new Date(ipDate.getFullYear(), ipDate.getMonth() + 1, 0).getDate();

    for (let i = firstDay; i <= lastDay; i++) {
      let tempDate = new Date(ipDate.getFullYear(), ipDate.getMonth(), i);

      this.daysList.push({
        date: tempDate.getDate(),
        month: tempDate.getMonth(),
        year: tempDate.getFullYear(),
        day: tempDate.getDay(),
        epoch: tempDate.getTime()
      });
    }

    firstDay = this.daysList[0].day;

    for (let j = 0; j < firstDay; j++) {
      this.daysList.unshift({});
    }
  }

  monthSelected(event, selectedMonth) {
    this.selectedMonth = selectedMonth;
    this.selectedDate.setMonth(this.months.indexOf(this.selectedMonth));
    this.selectedDate.setYear(this.selectedYear);
    this.loadDaysList(new Date(this.selectedDate));
  }

  yearSelected(event, selectedYear) {
    this.selectedYear = selectedYear;
    this.selectedDate.setMonth(this.months.indexOf(this.selectedMonth));
    this.selectedDate.setYear(this.selectedYear);
    this.loadDaysList(new Date(this.selectedDate));
  }

  dateClicked(dateObj) {
    console.log('dateClicked', dateObj);
    this.selectedDate = new Date(dateObj.epoch);
  }

  prevMonth(dateObj) {
    let date = new Date(dateObj.epoch);
    date.setDate(date.getDate() - dateObj.date);
    this.selectedMonth = this.months[date.getMonth()];
    this.selectedYear = date.getFullYear();
    this.loadDaysList(new Date(date));
  }

  nextMonth(dateObj) {
    let date = new Date(dateObj.epoch);
    date.setDate(date.getDate() + 1);
    this.selectedMonth = this.months[date.getMonth()];
    this.selectedYear = date.getFullYear();
    this.loadDaysList(new Date(date));
  }

  setDate() {
    console.log('this.selectedDate', this.selectedDate);
    this.dismiss();
  }

  setToday() {
    this.loadDaysList(this.today);
    this.selectedMonth = this.months[this.today.getMonth()];
    this.selectedYear = this.today.getFullYear();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
