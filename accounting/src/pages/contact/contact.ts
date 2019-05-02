import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AccountingServiceProvider } from '../../providers/accounting-service/accounting-service';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {


  title = "Grocery";




  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: AccountingServiceProvider) {

  }

  loadItems() {
    return this.dataService.getItems();
  }


}
