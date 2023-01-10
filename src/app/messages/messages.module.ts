import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { PageListMessagesComponent } from './pages/page-list-messages/page-list-messages.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListMessagesComponent,
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    SharedModule,
  ],
  exports: [
    PageListMessagesComponent,
  ]
})
export class MessagesModule { }
