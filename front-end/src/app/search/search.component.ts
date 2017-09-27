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
  reports: Report[];
  
	constructor(fb: FormBuilder, private _dataService: DataService) {

		this.searchForm = fb.group({
      'reportSubmissionDate': [''],
      'reportId': [''],
      'reportIssuerName': ['']
    });
	}

  onSubmit(value: Object): void {
    let reportSubmissionDate = this.searchForm.get('reportSubmissionDate').value;
    let reportId = this.searchForm.get('reportId').value;
    let reportIssuerName = this.searchForm.get('reportIssuerName').value;

    this._dataService.searchReports('submissionDate='+reportSubmissionDate+'&reportId='+reportId+'&reportIssuerName='+reportIssuerName).subscribe(res => this.reports = res);
  }
  

}



