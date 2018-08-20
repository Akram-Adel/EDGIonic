import { Component } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { OpenVidu, Session, StreamManager, Publisher, Subscriber, StreamEvent } from 'openvidu-browser';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  OPENVIDU_SERVER_URL = 'https://webrtc.jv-tech.com:4443';
  OPENVIDU_SERVER_SECRET = 'horse_camel_alentejo123';

  OV:OpenVidu;
  session:Session;
  publisher:StreamManager;
  subscribers:StreamManager[] = [];

  myUserName:string = '';
  mySessionId:string = '';

  mainStreamManager:StreamManager;



  constructor(
    public navCtrl: NavController,
    private httpClient:HttpClient) { console.log('contacts page') }

  ionViewDidLeave() { this.leaveSession(); }



  joinSession() {
    // 1) Get an OpenVidu object
    this.OV = new OpenVidu();

    // 2) Init a session
    this.session = this.OV.initSession();

    // 3) Specify the actions when events take place in the session
    this.session.on('streamCreated', (event:StreamEvent) => {
      let subscriber:Subscriber = this.session.subscribe(event.stream, undefined);
      this.subscribers.push(subscriber);
    })
    this.session.on('streamDestroyed', (event:StreamEvent) => {
      this.deleteSubscriber(event.stream.streamManager);
    })

    // 4) Connect to the session with a valid user token
    this.getToken().then(token => {
      this.session.connect(token, { clientData : this.myUserName })
      .then(() => {
        // 5) Get your own camera stream
        let publisher:Publisher = this.OV.initPublisher(undefined, {
          audioSource: undefined,
          videoSource: undefined,
          publishAudio: true,
          publishVideo: true,
          resolution: '640x480',
          frameRate: 30,
          insertMode: 'APPEND',
          mirror: false
        });

        // 6) Publish your stream
        this.session.publish(publisher);
        this.mainStreamManager = publisher;
        this.publisher = publisher;
      })
      .catch(error => {
        console.log('There was an error connecting to the session:', error.code, error.message);
      });
    })
  }

  leaveSession() {
    // 7) Leave the session by calling 'disconnect' method over the Session object
    if (this.session) { this.session.disconnect(); };

    // Empty all properties...
    this.subscribers = [];
    delete this.publisher;
    delete this.session;
    delete this.OV;
  }

  private deleteSubscriber(streamManager:StreamManager):void {
    let index = this.subscribers.indexOf(streamManager, 0);
    if(index > -1) this.subscribers.splice(index, 1);
  }

  getNicknameTag(streamManager) { // Gets the nickName of the user
    return JSON.parse(streamManager.stream.connection.data).clientData;
  }



  /**
   * --------------------------
   * SERVER-SIDE RESPONSIBILITY
   * --------------------------
   * This method retrieve the mandatory user token from OpenVidu Server,
   * in this case making use Angular http API.
   * This behaviour MUST BE IN YOUR SERVER-SIDE IN PRODUCTION. In this case:
   *   1) Initialize a session in OpenVidu Server	 (POST /api/sessions)
   *   2) Generate a token in OpenVidu Server		   (POST /api/tokens)
   *   3) The token must be consumed in Session.connect() method of OpenVidu Browser
   */
  getToken():Promise<string> {
    return this.createSession(this.mySessionId).then(sessionId => {
      return this.createToken(sessionId);
    })
  }

  createSession(sessionId) {
    return new Promise((resolve, reject) => {
      const body = JSON.stringify({ customSessionId : sessionId });
      const options = {
        headers: new HttpHeaders({
          'Authorization': 'Basic ' + btoa('OPENVIDUAPP:' + this.OPENVIDU_SERVER_SECRET),
          'Content-Type': 'application/json'
        })
      };

      return this.httpClient.post(this.OPENVIDU_SERVER_URL + '/api/sessions', body, options)
      .pipe(
        catchError(error => {
          if(error.status === 409) {
            resolve(sessionId);
          } else {
            console.warn('No connection to OpenVidu Server. This may be a certificate error at ' + this.OPENVIDU_SERVER_URL);
          }
          return Observable.throw(error);
        })
      )
      .subscribe(response => {
        resolve(response['id']);
      });
    })
  }

  createToken(sessionId):Promise<string> {
    return new Promise((resolve, reject) => {
      const body = JSON.stringify({ session : sessionId });
      const options = {
        headers: new HttpHeaders({
          'Authorization': 'Basic ' + btoa('OPENVIDUAPP:' + this.OPENVIDU_SERVER_SECRET),
          'Content-Type': 'application/json'
        })
      };

      return this.httpClient.post(this.OPENVIDU_SERVER_URL + '/api/tokens', body, options)
      .pipe(
        catchError(error => {
          reject(error);
          return Observable.throw(error);
        })
      )
      .subscribe(response => {
        resolve(response['token']);
      })
    })
  }

}
