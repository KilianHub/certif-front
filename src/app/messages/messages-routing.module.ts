import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddMessageComponent } from './pages/page-add-message/page-add-message.component';
import { PageDeleteMessageComponent } from './pages/page-delete-message/page-delete-message.component';
import { PageListMessagesComponent } from './pages/page-list-messages/page-list-messages.component';

const routes: Routes = [
  { path: '', component: PageListMessagesComponent },
  { path: 'add', component: PageAddMessageComponent },
  { path: 'delete', component: PageDeleteMessageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
