import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SpinnerProvider } from '../../providers/spinner/spinner';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  actionWithHeader:any = {
    data: null,
    events: null
  }

  constructor(private spinner:SpinnerProvider) {

      this.actionWithHeader.data = {
        actionSheet: {
          buttons: [
            { role: "destructive", text: "Read more" },
            { text: "Add to Favorites" },
            { text: "Delete Card" },
            { text: "Disable Card" },
            { role: "cancel", text: "Cancel" }
          ],
          title: "Choose what to do with this card?"
        },
        headerTitle: "Home",
        items: [
          {
            "button":"$35.99",
            "category":"best offer",
            "id":1,
            "image":"assets/images/background/2.jpg",
            "subtitle":"West Avenue, NYC",
            "title":"Free Ride Tour"
          },
          {
            "button":"$12.99",
            "category":"main event",
            "id":2,
            "image":"assets/images/background/1.jpg",
            "subtitle":"Hyde Park, London",
            "title":"Open Air Concert"
          },
          {
            "button":"$13.45",
            "category":"Best Tourt",
            "id":3,
            "image":"assets/images/background/0.jpg",
            "subtitle":"Guilin, Kweilin",
            "title":"Sea ture"
          },
          {
            "button":"$38.60",
            "category":"Mountain",
            "id":4,
            "image":"assets/images/background/3.jpg",
            "subtitle":"SMountain Trout Camp",
            "title":"Mountain Trout"
          },
          {
            "button":"$40.85",
            "category":"Bridge Tour",
            "id":5,
            "image":"assets/images/background/4.jpg",
            "subtitle":"BridgeClimb, Sydney",
            "title":"Bridge Tour"
          },
          {
            "button":"$56.55",
            "category":"best events",
            "id":6,
            "image":"assets/images/background/5.jpg",
            "subtitle":"Hyde Park, London ",
            "title":"Main Stage Event"
          }
        ],
        shareIcon: "more"
      }
      this.actionWithHeader.events = {
        onItemClick: (item:any) => console.log("onItemClick"),
        onItemClickActionSheet: (item:any) => console.log("onItemClickActionSheet")
      }
    }

  ionViewDidLoad() {
    setTimeout(() => {
      if(this.spinner.spinner) this.spinner.dismissSpinner();
    }, 50);
  }

}
