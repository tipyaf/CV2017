import { Component, OnInit } from '@angular/core';
import {Animations} from "../app.animations";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  host: { '[@routeAnimation]': '' },
  animations: Animations.page
})
export class ContactsComponent implements OnInit {
  onEnvelope: boolean = false;
  constructor() { }

  ngOnInit() {
    setTimeout(
      () => this.onEnvelope = true, 500
    )
  }

}
