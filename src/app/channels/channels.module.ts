import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { PageListChannelsComponent } from './pages/page-list-channels/page-list-channels.component';
import { PageEditChannelComponent } from './pages/page-edit-channel/page-edit-channel.component';
import { PageDeleteChannelComponent } from './pages/page-delete-channel/page-delete-channel.component';
import { PageAddChannelComponent } from './pages/page-add-channel/page-add-channel.component';


@NgModule({
  declarations: [
    PageListChannelsComponent,
    PageEditChannelComponent,
    PageDeleteChannelComponent,
    PageAddChannelComponent
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule
  ],
  exports: [
    PageListChannelsComponent,
    PageEditChannelComponent,
    PageDeleteChannelComponent,
    PageAddChannelComponent
  ]
})
export class ChannelsModule { }
