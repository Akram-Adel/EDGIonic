import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpinnerProvider } from '../../providers/spinner/spinner';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerLogo:any = {
    data: null,
    events: null
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public spinner: SpinnerProvider) {

      this.registerLogo.data = {
        city : "Your home town",
        country : "Where are you from?",
        email : "Your e-mail address",
        lableCity : "CITY",
        lableCountry : "COUNTRY",
        lableEmail : "E-MAIL",
        lablePassword : "PASSWORD",
        lableUsername : "USERNAME",
        logo : "assets/images/logo/2.png",
        password : "Enter your password",
        register : "register",
        skip : "Skip",
        title : "Register your new account",
        toolbarTitle : "Register + logo",
        username : "Enter your username"
      }
      this.registerLogo.events = {
        onRegister: (params) => console.log('onRegister'),
        onSkip: (params) => console.log('onSkip')
      }
    }

  ionViewDidLoad() {
    setTimeout(() => {
      if(this.spinner.spinner) this.spinner.dismissSpinner();
    }, 50);
  }

}
