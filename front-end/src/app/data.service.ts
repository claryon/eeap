import { Injectable } from '@angular/core';

import { Report } from './report';

import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  getReports()  {
    return this._http.get("/api/reports")
      .toPromise()
      .then(response => response.json().reverse().data as Report[])
      .catch(this.handleError);
  }

  getReport(reportId) {
    return this._http.get("/api/report/"+reportId)
      .toPromise()
      .then(response => response.json().data as Report)
      .catch(this.handleError);
  }

  searchReports(query) {
    return this._http.get("/api/reports/search?"+query)
      .toPromise()
      .then(response => response.json().data as Report[])
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
