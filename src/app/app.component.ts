import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpinnerProvider } from '../providers/spinner/spinner';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav:NavController;
  rootPage:any = 'TabsPage';

  listPages:any[] = [
    { name: 'Home',            component: 'TabsPage',              iconClass: 'icon-home' },
    { name: 'Login',           component: 'LoginPage',             iconClass: 'icon-lock-open-outline' },
    { name: 'Register',        component: 'RegisterPage',          iconClass: 'icon-key-plus' },
    { name: 'Details',         component: 'CourseTutorDetailPage', iconClass: 'icon-checkbox-marked-circle-outline' },
    { name: 'Contact',         component: 'ContactPage',           iconClass: 'icon-home' }
  ]



  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menu:MenuController,
    private spinner:SpinnerProvider) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }



  openPage(page) {
    this.menu.close();
    this.spinner.presentSpinnder();
    this.nav.setRoot(page);
  }
}
