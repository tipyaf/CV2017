import {Component, OnInit, Input} from '@angular/core';
import {SocialsIconComponent} from "../socials-icon/socials-icon.component";
import {Animations} from "../app.animations";
import {AppDataService} from "../data.service";
import {DataModel} from "../data.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: { '[@routeAnimation]': '' },
  animations: Animations.page,
  providers:[AppDataService]

})
export class HeaderComponent implements OnInit {
  public wait: boolean = false;
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
    setTimeout(
      () => this.wait = true, 500
      );
    this.loadData();
  }

}
