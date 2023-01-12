import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Channel } from 'src/app/core/models/channel';
import { ChannelService } from 'src/app/core/services/channel.service';

@Component({
  selector: 'app-page-add-channel',
  templateUrl: './page-add-channel.component.html',
  styleUrls: ['./page-add-channel.component.scss']
})
export class PageAddChannelComponent {
  public channel: Channel;
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ChannelService, private router: Router){
    this.channel = new Channel();

    this.form = this.formBuilder.group({
      id: [this.channel.id],
      name: [this.channel.name],
      description: [this.channel.description],
    })
  }

  public onSubmit(){
    this.service.add(this.form.value).subscribe(()=> {
      this.router.navigate(['/channels']);
      console.log("Channel created");
    });
  }
}
