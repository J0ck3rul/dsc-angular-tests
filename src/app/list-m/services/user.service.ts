import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../pages/first-page/first-page.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient,) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.URL);
  }
}
