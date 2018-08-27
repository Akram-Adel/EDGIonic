import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { StreamManager } from 'openvidu-browser';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'user-video',
  templateUrl: 'user-video.html'
})
export class UserVideoComponent {

  @ViewChild('videoElement') elementRef:ElementRef;

  _streamManager:StreamManager;

  @Input()
  set streamManager(streamManager:StreamManager) {
    this._streamManager = streamManager;
    if (!!this.elementRef) {
      this._streamManager.addVideoElement(this.elementRef.nativeElement);
    }
  }

  constructor() { }

}
