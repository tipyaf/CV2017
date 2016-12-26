import { Component } from '@angular/core';
import {Animations} from "./app.animations";
// import './rxjs-operators';
// import {AppDataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: Animations.page,
  providers: [AppComponent]


})
export class AppComponent {
  isMenuOpened: boolean = false;
  // constructor (private appData: AppDataService) {}
  getData
}
