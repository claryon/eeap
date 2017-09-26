import { Component } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  report: Object; //todo: create Report model?

  constructor() {

  
  }

}
