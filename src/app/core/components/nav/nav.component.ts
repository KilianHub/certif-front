import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Channel } from '../../models/channel';
import { ChannelService } from '../../services/channel.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public collection$: BehaviorSubject<Channel[]>;

  constructor(private service: ChannelService, private router: Router){
    this.collection$ = this.service.collection$;
  }

  public goToEdit(id: number){
    this.router.navigate(['channels', 'edit', id]);
  }

  public deleteChannel(id: number){
    this.service.delete(id).subscribe();
    console.log("Channel removed!")
  }
}
