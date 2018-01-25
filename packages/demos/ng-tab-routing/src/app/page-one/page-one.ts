import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'page-one',
  template: `
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      Login - {{ts}}
      <div>
        <ion-button (click)="pushPageTwoComponent()">Login to app</ion-button>
      </div>
    </ion-content>
  </ion-page>
  `
})
export class PageOne {

  ts: number;
  constructor(/*private navController: NavController*/private router: Router) {
    setInterval(() => {
      this.ts = Date.now();
    }, 500);
  }


  pushPageTwoComponent() {
    // this.navController.push('/page-two');
    this.router.navigateByUrl('/app/tabs');
  }



}
