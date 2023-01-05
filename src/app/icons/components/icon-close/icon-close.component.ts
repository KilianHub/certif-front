import { Component } from '@angular/core';
import { faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-close',
  templateUrl: './icon-close.component.html',
  styleUrls: ['./icon-close.component.scss']
})
export class IconCloseComponent {
  public myIcon: IconDefinition;

  constructor() {
    this.myIcon = faXmark;
  }
}
