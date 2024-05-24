import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  url = "https://jsonplaceholder.typicode.com";
 
  getAllUsers(): Observable<Users[]> {
      return this.http.get<Users[]>(this.url+'/posts');
  }

  getUsersById(id: number): Observable<Users[]> {
    return this.http.get<Users[]>(this.url + '/posts/' + id);
  }

  createUser(User: Users): Observable<Users> {
    return this.http.post<Users>(this.url+ '/posts' , User);
  }

  editUser(User: Users): Observable<Users> {
    return this.http.put<Users>(this.url+ '/posts/'+ User.id , User);
  }

  deleteUser(id: number): Observable<Users> {
    return this.http.delete<Users>(this.url+ '/posts/'+ id);
  }

}
