import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserVideoComponent } from './user-video';

@NgModule({
  declarations: [
    UserVideoComponent,
  ],
  imports: [
    IonicPageModule.forChild(UserVideoComponent),
  ],
  exports: [
    UserVideoComponent
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class UserVideoModule { }
