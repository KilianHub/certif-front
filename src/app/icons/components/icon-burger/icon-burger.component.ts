import { Component } from '@angular/core';
import { faBars, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-burger',
  templateUrl: './icon-burger.component.html',
  styleUrls: ['./icon-burger.component.scss']
})
export class IconBurgerComponent {
  public myIcon: IconDefinition;

  constructor() {
    this.myIcon = faBars;
  }
}
