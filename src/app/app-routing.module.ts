import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/sign-up', pathMatch: 'full' },
  {
    path: 'channels',
    loadChildren: () =>
      import('./channels/channels.module').then((m) => m.ChannelsModule),
  },
  {
    path: 'channels/:id',
    loadChildren: () =>
      import('./messages/messages.module').then((m) => m.MessagesModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
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
