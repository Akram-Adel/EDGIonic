import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SpinnerProvider } from '../../providers/spinner/spinner';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabsFooter:any = {
    data: null,
    events: null
  }

  cachedPages:any = ['HomePage']



  constructor(private spinner:SpinnerProvider) {
    this.tabsFooter.data = [
      { page: 'HomePage',        icon: 'ios-home' },
      { page: 'MyCoursesPage',   icon: 'ios-book' },
      { page: 'SearchPage',      icon: 'ios-search' },
      { page: 'RecommendedPage', icon: 'ios-thumbs-up' },
      { page: 'MyAccountPage',   icon: 'ios-person' },
    ];
    this.tabsFooter.events = {
      onItemClick: (item:any) => {
        if( !this.cachedPages.includes(item.page) ) {
          this.cachedPages.push(item.page);
          this.spinner.presentSpinnder();
        }
      }
    }
  }
}
