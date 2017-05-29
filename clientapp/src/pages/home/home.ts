import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { socketProvider } from '../../providers/socket-provider';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  

  constructor(public navCtrl: NavController, private socket : socketProvider) {
    
    this.socket.on('news',(news)=>{
      console.log(news);
    });
  }

}
