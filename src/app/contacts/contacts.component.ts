import {Component, OnInit, Input} from '@angular/core';
import {Animations} from "../app.animations";
import {DataService} from "../data.service";

import {DataModel} from "../data.model";



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  host: { '[@routeAnimation]': '' },
  animations: Animations.page,
  providers:[DataService]
})
export class ContactsComponent implements OnInit {
  data: DataModel[] = [];
  onEnvelope: boolean = false;

  constructor(
    private _data: DataService,
  ) {}


  getDataPage(page: number){
    this._data.getDataPage(page)
      .subscribe(data =>{
          this.data = data;
          console.log(data, 'get about data')
        }

      );
  }

  getData(){
    this._data.getData()
      .subscribe(data => {
        this.data = data;
        console.log(this.data, 'data ');
      });

  }
  ngOnInit() {

    setTimeout(
      () => this.onEnvelope = true, 500
    );

    this.getDataPage(5);
    this.getData();
  };

}
