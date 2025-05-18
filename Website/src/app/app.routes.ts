import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
      },
      { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
      { path: '**', redirectTo: 'auth/login' }
];
