import { Component, OnInit,Pipe } from '@angular/core';

// Import the DataService
import { DataService } from '../data.service';
import { Report } from '../report';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
  })
  
  @Pipe({
  name: 'reverse',
  pure: false
  })

export class ReversePipe {
	transform (values) {
		if(values){
			return values.reverse();
		}
	}

}
export class OverviewComponent implements OnInit {


	// the reports variable that can be used in templates
	reports: Report[];

	// Create an instance of the DataService through dependency injection
	constructor(private _dataService: DataService) {

		// Access the Data Service's getReports() method we defined
			this._dataService.getReports()
			.then(res => this.reports = res);
	}

	ngOnInit() {
	}

}

