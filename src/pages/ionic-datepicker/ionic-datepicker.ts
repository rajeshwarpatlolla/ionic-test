import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'ionic-datepicker.html'
})
export class IonicDatepicker {
  weeks;
  months;
  daysList;
  rows;
  cols;
  firstDay;
  selectedDate;

  constructor(public viewCtrl: ViewController) {
    console.log('IonicDatepicker Constructor');
    this.selectedDate = new Date();
    this.weeks = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.rows = [0, 7, 14, 21, 28, 35];
    this.cols = [0, 1, 2, 3, 4, 5, 6];

    let currentDate = new Date();
    this.loadDaysList(currentDate);
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

    console.log('firstDay', firstDay);
    
    for (let j = 0; j < firstDay; j++) {
      this.daysList.unshift({});
    }
    console.log('this.daysList', this.daysList);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  dateClicked(dateObj) {
    console.log('dateClicked', dateObj);
    this.selectedDate = new Date(dateObj.epoch);
  }

  prevMonth(dateObj) {
    let date = new Date(dateObj.epoch);
    date.setDate(date.getDate() - dateObj.date);
    this.loadDaysList(new Date(date));
  }

  nextMonth(dateObj) {
    let date = new Date(dateObj.epoch)
    date.setDate(date.getDate() + 1);
    this.loadDaysList(new Date(date));
  }

}
