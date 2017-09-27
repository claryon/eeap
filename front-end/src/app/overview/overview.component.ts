import { Component, OnInit } from '@angular/core';

// Import the DataService
import { DataService } from '../data.service';
import { Report } from '../report';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {


	// the reports variable that can be used in templates
	reports: Report[];

	// Create an instance of the DataService through dependency injection
	constructor(private _dataService: DataService) {

		// Access the Data Service's getReports() method we defined
			this._dataService.getReports()
			.subscribe(res => this.reports = res);
	}

	ngOnInit() {
	}

}

