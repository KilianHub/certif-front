import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui/ui.component';
import { PageLoginComponent } from './page-login/page-login/page-login.component';



@NgModule({
  declarations: [
    UiComponent,
    PageLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiComponent,
    PageLoginComponent
  ]
})
export class UiModule { }
