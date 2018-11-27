import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {

  constructor(public alertCtrl: AlertController, private toastCtrl: ToastController) {

  }

  Toast(title: string, position: string) : void {
    let toast = this.toastCtrl.create({
      message: title,
      position: position,
      duration: 3000
    });

    toast.present();
  }

  Alert(title: string, message: string) : void {
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        'OK'
      ],
      enableBackdropDismiss: false
    })

    alert.present();

  }

  Confirm(title: string, message: string, callback: any) : void {
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Não',
          role: 'Cancel',
          handler: ()=>{
            console.log('Not Action!')
          }
        },
        {
          text: 'Sim',
          handler: ()=>{
            callback()
          }
        }
      ],
      enableBackdropDismiss: false
    })

    alert.present();
  }

}
