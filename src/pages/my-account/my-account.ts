import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SpinnerProvider } from '../../providers/spinner/spinner';

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {

  myAccountPages:any[] = [
    { name: 'Notifications Preferences', component: 'MyAccountPage',      iconClass: 'icon-bell-ring' },
    { name: 'Audio & Video Options',     component: 'MyAccountPage',      iconClass: 'icon-camcorder' },
    { name: 'Privacy Settings',          component: 'MyAccountPage',      iconClass: 'icon-lock' },
    { name: 'Change Password',           component: 'ChangePasswordPage', iconClass: 'icon-key' },
    { name: 'About EDG',                 component: 'MyAccountPage',      iconClass: 'icon-information' },
    { name: 'FAQ Page',                  component: 'MyAccountPage',      iconClass: 'icon-help-circle' },
    { name: 'Support',                   component: 'MyAccountPage',      iconClass: 'icon-headset' },
    { name: 'Contact Us',                component: 'MyAccountPage',      iconClass: 'icon-phone' },
    { name: 'Terms & Conditions',        component: 'MyAccountPage',      iconClass: 'icon-pencil' },
  ]



  constructor(
    private navCtrl:NavController,
    private spinner:SpinnerProvider) { }

  ionViewDidLoad() {
    setTimeout(() => {
      if(this.spinner.spinner) this.spinner.dismissSpinner();
    }, 50);
  }



  openPage(page) {
    this.spinner.presentSpinnder();
    this.navCtrl.push(page);
  }

}
