import { Component } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  report: Object; //todo: create Report model?

  constructor(private _dataService: DataService) {

    this._dataService.getReport("59c93760ce5cfd6dfa0f3999")
      .subscribe(res => this.report = res);

  }

}
