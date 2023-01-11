import { Component } from '@angular/core';

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
    this.showPopup = !this.showPopup;
  }


}
