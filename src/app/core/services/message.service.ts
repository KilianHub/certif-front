import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Environment } from 'src/environment/environment';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private urlApi: string;
  public collection$: BehaviorSubject<Message[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = Environment.urlApi;
    this.collection$ = new BehaviorSubject<Message[]>([]);
    this.refreshCollection();
  }

  public refreshCollection(){
    this.httpClient.get<Message[]>(`${this.urlApi}/channels`).subscribe((data) => {
      this.collection$.next(data);
    });
  }

  public add(message: Message): Observable<Message>{
    return this.httpClient
      .post<Message>(`${this.urlApi}/channels/`, message)
      .pipe(tap(() => this.refreshCollection()));
  }

  public getByChannel(id: number): Observable<Message[]>{
    return this.httpClient.get<Message[]>(`${this.urlApi}/channels/${id}/messages`);
  }

  public delete(id: number): Observable<Message>{
    return this.httpClient
      .delete<Message>(`${this.urlApi}/messages/delete/${id}`)
      .pipe(tap(() => this.refreshCollection()));
  }
}
