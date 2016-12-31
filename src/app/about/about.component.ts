import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {DataModel, Page, Content} from "../data.model";
import {Animations} from "../app.animations";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: { '[@routeAnimation]': '' },
  animations: Animations.page,
  providers: [DataService],

})
export class AboutComponent implements OnInit {
  public dataPage: Page[] = [];
  public content: Content[] = [];
  public anim: boolean = false;
  constructor(
    private _data: DataService,
  ) {}

  getDataPage(page: number){
    this._data.getDataPage(page)
      .subscribe(data =>{
          this.dataPage = data;
        console.log(data, 'get about data')
      });
  }

  ngOnInit() {
    setTimeout(
      () => this.anim = true, 500
    );
    this.getDataPage(1);
  }

}
