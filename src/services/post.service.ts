import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Stocks } from 'src/app/model/stocks';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = "https://jsonplaceholder.typicode.com/posts";
  stockId;
  constructor(private http : HttpClient) { }

  getData(): Observable<Stocks[]> {
    return this.http.get<Stocks[]>(this.url)
  }

  createPost(stock: Stocks): Observable<Stocks> {
    return this.http.post<any>(this.url, {name: stock})
  }
  

  // createPatch(item){
  //   return this.http.patch(this.url + "/" + item.id, JSON.stringify({isRead:true}))
  // }

  createDelete(item){
    return this.http.delete(this.url+"/"+item.id)
  }
  
}
