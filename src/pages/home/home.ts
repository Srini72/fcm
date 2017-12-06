import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

declare var FCMPlugin;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  token: string;
  constructor(public navCtrl: NavController, private platform:Platform) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('android') || this.platform.is('ios')) {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //         StatusBar.styleDefault();

        FCMPlugin.getToken(
           (token) => {
            console.log(token);
            this.token = token;
          },
          function (err) {
            console.log('error retrieving token: ' + err);
          }
        );
        // Notifications is supposed to be received on device tray
        FCMPlugin.onNotification(
          function(data){
            if(data.wasTapped){
             // Notification is tapped by the user on device tray
              alert(JSON.stringify(data));
            }else{
             // Notification is received in foreground
              alert(JSON.stringify(data));
            }
          },
          function(msg){
            console.log('onNotification callback successfully registered: ' + msg);
          },
          function(err){
            console.log('Error registering onNotification callback: ' + err);
          }
        );
      }
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PushPage');
  }
}
