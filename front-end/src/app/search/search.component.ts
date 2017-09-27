import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Report } from '../report';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchForm: FormGroup;
  reports;
  
	constructor(fb: FormBuilder, private _dataService: DataService) {

		this.searchForm = fb.group({
      'reportName': ['test']
    });
	}

  onSubmit(value: Object): void {
    let reportName = this.searchForm.get('reportName').value;

    this._dataService.searchReports('name='+reportName).subscribe(res => this.reports = res);
  }
  

}



