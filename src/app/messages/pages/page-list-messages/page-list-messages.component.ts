import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from 'src/app/core/models/message';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-page-list-messages',
  templateUrl: './page-list-messages.component.html',
  styleUrls: ['./page-list-messages.component.scss']
})
export class PageListMessagesComponent {
  public collection$: Observable<Message[]>;

  constructor(private service: MessageService, private router: Router){
    this.collection$ = this.service.collection$;
    console.log(this.collection$);
  }
}
