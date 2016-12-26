import { Component, OnInit } from '@angular/core';
import {AppDataService} from "../data.service";
import {DataModel} from "../data.model";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers:[AppDataService]

})
export class NavComponent implements OnInit {
  public data: DataModel[] = [];
  constructor(private _data: AppDataService) {}

  loadData(){
    this._data.getData()
      .subscribe(data => {
          this.data = data;
          console.log(data, 'data header ok')
        },
        error => {
          console.warn(error, 'header data error');
        });
  }
  ngOnInit() {
    this.loadData()
  }

}
