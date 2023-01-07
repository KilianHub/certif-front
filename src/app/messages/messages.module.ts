import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { PageAddMessageComponent } from './pages/page-add-message/page-add-message.component';
import { PageListMessagesComponent } from './pages/page-list-messages/page-list-messages.component';
import { PageDeleteMessageComponent } from './pages/page-delete-message/page-delete-message.component';


@NgModule({
  declarations: [
    PageAddMessageComponent,
    PageListMessagesComponent,
    PageDeleteMessageComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule
  ],
  exports: [
    PageAddMessageComponent,
    PageListMessagesComponent,
    PageDeleteMessageComponent
  ]
})
export class MessagesModule { }
