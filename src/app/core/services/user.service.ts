import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/environment/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlApi: string;
  public collection$: Observable<User[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = Environment.urlApi;
    this.collection$ = this.httpClient.get<User[]>(`${this.urlApi}/users`);
  }

  public add(user: User): Observable<User>{
    return this.httpClient.post<User>(`${this.urlApi}/users`, user);
  }

}
