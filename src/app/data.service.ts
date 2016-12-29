import {Injectable, OnInit} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {DataModel} from "./data.model";

@Injectable()
export class DataService {
  private dataUrl = 'assets/json/app.data.json';
  data: DataModel[] = [];
  constructor(private http: Http){}

    getData(): Observable<DataModel[]>{
      return this.http.get(this.dataUrl)
        .map(response => {
          console.log(response.json(), 'json Data service');
          return response.json()
        })
        .catch(error =>{
          console.warn(error, 'json Data service error');
          return Observable.throw(error.json())
        })

    }
    getDataPage(page: number): Observable<DataModel[]>{
      return this.http.get(this.dataUrl)
        .map(response => {
          console.log(response.json().pages[page], 'json DataPage service');
          return response.json().pages[page]
        })
        .catch(error =>{
          console.warn(error, 'json DataPage service error');
          return Observable.throw(error.json().pages[page])
        })

  }



}
// data.pages.indexOf(page)   pour mette nom de page en parametre de la fonction getdatapage()
