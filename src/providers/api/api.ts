import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  constructor() { }


  public url:string = 'https://54.249.223.154';
  public request_id:number = Math.floor(Math.random()*11);

}
