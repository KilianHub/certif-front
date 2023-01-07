import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconUserComponent } from './components/icon-user/icon-user.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconSendComponent } from './components/icon-send/icon-send.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconBurgerComponent } from './components/icon-burger/icon-burger.component';



@NgModule({
  declarations: [
    IconCloseComponent,
    IconDeleteComponent,
    IconUserComponent,
    IconEditComponent,
    IconSendComponent,
    IconBurgerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    IconCloseComponent,
    IconDeleteComponent,
    IconUserComponent,
    IconEditComponent,
    IconSendComponent,
    IconBurgerComponent
  ]
})
export class IconsModule { }
