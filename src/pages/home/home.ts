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
    let modal = this.modalCtrl.create(IonicDatepicker);
    modal.present();
  }

}


