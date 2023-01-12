import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from 'src/app/core/models/message';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-page-list-messages',
  templateUrl: './page-list-messages.component.html',
  styleUrls: ['./page-list-messages.component.scss']
})
export class PageListMessagesComponent {
  public messages$!: Observable<Message[]>;
  public message: Message;
  public form: FormGroup;
  public channelId: number = 8;


  constructor(
    private formBuilder: FormBuilder,
    private service: MessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute){

    this.activatedRoute.params.subscribe((params) => {
      this.channelId = params['id'];
      this.messages$ = this.service.getByChannel(this.channelId);
      console.log(this.messages$);
    })

    this.message = new Message();
    this.form = this.formBuilder.group({
      channelId: [this.message.channelId],
      id: [this.message.id],
      content: [this.message.content],
    })
  }

  public onSubmit(){
    if(this.message.content != ""){
      this.service.add(this.form.value).subscribe(()=> {
        this.router.navigate([`/channels/${this.channelId}`]);
        console.log("Message sent");
      });
    }
  }


  public deleteMessage(id: number){
    this.service.delete(id).subscribe();
    console.log("Message removed!");
  }
}
