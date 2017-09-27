import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { SearchComponent } from './search/search.component';
import { OverviewComponent } from './overview/overview.component';

import { RouterModule }   from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: '',
        redirectTo: '/overview',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
