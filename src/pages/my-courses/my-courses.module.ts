import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCoursesPage } from './my-courses';

import { ExpandableLayout1Module } from '../../components/list-view/expandable/layout-1/expandable-layout-1.module';

@NgModule({
  declarations: [
    MyCoursesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCoursesPage),
    ExpandableLayout1Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyCoursesPageModule {}
