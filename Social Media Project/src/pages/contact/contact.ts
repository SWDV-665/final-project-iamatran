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

  removeItem(item, index) {
    console.log("Removing Item - ", item, index);
    const toast = this.toastCtrl.create({
        message: "Removing Item - " + item.name + " ..." ,
        duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index);
  }

  editItem(item, index) {
    console.log("Editinging Item - ", item, index);
    const toast = this.toastCtrl.create({
        message: "Editing Item - " + item.name + " ..." ,
        duration: 3000
    });
    toast.present();
    this.showEditItemPrompt(item, index);

  }



  addItem() {
    console.log('meow');
    this.showAddItemPrompt();
  }


  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.dataService.addItem(item);
          }
        }
      ]
    });
    prompt.present();
  }


  showEditItemPrompt(item, index) {
    const prompt = this.alertCtrl.create({
      title: 'Edit Item',
      message: "Please edit item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item.name
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item.quantity
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            //this.items.push(item);
            this.dataService.editItem(item, index);


          }
        }
      ]
    });
    prompt.present();
  }



}





