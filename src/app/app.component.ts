import { Component } from '@angular/core';
import {Animations} from "./app.animations";
import {DataService} from "./data.service";
// import './rxjs-operators';
// import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: Animations.page,
  providers: [AppComponent, DataService]


})
export class AppComponent {
  isMenuOpened: boolean = false;
  // constructor (private appData: DataService) {}

}
