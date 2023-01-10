import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Environment } from 'src/environment/environment';
import { Channel } from '../models/channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  private urlApi: string;
  public collection$: BehaviorSubject<Channel[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = Environment.urlApi;
    this.collection$ = new BehaviorSubject<Channel[]>([]);
    this.refreshCollection();
  }

  public refreshCollection(){
    this.httpClient.get<Channel[]>(`${this.urlApi}/channels`).subscribe((data) => {
      this.collection$.next(data);
    });
  }

  public add(channel: Channel): Observable<Channel>{
    return this.httpClient.post<Channel>(`${this.urlApi}/channels`, channel);
  }

  public update(channel: Channel): Observable<Channel>{
    return this.httpClient.put<Channel>(`${this.urlApi}/channels/edit/${channel.id}`, channel);
  }

  public getItemById(id: number): Observable<Channel>{
    return this.httpClient.get<Channel>(`${this.urlApi}/channels/${id}`);
  }

  public delete(id: number): Observable<Channel>{
    return this.httpClient.delete<Channel>(`${this.urlApi}/channels/delete/${id}`);
  }
}
