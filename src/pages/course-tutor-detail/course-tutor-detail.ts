import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SpinnerProvider } from '../../providers/spinner/spinner';

@IonicPage()
@Component({
  selector: 'page-course-tutor-detail',
  templateUrl: 'course-tutor-detail.html',
})
export class CourseTutorDetailPage {

  parallaxProduct:any = {
    data: null,
    events: null
  }



  constructor(private spinner:SpinnerProvider) {
    this.parallaxProduct.data = {
      headerImage: 'assets/images/background-small/4.jpg',
      headerTitle: 'Product',
      items: [{
        button: '$63.99',
        category: 'NEW OFFER',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        id: 1,
        productDescriptions: [
          {
            description: '"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            id: 1
          },
          {
            description: '"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            id: 2
          },
          {
            description: '"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            id: 3
          },
          {
            description: '"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            id: 4
          }
        ],
        subtitle: 'Available Now',
        title: 'Super & Black',
      }],
      shareIcon: 'more'
    }
    this.parallaxProduct.events = {
      onProceed: (item:any) => console.log('onProceed'),
      onShare: (item:any) => console.log('onShare'),
      onItemClick: (item:any) => console.log('onItemClick')
    }
  }

  ionViewDidLoad() {
    setTimeout(() => {
      if(this.spinner.spinner) this.spinner.dismissSpinner();
    }, 50);
  }

}
