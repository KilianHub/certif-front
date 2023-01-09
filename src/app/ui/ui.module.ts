import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui/ui.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UiComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    UiComponent,
  ]
})
export class UiModule { }
