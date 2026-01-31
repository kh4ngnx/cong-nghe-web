import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { DetailPage } from './pages/detail-page/detail-page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePage,
  },
  {
    path: 'detail/:id',
    component: DetailPage,
    canActivate: [],
    children: [],
  },
];
