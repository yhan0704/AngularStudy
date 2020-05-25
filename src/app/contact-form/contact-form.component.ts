import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  log(x){
    console.log(x)
  }

  submit(x){
    console.log(x.value.firstName, x.value.id)
  }

  ngOnInit(): void {
  }

}
