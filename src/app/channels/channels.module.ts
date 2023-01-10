import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { PageEditChannelComponent } from './pages/page-edit-channel/page-edit-channel.component';
import { PageAddChannelComponent } from './pages/page-add-channel/page-add-channel.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageEditChannelComponent,
    PageAddChannelComponent
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule,
    SharedModule,
  ],
  exports: [
    PageEditChannelComponent,
    PageAddChannelComponent
  ]
})
export class ChannelsModule { }
