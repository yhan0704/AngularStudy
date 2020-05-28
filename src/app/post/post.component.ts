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

  createPost(input){
    let title = {title: input.value}
    input.value= ""
    this.posts.splice(0,0, title);
    this.service.createPost(input)
    .subscribe((res:{id}) => {
      title['id'] = res.id
    })
  }

  onUpdate(item){
    this.service.createPatch(item)
      .subscribe(res => {
        console.log(res); 
      })
  }

  onDelete(item){
    let index = this.posts.indexOf(item)
    this.posts.splice(index, 1)
    this.service.onDelete(item)
      .subscribe(res => {

      })
  }

  ngOnInit(){
    this.service.createGet()
    .subscribe(res => {
      this.posts  = res;
    })
  }

}
