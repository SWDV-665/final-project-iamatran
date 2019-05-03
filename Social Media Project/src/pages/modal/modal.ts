import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AccountingServiceProvider } from '../../providers/accounting-service/accounting-service';
import { SocialSharing } from '@ionic-native/social-sharing';


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(private view: ViewController, public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: AccountingServiceProvider, public socialSharing: SocialSharing) {
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

  closeModal(){
    this.view.dismiss();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
