import {Component, OnInit, Input} from '@angular/core';
import {Animations} from "../app.animations";
import {AppDataService} from "../data.service";
import {DataModel, Page} from "../data.model";
// import {PagesData} from "../pages.data";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  host: { '[@routeAnimation]': '' },
  animations: Animations.page,
  providers:[AppDataService]
})
export class ContactsComponent implements OnInit {
  // @Input('dbData') data: DataModel;
  // @Input('dbPage') dataPage: PagesData;
  data: DataModel[] = [];
  // dataPage: PagesData[] = [];
  onEnvelope: boolean = false;

  constructor(
    private _data: AppDataService,
    // private _dataPages: PagesData
  ) {}


  getDataPage(page: number){
    this._data.getData()
      .subscribe(data => {
          this.data = data.pages[page];
          console.log(this.data, 'data ' + page );

        },
        error => {
          console.warn(error, 'page service data error');
        });

  }
  ngOnInit() {

    setTimeout(
      () => this.onEnvelope = true, 500
    );

    this.getDataPage(5);
      console.log(this.data, 'retour???')


  };

}
