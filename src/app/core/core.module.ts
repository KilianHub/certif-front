import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { UiModule } from '../ui/ui.module';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';
import { GabaritsModule } from '../gabarits/gabarits.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    UiModule,
    IconsModule,
    HeaderComponent,
    NavComponent,
    GabaritsModule,
  ]
})
export class CoreModule { }
