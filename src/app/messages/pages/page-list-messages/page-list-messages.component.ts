import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Message } from 'src/app/core/models/message';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-page-list-messages',
  templateUrl: './page-list-messages.component.html',
  styleUrls: ['./page-list-messages.component.scss']
})
export class PageListMessagesComponent {
  public messages$: BehaviorSubject<Message[]>;
  public message: Message;
  public form: FormGroup;
  public channelId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private service: MessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute){

    this.messages$ = this.service.collection$;
    console.log(this.messages$);

    this.message = new Message();
    this.form = this.formBuilder.group({
      channelId: [this.message.channelId],
      id: [this.message.id],
      content: [this.message.content],
    })
  }

  public onSubmit(){
    this.service.add(this.form.value).subscribe(()=> {
      this.router.navigate(['/']);
    });
  }


  public deleteMessage(id: number){
    this.service.delete(id).subscribe();
    console.log("Message removed!");
  }
}
