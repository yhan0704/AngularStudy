import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http : HttpClient) { }

  createPost(title){
    return this.http.post(this.url, JSON.stringify(title))
  }

  createGet(){
    return this.http.get(this.url)
  }

  createPatch(item){
    return this.http.patch(this.url + "/" + item.id, JSON.stringify({isRead:true}))
  }

  onDelete(item){
    return this.http.delete(this.url+"/"+item.id)
  }
  
}
