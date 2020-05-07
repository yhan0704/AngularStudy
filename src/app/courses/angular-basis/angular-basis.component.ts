import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-angular-basis',
  templateUrl: './angular-basis.component.html',
  styleUrls: ['./angular-basis.component.css']
})
export class AngularBasisComponent implements OnInit {
  @Input() isSelected:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
