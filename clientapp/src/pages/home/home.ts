import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as io from 'socket.io-client';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  socket:any = null;

  constructor(public navCtrl: NavController) {
    this.socket = io('http://localhost:1337');
    //this.socket.emit('entry-event', {content:'it works !'});
    this.socket.on('news',(news)=>{
      console.log(news);
    });
  }

}
