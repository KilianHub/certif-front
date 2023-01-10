import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from 'src/app/core/models/message';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-page-list-messages',
  templateUrl: './page-list-messages.component.html',
  styleUrls: ['./page-list-messages.component.scss']
})
export class PageListMessagesComponent {
  public collection$: Observable<Message[]>;
  public message: Message;
  public form: FormGroup;
  public id: number;

  constructor(
    private formBuilder: FormBuilder,
    private service: MessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute){

    this.id = this.activatedRoute.snapshot.params['id'];
    this.collection$ = this.service.getByChannel(this.id);
    console.log(this.collection$);

    this.message = new Message();
    this.form = this.formBuilder.group({
      id: [this.message.id],
      content: [this.message.content],
    })
  }

  public onSubmit(){
    this.service.add(this.form.value, this.id).subscribe(()=> {
      this.router.navigate(['/']);
    });
  }


  public deleteMessage(id: number){
    this.service.delete(id).subscribe();
    console.log("Message removed!");
  }
}
