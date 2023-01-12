import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Channel } from 'src/app/core/models/channel';
import { ChannelService } from 'src/app/core/services/channel.service';

@Component({
  selector: 'app-page-edit-channel',
  templateUrl: './page-edit-channel.component.html',
  styleUrls: ['./page-edit-channel.component.scss']
})
export class PageEditChannelComponent {
  public form!: FormGroup;
  public id: number;
  public item$: Observable<Channel>;

  constructor(private formBuilder: FormBuilder, private service: ChannelService, private activatedRoute: ActivatedRoute, private router: Router){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.item$ = this.service.getItemById(this.id).pipe(
      tap((channel) => {
      this.form = this.formBuilder.group({
        id: [channel.id],
        name: [channel.name],
        description: [channel.description],
        });
      })
    );
  }

  public onSubmit(){
    this.service.update(this.form.value).subscribe(() => {
      this.router.navigate(['/channels']);
    });
  }
}
