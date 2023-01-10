import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { GabaritsModule } from '../gabarits/gabarits.module';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



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
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
