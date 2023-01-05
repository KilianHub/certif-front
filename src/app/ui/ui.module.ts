import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui/ui.component';



@NgModule({
  declarations: [
    UiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
