import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SpinnerProvider } from '../../providers/spinner/spinner';

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  loginLogo2:any = {
    data: null,
    events: null,
  }



  constructor(private spinner:SpinnerProvider) {

      this.loginLogo2.data = {
        labelUsername : "OLD PASSWORD",
        username : "Enter your old password",
        changePassword: true,
        errorUser: "Please provide your old password",
        labelPassword : "NEW PASSWORD",
        password : "Enter your new password",
        errorPassword: "Please provide a new password",
        logo : "assets/images/logo/2.png",
        login : "Change Password",
        skip : "Skip",
        forgotPassword: "Forgot password?",
        subtitle : "Welcome",
        title : "Change password",
      }
      this.loginLogo2.events = {
        onLogin: (params) => console.log('onLogin') ,
        onForgot: () => console.log('onForgot') ,
        onRegister: (params) => console.log('onRegister'),
        onSkip: (params) => console.log('onSkip') ,
        onFacebook: (params) => console.log('onFacebook') ,
        onTwitter: (params) => console.log('onTwitter') ,
        onGoogle: (params) => console.log('onGoogle') ,
        onPinterest: (params) => console.log('onPinterest')
      };
    }

    ionViewDidLoad() {
      setTimeout(() => {
        if(this.spinner.spinner) this.spinner.dismissSpinner();
      }, 50);
    }

}
