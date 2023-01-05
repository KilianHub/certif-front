import { Component } from '@angular/core';
import { faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-user',
  templateUrl: './icon-user.component.html',
  styleUrls: ['./icon-user.component.scss']
})
export class IconUserComponent {
  public myIcon: IconDefinition;

  constructor() {
    this.myIcon = faUser;
  }
}
