import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { GabaritsModule } from '../gabarits/gabarits.module';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    GabaritsModule,
    IconsModule,
    BtnComponent,
  ]
})
export class SharedModule { }
