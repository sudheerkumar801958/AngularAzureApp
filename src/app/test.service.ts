import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }
  isAuthenticate: boolean = false;

  add(a:number,b:number){
    return a+b
  }

  getData(){
 return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }
  login(email: string, password: string): Observable<boolean> {
    if (email == 'admin@gmail.com' && password == 'admin') {
      this.isAuthenticate = true;
      return of(true);
    }
    return of(false);
  }
}
