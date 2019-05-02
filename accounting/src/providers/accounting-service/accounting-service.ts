import { Injectable } from '@angular/core';
import { ItemSliding } from 'ionic-angular';

/*
  Generated class for the AccountingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccountingServiceProvider {

  items = [
    {
        name: "Milk",
        quantity: 2
    },
    {
        name: "Bread",
        quantity: 1
    },
    {
        name: "Banana",
        quantity: 3
    },
    {
        name: "Sugar",
        quantity: 1
    },

  ];





  constructor() {
    console.log('Hello AccountingServiceProvider Provider');

  }


  getItems() {
    return this.items;
  }


  removeItem(index) {
    this.items.splice(index, 1);

  }

  addItem(item) {
    this.items.push(item);
  }

  editItem(item, index) {
    this.items[index] = item;
  }






}
