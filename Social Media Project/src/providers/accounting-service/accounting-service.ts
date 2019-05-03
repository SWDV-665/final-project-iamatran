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
      name: "Steve Rogers",
      date: "May 3, 2019",
      description: "The film is expected to gross over 2 BILLION DOLLARS before the weekend is over.. INSANE.",
      comments: 27,
      avatar: "../../assets/imgs/a1.jpg",
      picture: "../../assets/imgs/p1.jpg",
      modalName:"Reliant K Swiss",
      modalComment:"It's Chapstick and Chapped Lips and Things Like Chemistry",
      modalAvatar: "../../assets/imgs/ma1.png"
    },
    {
      name: "Jenna Morningstarr",
      date: "March 26, 2019",
      description: "My timeline’s filled with Avengers & GOT vids and memes like thanks, guys but i really miss my cats, dogs, and other funny stuff",
      comments: 6,
      avatar: "../../assets/imgs/a2.jpg",
      picture: "",
      modalName: "Mickey Sousburger",
      modalComment: "Wow, I really can't beleive it's really been that long!",
      modalAvatar: "../../assets/imgs/ma2.jpg"
    },
    {
      name: "This is fine.",
      date: "March 26, 2019",
      description: "This is literally every student studying during finals week:",
      comments: 13,
      avatar: "../../assets/imgs/a3.jpg",
      picture: "../../assets/imgs/p3.jpg",
      modalName: "Noregian Greek",
      modalComment: "Have you seen that one thing where you climb up the mountain only to get swatted down?",
      modalAvatar: "../../assets/imgs/ma3.jpg"
    },
    {
      name: "Compadre Instant",
      date: "January 3, 2019",
      description: "I was there last night. Wow. Amazing women of Birmingham are making a huge difference! #ShopWithLove is where I'm buying all my Chrimbo Pressies!",
      comments: 7,
      avatar: "../../assets/imgs/a4.jpg",
      picture: "",
      modalName: "Nappy Boy Radio",
      modalComment: "Me: I understood that reference Everyone else: ...",
      modalAvatar: "../../assets/imgs/ma4.jpg"
    },
    {
      name: "Oliver Queen",
      date: "March 8, 2019",
      description: "Great film! Will see it again! Only wish, there were more fights with the entire crew back together....possibly chasing Thanos over different worlds and in the daytime to visualise more....as the other Avengers movies were filmed in. That said, thanks and keep up the great work.",
      comments: 2,
      avatar: "../../assets/imgs/a5.jpg",
      picture: "",
      modalName: "Hamster Dash",
      modalComment: "Why hasen't she come yet? The graduation is right around the corner!",
      modalAvatar: "../../assets/imgs/ma5.jpg"
    },
    {
      name: "Beastie Boyz",
      date: "April 11, 2019",
      description: "(That stressed me out, wow) But YES finally seeing my faves Half Moon Run in November!",
      comments: 21,
      avatar: "../../assets/imgs/a6.jpg",
      picture: "../../assets/imgs/p6.jpg",
      modalName: "Nuff Said N.",
      modalComment: "How come this kind of stuff only happens to me?!",
      modalAvatar: "../../assets/imgs/ma6.jpg"
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
modalName:
modalComment:
modalAvatar:
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
