import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  public name = '';
  public myId = 'testId';
  public forButtonInput = '';
  public showInput = '';
  public isdisable = true;
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

  buttonEvent(event){
    console.log(this.forButtonInput);
    this.showInput = this.forButtonInput;
  }

  onKeyUp(e){
    console.log(e.value);
    this.forButtonInput = e.value;
    console.log(this.forButtonInput);
  }

  ngOnInit(): void {
  }

}
