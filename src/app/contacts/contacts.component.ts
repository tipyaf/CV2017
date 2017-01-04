import {Component, OnInit, Input} from '@angular/core';
import {Animations} from "../app.animations";
import {DataService} from "../data.service";

import {DataModel, Page} from "../data.model";



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  host: { '[@routeAnimation]': '' },
  animations: Animations.page,
  providers:[DataService]
})
export class ContactsComponent implements OnInit {
  public data = [];
  public dataPage = [];
  public onEnvelope: boolean = false;

  constructor(
    private _data: DataService,
  ) {
    _data.getData().subscribe(data => this.data = data);
   _data.getDataPage(4).subscribe(data => this.dataPage = data);
  }
  
  ngOnInit() {

    setTimeout(
      () => this.onEnvelope = true, 500
    );

  };

}
