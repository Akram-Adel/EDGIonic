import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class SpinnerProvider {

  constructor(private loadingCtrl: LoadingController) { }



  public spinner:any;

  public presentSpinnder() {
    this.spinner = this.loadingCtrl.create({
      duration: 1000
    });
    this.spinner.present();
  }

  public dismissSpinner() {
    this.spinner.dismiss();
  }

}
