import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-angular-basis',
  templateUrl: './angular-basis.component.html',
  styleUrls: ['./angular-basis.component.css']
})
export class AngularBasisComponent implements OnInit {
  @Input() isSelected:boolean = false;
  @Output() greeting = new EventEmitter();

  students: Array<string> = ["Superman", "Batman", "Ironman"]
  courses: Array<string> = ["Angular", "React", "JavaScript"]
  coursePage: string;

  constructor() { }

  ngOnInit(): void {
  }

  outPutProp(){
    console.log("hi...output!");
    this.greeting.emit();
    console.log(this.greeting);
    
  }
  
  onClick(course){
    console.log(course);
    this.coursePage = course
  }

}
