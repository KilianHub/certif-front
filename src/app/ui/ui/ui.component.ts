import { Component } from '@angular/core';
import { PopupService } from '@ng-bootstrap/ng-bootstrap/util/popup';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent {
  public close: boolean;
  public showPopup: boolean;

  constructor() {
    this.close = false;
    this.showPopup = false;
  }

  public toggle() {
    this.close = !this.close;
  }

  public logout(){
    console.log("clicked");
    this.showPopup = !this.showPopup;
  }


}
