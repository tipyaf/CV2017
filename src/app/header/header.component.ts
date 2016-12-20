import { Component, OnInit } from '@angular/core';
import {SocialsIconComponent} from "../socials-icon/socials-icon.component";
import {Animations} from "../app.animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: { '[@routeAnimation]': '' },
  animations: Animations.page

})
export class HeaderComponent implements OnInit {
  public wait: boolean = false;
  constructor() { }

  ngOnInit() {
    setTimeout(
      () => this.wait = true, 500
      )
  }

}
