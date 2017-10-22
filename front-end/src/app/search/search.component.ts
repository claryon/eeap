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
      'issuerName': [''],
      'issuerLEI': [''],
      'issuerHomeMemberState': ['']
    });
	}

  onSubmit(value: Object): void {
    let issuerName = this.searchForm.get('issuerName').value;
    let issuerLEI = this.searchForm.get('issuerLEI').value;
    let issuerHomeMemberState = this.searchForm.get('issuerHomeMemberState').value;

    this._dataService.searchReports('issuerName='+issuerName+'&issuerLEI='+issuerLEI+'&issuerHomeMemberState='+issuerHomeMemberState).subscribe(res => this.reports = res);
  }
  

}



