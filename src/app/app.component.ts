import { Component } from '@angular/core';
import { COURSES } from '../environments/db-data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
  con = COURSES[0];
  cat = COURSES[1];
  

}
