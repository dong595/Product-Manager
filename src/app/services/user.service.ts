import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  API: string = `http://localhost:3000/users`;
  constructor(private http: HttpClient) {}
  addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:3000/users/register`, user);
  }
  signIn(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:3000/login`, user);
  }
}
