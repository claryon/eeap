import { Component,Pipe } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })

  @Pipe({
  name: 'reverse'
  })

  export class ReversePipe {
  
  transform (values) {
  if(values){
		return values.reverse();
		}
	}
  }
export class AppComponent {
  
  constructor() {}


}




