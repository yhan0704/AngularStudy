import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-angular-basis',
  templateUrl: './angular-basis.component.html',
  styleUrls: ['./angular-basis.component.css']
})
export class AngularBasisComponent implements OnInit {
  @Input() isSelected:boolean = false;
  @Output() greeting = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  outPutProp(){
    console.log("hi...output!");
    this.greeting.emit();
    console.log(this.greeting);
    
  }

}
