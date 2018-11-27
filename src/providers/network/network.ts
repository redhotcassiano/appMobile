import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';

declare let navigator: any;
declare let connection: any;

@Injectable()
export class NetworkProvider {

  constructor(private platform: Platform) {

  }

  get IsOnline() : boolean {
    if(this.platform.is('cordova')){
      if(navigator.connect && navigator.connect.type){
        return (navigator.connect.type != connection.UNKKONW && navigator.connect.type != connection.NONE)
      }else{
        return true
      }
    }else{
      return navigator.onLine
    }
  }

}
