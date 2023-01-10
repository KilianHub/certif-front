import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Channel } from '../../models/channel';
import { ChannelService } from '../../services/channel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public id: number;
  public channel: Observable<Channel>;

  constructor(private service: ChannelService, private activatedRoute: ActivatedRoute){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.channel = this.service.getItemById(this.id);
  }

}
