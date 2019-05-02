import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AccountingServiceProvider } from '../../providers/accounting-service/accounting-service';
import { ModalController } from 'ionic-angular';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  title = "Social";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: AccountingServiceProvider, public modal: ModalController) {

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


  addItem() {
    console.log('meow');
    this.showAddItemPrompt();
  }


  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add a new post',
      message: "Please enter your post details...",
      inputs: [
        {
          name: 'name',
          value: 'Name'
        },
        {
          name: 'date',
          value: 'March 26, 2019'
        },
        {
          name: 'description',
          value: 'Omg, this app is so awesome!!!'
        },
        {
          name: 'avatar',
          value: '../../assets/imgs/advance-card-bttf.png'
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

  openModal(){
    const myModal = this.modal.create('ModalPage');
    myModal.present();
    console.log('ionViewDidLoad ModalPage');
  }


}
