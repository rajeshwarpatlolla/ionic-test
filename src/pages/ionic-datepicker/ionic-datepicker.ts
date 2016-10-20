import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'ionic-datepicker.html'
})
export class IonicDatepicker {
  weeks;
  dayList;
  rows;
  cols;
  firstDay;
  selectedDate;

  constructor(public viewCtrl:ViewController) {
    console.log('IonicDatepicker Constructor');
    this.selectedDate = new Date();
    this.weeks = ['M','T', 'W', 'T', 'F', 'S', 'S'];
    this.dayList = [];
    this.rows = [0, 7, 14, 21, 28, 35];
    this.cols = [0, 1, 2, 3, 4, 5, 6];
    
    let currentDate = new Date();
    this.loadDaysList(currentDate);
  }

  loadDaysList(ipDate) {
  let firstDay = new Date(ipDate.getFullYear(), ipDate.getMonth(), 1).getDate();
    let lastDay = new Date(ipDate.getFullYear(), ipDate.getMonth() + 1, 0).getDate();

    for (let i = firstDay; i <= lastDay; i++) {
      let tempDate = new Date(ipDate.getFullYear(), ipDate.getMonth(), i);

      this.dayList.push({
        date: tempDate.getDate(),
        month: tempDate.getMonth(),
        year: tempDate.getFullYear(),
        day: tempDate.getDay(),
        epoch: tempDate.getTime()
      });
    }

    firstDay = this.dayList[0].day;
    console.log('this.dayList', this.dayList);
    
    for (let j = 1; j < firstDay; j++) {
      this.dayList.unshift({});
    }

  } 
  
  dismiss() {
    this.viewCtrl.dismiss();
  }

  dateClicked(dateObj) {
    console.log('dateClicked', dateObj);
    this.selectedDate = new Date(dateObj.epoch);
  }

  refreshDateList() {

  }

  prevMonth() {
    console.log('prevMonth');
  }

  nextMonth() {
    console.log('nextMonth');
  }

}
