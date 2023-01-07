import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './login/pages/sign-in/sign-in.component';
import { SignUpComponent } from './login/pages/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {
    path: 'channels',
    loadChildren: () =>
      import('./channels/channels.module').then((m) => m.ChannelsModule),
  },
  {
    path: 'messages',
    loadChildren: () =>
      import('./messages/messages.module').then((m) => m.MessagesModule),
  },
  { path: 'sign-up', component: SignUpComponent},
  { path: 'sign-in', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private r: Router) {
    console.log(r.config);
  }
}
