import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SpinnerProvider } from '../../providers/spinner/spinner';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(private spinner:SpinnerProvider) { }

  ionViewDidLoad() {
    setTimeout(() => {
      if(this.spinner.spinner) this.spinner.dismissSpinner();
    }, 50);
  }

}
