import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { PageAddMessageComponent } from './pages/page-add-message/page-add-message.component';
import { PageListMessagesComponent } from './pages/page-list-messages/page-list-messages.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageAddMessageComponent,
    PageListMessagesComponent,
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    SharedModule,
  ],
  exports: [
    PageAddMessageComponent,
    PageListMessagesComponent,
  ]
})
export class MessagesModule { }
