import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {DataModel} from "../data.model";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [DataService]
})
export class AboutComponent implements OnInit {
  data: DataModel[] = [];
  // data: any = {};
  constructor(
    private _data: DataService,
    // private _data: PagesDataService
  ) {}

  getDataPage(page: number){
    this._data.getDataPage(page)
      .subscribe(data =>{
          this.data = data;
        console.log(data, 'get about data')
      }

      );

  }
  ngOnInit() {
    this.getDataPage(1);
  }

}
