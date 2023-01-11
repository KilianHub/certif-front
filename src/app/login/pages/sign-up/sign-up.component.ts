import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public user: User;
  public form: FormGroup;
  urlImg: any = "/assets/images/SQUADRA.png";

  constructor(private formBuilder: FormBuilder, private service: UserService, private router: Router){
    this.user = new User();

    this.form = this.formBuilder.group({
      id: [this.user.id],
      username: [this.user.username],
      email: [this.user.email],
      password: [this.user.password],
    })
  }

  public onSubmit(){
    this.service.add(this.form.value);
    this.router.navigate(['/channels/8']);
    console.log("User added!")
  }
}
