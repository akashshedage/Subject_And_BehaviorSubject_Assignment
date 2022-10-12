import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { devAPIUrl } from 'src/environments/environment';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  // username = new Subject<any>();
  username = new BehaviorSubject("Codemind Technology");
  brandname= new Subject<any>();
  modelcolor= new Subject<any>();
  modelprice= new Subject<any>();
  modelname= new Subject<any>();
  
  // url: string = 'https://jsonplaceholder.typicode.com/users';
  product = [
    {name:'Laptop', id: '101'},
    {name:'Mobile', id: '102'},
    {name:'TV', id: '103'}
  ]
  httpClinet: any;
 
 
  
  constructor(private httpClient: HttpClient) { }
  hello() {
    alert('I am from DemoService');
  }
  hi(){
    alert('Welcome to Student Registration');
  }

  // getUsers(): Observable<any>{
  //  return this.httpClient.get(this.url);
  // }
  
  getUsers(): Observable<any> {
    return this.httpClient.get(`${devAPIUrl}users`);
   }
   getPosts(): Observable<any> {
     return this.httpClient.get(`${devAPIUrl}posts`);
   }
   createPost(post): Observable<any> {
    let endPoints = "posts";
    return this.httpClient.post<any>(`${devAPIUrl+ endPoints}`, JSON.stringify(post));
  }

 
  
 
}
