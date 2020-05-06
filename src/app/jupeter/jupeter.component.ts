import { Component, OnInit, Input } from '@angular/core';
// import { COURSES } from '../../environments/db-data'
import { course } from '../model/course'
import { HeroesService } from '../heroes.service';



@Component({
  selector: 'app-jupeter',
  templateUrl: './jupeter.component.html',
  styleUrls: ['./jupeter.component.css']
})
export class JupeterComponent implements OnInit {
  // name = "";

  heroes;

  @Input()
  course:course;

  constructor(hero: HeroesService) 
  {
    this.heroes = hero.Hero;
  }

  ngOnInit(): void {
  }

  onCourseViewed(){
    console.log("hello world")
  }
}
