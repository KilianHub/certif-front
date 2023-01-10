import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListMessagesComponent } from './pages/page-list-messages/page-list-messages.component';

const routes: Routes = [
  { path: '', component: PageListMessagesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
