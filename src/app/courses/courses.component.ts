import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title: string = "angular for Superman";

  email: string = "Batman@gmail.com";

  isSelected:boolean = true;

  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  
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

  onClick(){
    this.isSelected = !this.isSelected;
  }

}
