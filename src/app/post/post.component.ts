import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { Stocks } from '../model/stocks';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any = []

  constructor(private service:PostService) { 

  }
  
  ngOnInit(){
    this.service.getData()
    .subscribe(res => {
      this.posts  = res;
    })
  }

  createPost(input){
    let name = {name: input.value}
    this.posts.splice(0,0, name);
    this.service.createPost(input.value)
      .subscribe(res => {
        this.posts.id = res.id
    })
    input.value= ""
  }

  // onUpdate(item){
  //   this.service.createPatch(item)
  //     .subscribe(res => {
  //       console.log(res); 
  //     })
  // }

  onDelete(id:number){
    if(confirm("Are you sure??")){
    this.service.createDelete(id)
      .subscribe(() => {
        let index = this.posts.indexOf(id)
        this.posts.splice(index, 1)
      })
    }
  }

  

}
