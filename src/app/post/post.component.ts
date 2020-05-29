import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';


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
    this.service.createGet()
    .subscribe(res => {
      this.posts  = res;
    })
  }

  createPost(input){
    console.log(input.value)
    let title = {title: input.value}
    input.value= ""
    this.posts.splice(0,0, title);
    this.service.createPost(title)
    .subscribe((res:{id}) => {
      title['id'] = res.id
    })
  }

  // onUpdate(item){
  //   this.service.createPatch(item)
  //     .subscribe(res => {
  //       console.log(res); 
  //     })
  // }

  onDelete(item){
    if(confirm("Are you sure??")){
    this.service.createDelete(item)
      .subscribe(res => {
        let index = this.posts.indexOf(item)
        this.posts.splice(index, 1)
      })
    }
  }

  

}
