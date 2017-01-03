import { Component } from '@angular/core';
import { NavController, Platform, AlertController, ModalController } from 'ionic-angular';
import { IonicDatepicker } from '../ionic-datepicker/ionic-datepicker';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name;
  pages;
  constructor(public navCtrl: NavController,
    public platform: Platform,
    public alerCtrl: AlertController,
    public modalCtrl: ModalController) {
    console.log('HomePage constructor');
    this.name = 'abc';
    this.pages = ['one', 'two'];
  }

  submitValue() {
    console.log('this.name ', this.name);
  }

  openAlert() {
    let alert = this.alerCtrl.create({
      title: 'New Friend!',
      message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
      buttons: ['Ok']
    });
    alert.present()
  }

  openModal() {
    let options = { 
      inputDate: new Date(), 
      fromDate: new Date(), 
      toDate: '4/24/2017',
      disabledDates: ['11/29/2016', '11/21/2016', '11/2/2016', '11/18/2016', '11/20/2016'],
      setLabel: 'Set',
      todayLabel: 'Today',
      closeLabel: 'Close',
      mondayFirst: false,
      weeksList: ["S", "M", "T", "W", "T", "F", "S"],
      monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
      dateFormat: 'dd MMMM yyyy',
      showTodayButton: true,
      closeOnSelect: false
    };

    let modal = this.modalCtrl.create(IonicDatepicker, { datepickerConfig: options });
    modal.present();
  }

}


