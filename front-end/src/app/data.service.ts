import { Injectable } from '@angular/core';

import { Report } from './report';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  getReports()  {
    return this._http.get("/api/reports")
      .map(result => this.result = <Report[]> result.json().data);
  }

  getReport(reportId) {
    return this._http.get("/api/report/"+reportId)
      .map(result => this.result = <Report> result.json().data);
  }

  searchReports(query) {
    return this._http.get("/api/reports/search?"+query)
      .map(result => this.result = <Report[]> result.json().data);
  }

}
