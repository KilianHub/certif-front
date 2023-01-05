import { Component } from '@angular/core';
import { faPaperPlane, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-send',
  templateUrl: './icon-send.component.html',
  styleUrls: ['./icon-send.component.scss']
})
export class IconSendComponent {
  public myIcon: IconDefinition;

  constructor() {
    this.myIcon = faPaperPlane;
  }
}
