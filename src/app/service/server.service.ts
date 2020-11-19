import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }
  login(payload): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', payload);
  }

  test() {
    return this.http.get('/app/test');
  }
}
