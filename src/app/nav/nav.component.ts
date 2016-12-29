import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {DataModel} from "../data.model";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers:[DataService]

})
export class NavComponent implements OnInit {
  public data: DataModel[] = [];
  constructor(private _data: DataService) {}

  loadData(){
    this._data.getData()
      .subscribe(data => {
          this.data = data;
        })
  }
  ngOnInit() {
    this.loadData()
  }

}
