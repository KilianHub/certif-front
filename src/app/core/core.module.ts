import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { UiModule } from '../ui/ui.module';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';
import { GabaritsModule } from '../gabarits/gabarits.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    UiModule,
    IconsModule,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    GabaritsModule,
  ]
})
export class CoreModule { }
