import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/environment/environment';
import { Channel } from '../models/channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  private urlApi: string;
  public collection$: Observable<Channel[]>;

  constructor(private httpClient: HttpClient) {
    this.urlApi = Environment.urlApi;
    this.collection$ = this.httpClient.get<Channel[]>(`${this.urlApi}/channels`);
  }

  public add(channel: Channel): Observable<Channel>{
    return this.httpClient.post<Channel>(`${this.urlApi}/channels`, channel);
  }

  public update(channel: Channel): Observable<Channel>{
    return this.httpClient.put<Channel>(`${this.urlApi}/channels/${channel.id}`, channel);
  }
}
