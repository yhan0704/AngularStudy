import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any = []
  url: string = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http : HttpClient) { 
    http.get(this.url)
    .subscribe(res => {
      this.posts  = res;
    })
  }

  createPost(input){
    let title = {title: input.value}
    input.value= ""
    this.http.post(this.url, JSON.stringify(title))
    .subscribe((res:{id}) => {
      title['id'] = res.id
      this.posts.splice(0,0, title);
    })
    
  }

  ngOnInit(): void {
  }

}
