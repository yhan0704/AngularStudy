import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title: string = "angular for Superman"
  constructor() { }

  ngOnInit(): void {
  }

  onClickEvent($event)
  {
    console.log("hello world");
    console.log($event);
  }
  onKeyUp(){
    console.log("key up entered")
  }

}
