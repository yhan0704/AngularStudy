import { Component, OnInit, Input } from '@angular/core';
// import { COURSES } from '../../environments/db-data'
import { course } from '../model/course'


@Component({
  selector: 'app-jupeter',
  templateUrl: './jupeter.component.html',
  styleUrls: ['./jupeter.component.css']
})
export class JupeterComponent implements OnInit {
  greeting = "hello";

  @Input()
  course:course;

  constructor() { }

  ngOnInit(): void {
  }

}
