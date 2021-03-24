import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { IUser } from '../list-m/pages/first-page/first-page.component';
import { HttpClient } from '@angular/common/http';

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
