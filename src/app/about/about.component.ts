import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Page, Content} from "../data.model";
import {Animations} from "../app.animations";
import { ScrollimateService } from "ng2-scrollimate";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {'[@routeAnimation]': ''},
  animations: Animations.page,
  providers: [DataService, ScrollimateService],

})
export class AboutComponent implements OnInit {
  public dataPage: Page[] = [];
  public content: Content[] = [];
  public anim: boolean = false;
  scrollimateOptions: any = {
    defaultStates: [
      { //PRIORITY 4
        method: "default", //this will always be true
        state: "false",
      }
    ],
    percentElement: {
      states: [
        {
          method: "percentElement",
          value: 100,
          state: "true",
        },
        {
          method: "default",
          state: "false"
        }
      ]
    },
    focusAbout: {
      states: [
        {
          method: "percentElement",
          value: 10,
          state: "true",
        },
        {
          method: "default",
          state: "false"
        }
      ]
    },
    focusSkills: {
      states: [
        {
          method: "percentElement",
          value: 40,
          state: "true",

        },
        {
          method: "default",
          state: "false"
        }
      ]
    },
    focusExp: {
      states: [
        {
          method: "percentElement",
          value: 40,
          state: "true",
        },
        {
          method: "default",
          state: "false"
        }
      ]
    },
  };

  constructor(
    private _data: DataService,
    private scrollimateService: ScrollimateService
  ) {
    scrollimateService.setDefaultStates(this.scrollimateOptions.defaultStates);
  }

  getDataPage(page: number){
    this._data.getDataPage(page)
      .subscribe(data =>{
          this.dataPage = data;
        console.log(data, 'get about data')
      });
  }
  percentElement(event:any){
    this.scrollimateOptions.percentElement.currentValue=event.currentValue || this.scrollimateOptions.percentElement.currentValue;
  }
  focusAbout(event:any){
    this.scrollimateOptions.focusAbout.currentValue=event.currentValue || this.scrollimateOptions.focusAbout.currentValue;
  }
  focusSkills(event:any){
    this.scrollimateOptions.focusSkills.currentValue=event.currentValue || this.scrollimateOptions.focusSkills.currentValue;
  }
  focusExp(event:any){
    this.scrollimateOptions.focusExp.currentValue=event.currentValue || this.scrollimateOptions.focusExp.currentValue;
  }
  ngOnInit() {
    setTimeout(
      () => this.anim = true, 500
    );
    this.getDataPage(1);
  }

}
