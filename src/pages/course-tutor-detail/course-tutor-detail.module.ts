import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseTutorDetailPage } from './course-tutor-detail';

import { ParallaxLayout3Module } from '../../components/parallax/layout-3/parallax-layout-3.module';

@NgModule({
  declarations: [
    CourseTutorDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseTutorDetailPage),
    ParallaxLayout3Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CourseTutorDetailPageModule {}
