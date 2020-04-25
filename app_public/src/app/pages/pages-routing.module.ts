import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'accounting',
      loadChildren: () => import('./accounting/accounting.module')
        .then(m => m.AccountingModule),
    },
    {
      path: 'campaigns',
      loadChildren: () => import('./campaigns/campaigns.module')
        .then(m => m.CampaignsModule),
    },
    {
      path: 'members',
      loadChildren: () => import('./members/members.module')
        .then(m => m.MembersModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
