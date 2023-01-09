import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Channel } from '../../models/channel';
import { ChannelService } from '../../services/channel.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public collection$: Observable<Channel[]>;

  constructor(private service: ChannelService, private router: Router){
    this.collection$ = this.service.collection$;
  }

  public goToEdit(id: number){
    this.router.navigate(['channel', 'edit', id]);
  }

  // public deleteOrder(id: number){
  //   this.service.delete(id).subscribe();
  // }
}
