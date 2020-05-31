import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  public name = 'Young Chan';
  public myId = 'testId';
  public isdisable = false;
  public isSpecial = true;
  public successClass = 'text-success';
  public hasError = false;
  public messageClass = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  };

  onClick(event){
    console.log(event);
  }

  ngOnInit(): void {
  }

}
