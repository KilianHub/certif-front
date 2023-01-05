import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { GabaritsModule } from '../gabarits/gabarits.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    GabaritsModule,
    IconsModule,
  ]
})
export class SharedModule { }
