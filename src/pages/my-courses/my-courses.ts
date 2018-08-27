import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SpinnerProvider } from '../../providers/spinner/spinner';

@IonicPage()
@Component({
  selector: 'page-my-courses',
  templateUrl: 'my-courses.html',
})
export class MyCoursesPage {

  listExpandableBigImage:any = {
    data: null,
    events: null
  }



  constructor(private spinner:SpinnerProvider) {

    this.listExpandableBigImage.data = {
      header: 'Friends',
      items: [
        {
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          expandItems: [
            {
              description: "NYC",
              details: "3 miles",
              id: 1,
              image: "assets/images/avatar/10.jpg",
              title: "Jessica Miles"
            },
            {
              description: "Rehrersburg",
              details: "3.1 miles",
              id: 2,
              image: "assets/images/avatar/11.jpg",
              title: "Pena Valdez"
            },
            {
              description: "Brogan",
              details: "3.2 miles",
              id: 3,
              image: "assets/images/avatar/12.jpg",
              title: "Jessica Miles"
            },
            {
              description: "Callaghan",
              details: "2.5 miles",
              id: 4,
              image: "assets/images/avatar/13.jpg",
              title: "Meredith Hendricks"
            }
          ],
          i: 1,
          image: 'assets/images/avatar/15.jpg',
          titl: 'Harriette Velandia'
        },
        {
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          expandItems: [
            {
              description: "Blackgum",
              details: "2.1 miles",
              id: 1,
              image: "assets/images/avatar/14.jpg",
              title: "Carol Kelly"
            },
            {
              description: "Williston",
              details: "2.6 miles",
              id: 2,
              image: "assets/images/avatar/15.jpg",
              title: "Barrera Ramsey"
            },
            {
              description: "Norvelt",
              details: "2.8 miles",
              id: 3,
              image: "assets/images/avatar/14.jpg",
              title: "Julia Petersen"
            },
            {
              description: "Keller",
              details: "3.0 miles",
              id: 4,
              image: "assets/images/avatar/13.jpg",
              title: "Holman Valencia"
            }
          ],
          id: 2,
          image: "assets/images/avatar/2.jpg",
          title: "Margie Kasten"
        },
        {
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          expandItems: [
            {
              description: "Maxville",
              details: "1.0 miles",
              id: 1,
              image: "assets/images/avatar/11.jpg",
              title: "Marisa Cain"
            },
            {
              description: "Bannock",
              details: "1.1 miles",
              id: 2,
              image: "assets/images/avatar/12.jpg",
              title: "Dejesus Norris"
            },
            {
              description: "Singer",
              details: "2.0 miles",
              id: 3,
              image: "assets/images/avatar/13.jpg",
              title: "Lara Lynn"
            },
            {
              description: "Nutrioso",
              details: "3.0 miles",
              id: 4,
              image: "assets/images/avatar/14.jpg",
              title: "Burns Marks"
            }
          ],
          id: 3,
          image: "assets/images/avatar/3.jpg",
          title: "Faythe Pitts"
        },
        {
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          expandItems: [
            {
              description: "Bluetown",
              details: "1.1 miles",
              id: 1,
              image: "assets/images/avatar/0.jpg",
              title: "Byrd Hewitt"
            },
            {
              description: "Fairhaven",
              details: "3.2 miles",
              id: 2,
              image: "assets/images/avatar/1.jpg",
              title: "Guerrero Woodard"
            },
            {
              description: "Caledonia",
              details: "2.3 miles",
              id: 3,
              image: "assets/images/avatar/2.jpg",
              title: "Solis Mullen"
            },
            {
              description: "Strykersville",
              details: "1.4 miles",
              id: 4,
              image: "assets/images/avatar/3.jpg",
              title: "Guy Mccoy"
            }
          ],
          id: 4,
          image: "assets/images/avatar/4.jpg",
          title: "Doloritas Parent"
        },
        {
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          expandItems: [
            {
              description: "Caspar",
              details: "2.0 miles",
              id: 1,
              image: "assets/images/avatar/14.jpg",
              title: "Cline Lindsay"
            },
            {
              description: "Blue",
              details: "1.0 miles",
              id: 2,
              image: "assets/images/avatar/15.jpg",
              title: "Juliette Medina"
            },
            {
              description: "Vincent",
              details: "4.0 miles",
              id: 3,
              image: "assets/images/avatar/6.jpg",
              title: "Mildred Clark"
            },
            {
              description: "Hollins",
              details: "5.0 miles",
              id: 4,
              image: "assets/images/avatar/7.jpg",
              title: "Valdez Bruce"
            }
          ],
          id: 5,
          image: "assets/images/avatar/5.jpg",
          title: "Opal Shaham"
        },
        {
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
          expandItems: [
            {
              description: "Evergreen",
              details: "2.0 miles",
              id: 1,
              image: "assets/images/avatar/14.jpg",
              title: "Wilkerson Hardin"
            },
            {
              description: "Greenwich",
              details: "2.1 miles",
              id: 2,
              image: "assets/images/avatar/15.jpg",
              title: "Daisy Mcintyre"
            },
            {
              description: "Summerset",
              details: "2.9 miles",
              id: 3,
              image: "assets/images/avatar/6.jpg",
              title: "Savage Mayer"
            },
            {
              description: "Marne",
              details: "3.0 miles",
              id: 4,
              image: "assets/images/avatar/7.jpg",
              title: "Mann Cox"
            }
          ],
          id: 6,
          image: "assets/images/avatar/18.jpg",
          title: "Pandora Hart"
        }
      ]
    }
    this.listExpandableBigImage.events = {
      onItemClick: (item:any) => console.log('onItemClick')
    }
  }

  ionViewDidLoad() {
    setTimeout(() => {
      if(this.spinner.spinner) this.spinner.dismissSpinner();
    }, 50);
  }

}
