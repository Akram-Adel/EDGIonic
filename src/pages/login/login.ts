import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SpinnerProvider } from '../../providers/spinner/spinner';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginLogo2:any = {
    data: null,
    events: null,
  }



  constructor(
    private navCtrl:NavController,
    private spinner:SpinnerProvider,
    private api:ApiProvider,
    private http:HttpClient) {

      this.loginLogo2.data = {
        labelUsername : "USERNAME",
        username : "Enter your username",
        errorUser: "Please enter the user name",
        labelPassword : "PASSWORD",
        password : "Enter your password",
        errorPassword: "Please enter the password",
        logo : "assets/images/logo/2.png",
        login : "Login",
        register : "Register",
        skip : "Skip",
        forgotPassword : "Forgot password?",
        subtitle : "Welcome",
        title : "Login to your account",
      }
      this.loginLogo2.events = {
        onLogin: (params) => this.logIn(params) ,
        onForgot: () => console.log('onForgot') ,
        onRegister: (params) => this.navCtrl.setRoot('RegisterPage'),
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



  logIn(params) {
    this.http.post(this.api.url+'/login', {
      request_id: this.api.request_id,
      username: 'testing2',
      password: 'Password!123'
    })
    .subscribe(res => console.log(res))

    this.http.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
    .subscribe(res => console.log(res))

    console.log(params);
  }

}
