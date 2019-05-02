import { Injectable } from '@angular/core';

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
      date: "March 26, 2019",
      description: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy",
      comments: 4,
      avatar: "../../assets/imgs/marty-avatar.png",
      picture: "../../assets/imgs/advance-card-bttf.png"
    },
    {
      name: "Candy",
      date: "March 26, 2019",
      description: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy",
      comments: 27,
      avatar: "../../assets/imgs/marty-avatar.png",
      picture: "../../assets/imgs/advance-card-bttf.png"
    },


  ];
/*
name:
date:
description:
comments:
avatar:
picture:
*/

/*
commentName:
replyName:
commentReply:
*/



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
