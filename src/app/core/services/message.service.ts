import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/environment/environment';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private urlApi: string;
  public collection$: Observable<Message[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = Environment.urlApi;
    this.collection$ = this.httpClient.get<Message[]>(`${this.urlApi}/channels`);
  }

  public add(message: Message, chanId: number): Observable<Message>{
    return this.httpClient.post<Message>(`${this.urlApi}/channels/${chanId}`, message);
  }

  public getByChannel(id: number): Observable<Message[]>{
    return this.httpClient.get<Message[]>(`${this.urlApi}/channels/${id}/messages`);
  }

  public delete(id: number): Observable<Message>{
    return this.httpClient.delete<Message>(`${this.urlApi}/messages/delete/${id}`);
  }
}
