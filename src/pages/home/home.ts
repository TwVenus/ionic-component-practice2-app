import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabbed: number = 0;
  pressed: number = 0;

  constructor(public navCtrl: NavController) {

  }

  onDidReset(resetType : string){
    switch(resetType){
      case 'tab':
        this.tabbed = 0;
        break;
      case 'press':
        this.pressed = 0;
      default:
        this.tabbed = 0;
        this.pressed = 0;
    }
  }

  onDidEvent(eventType : string){
    if(eventType == 'tab'){
      this.tabbed++;
    }else if(eventType == 'press'){
      this.pressed++;
    }
  }

  didWin(): boolean | Promise<boolean>{
    return this.tabbed == 2 && this.pressed == 4;
  }
}
