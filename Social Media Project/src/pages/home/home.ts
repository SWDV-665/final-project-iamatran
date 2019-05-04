import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AccountingServiceProvider } from '../../providers/accounting-service/accounting-service';
import { ModalController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  title = "Social";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: AccountingServiceProvider, public modal: ModalController, public socialSharing: SocialSharing) {

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

  shareItem(item, index) {
    console.log("Sharing Item - ", item, index);
    const toast = this.toastCtrl.create({
        message: "Shared using Cordova Native Plugin..." ,
        duration: 3000
    });
    toast.present();

    let message = "Social Items - Name: " + item + " - Description:" + item;
    let subject = "Shared via Social Media Ionic App";
    this.socialSharing.share(message, subject).then(() => {
      console.log("Shared using Cordova Native Plugin");
    }).catch((error) => {
      console.error("Received Error while Sharing" , error)
    });

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
          value: 'Tom Holland'
        },
        {
          name: 'date',
          value: 'May 5, 2019'
        },
        {
          name: 'description',
          value: 'Omg, this app is so awesome!!!'
        },
        {
          name: 'modalName',
          value: 'Tom Holland'
        },
        {
          name: 'modalComment',
          value: 'This app is really really great!!!'
        },
        {
          name: 'avatar',
          value: '../../assets/imgs/profile.jpg'
        },
        {
          name: 'modalAvatar',
          value: '../../assets/imgs/profile.jpg'
        }
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
