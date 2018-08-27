import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SpinnerProvider } from '../../providers/spinner/spinner';

@IonicPage()
@Component({
  selector: 'page-recommended',
  templateUrl: 'recommended.html',
})
export class RecommendedPage {

  constructor(private spinner:SpinnerProvider) { }

  ionViewDidLoad() {
    setTimeout(() => {
      if(this.spinner.spinner) this.spinner.dismissSpinner();
    }, 50);
  }

}
