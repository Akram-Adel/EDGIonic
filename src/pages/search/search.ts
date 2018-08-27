import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SpinnerProvider } from '../../providers/spinner/spinner';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchFieldHeader:any = {
    data: null,
    events: null
  }



  constructor(private spinner:SpinnerProvider) {

    this.searchFieldHeader.data = {
      headerImage: 'assets/images/background/1.jpg',
      headerTitle: 'Search Courses',
      items: [
        {
          "avatar" : "assets/images/avatar/1.jpg",
          "button" : "GET",
          "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "title" : "Grant Marshall"
        },
        {
          "avatar" : "assets/images/avatar/2.jpg",
          "button" : "GET",
          "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "title" : "Pena Valdez"
        },
        {
          "avatar" : "assets/images/avatar/3.jpg",
          "button" : "GET",
          "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "title" : "Jessica Miles"
        },
        {
          "avatar" : "assets/images/avatar/4.jpg",
          "button" : "GET",
          "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "title" : "Kerri Barber"
        },
        {
          "avatar" : "assets/images/avatar/5.jpg",
          "button" : "GET",
          "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "title" : "Natasha Gamble"
        },
        {
          "avatar" : "assets/images/avatar/6.jpg",
          "button" : "GET",
          "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "title" : "White Castaneda"
        },
        {
          "avatar" : "assets/images/avatar/7.jpg",
          "button" : "GET",
          "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "title" : "Vanessa Ryan"
        },
        {
          "avatar" : "assets/images/avatar/8.jpg",
          "button" : "GET",
          "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "title" : "Meredith Hendricks"
        },
        {
          "avatar" : "assets/images/avatar/9.jpg",
          "button" : "GET",
          "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "title" : "Carol Kelly"
        },
      ],
      title: 'Just type'
    }
    this.searchFieldHeader.events = {
      onTextChange: (text:any) => console.log('onTextChange'),
      onItemClick: (item:any) => console.log('onItemClick')
    }
  }

  ionViewDidLoad() {
    setTimeout(() => {
      if(this.spinner.spinner) this.spinner.dismissSpinner();
    }, 50);
  }

}
