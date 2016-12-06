import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { InAppBrowser } from 'ionic-native';

import {Deploy} from '@ionic/cloud-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public deploy: Deploy) {
    
  }

  

}
