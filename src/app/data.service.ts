import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {DataModel} from "./data.model";

@Injectable()
export class AppDataService{
  private dataUrl = 'assets/json/app.data.json';
  constructor(private http: Http){}

    getData(): Observable<DataModel[]>{
      return this.http.get(this.dataUrl)
        .map(response => {
          console.log(response, 'json Data service');
          return response.json()
        })
        .catch(error =>{
          console.warn(error, 'json Data service error');
          return Observable.throw(error.json())
        })

    }
}
