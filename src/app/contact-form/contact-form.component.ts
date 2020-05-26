import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  contactMethods = [
    {id:1, name:"Email"},
    {id:2, name:"Tel"},
    {id:3, name:"Visit"},
    {id:4, name:"Telephacy"}
  ]

  log(x){
    console.log(x)
  }

  submit(x){
    console.log(x)
  }

  ngOnInit(): void {
  }

}
