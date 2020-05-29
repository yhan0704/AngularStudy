import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = "https://jsonplaceholder.typicode.com/posts";
  
  constructor(private http : HttpClient) { }

  createGet(): Observable<any[]> {
    return this.http.get<any>(this.url)
  }

  createPost(title){
    return this.http.post(this.url, JSON.stringify(title))
  }

  // createPatch(item){
  //   return this.http.patch(this.url + "/" + item.id, JSON.stringify({isRead:true}))
  // }

  createDelete(item){
    return this.http.delete(this.url+"/"+item.id)
  }
  
}
