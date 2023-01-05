import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddChannelComponent } from './pages/page-add-channel/page-add-channel.component';
import { PageDeleteChannelComponent } from './pages/page-delete-channel/page-delete-channel.component';
import { PageEditChannelComponent } from './pages/page-edit-channel/page-edit-channel.component';
import { PageListChannelsComponent } from './pages/page-list-channels/page-list-channels.component';

const routes: Routes = [
  { path: '', component: PageListChannelsComponent },
  { path: 'add', component: PageAddChannelComponent },
  { path: 'edit', component: PageEditChannelComponent },
  { path: 'delete', component: PageDeleteChannelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelsRoutingModule { }
