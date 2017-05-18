import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'select2',
    pathMatch: 'full'
  },
  {
    path: 'select2',
    redirectTo: 'select2'
  }
];
export const routing = RouterModule.forRoot(routes);