import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';

import { UserVideoModule } from '../../components/user-video/user-video.module';

@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
    UserVideoModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactPageModule {}
