import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'members',
        loadChildren: () =>
          import('./members/members.module').then((m) => m.MembersModule),
      },
      {
        path: 'families',
        loadChildren: () =>
          import('./families/families.module').then((m) => m.FamiliesModule),

      },
      // {
      //   path: 'login',
      //   component: LoginComponent
      // },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
