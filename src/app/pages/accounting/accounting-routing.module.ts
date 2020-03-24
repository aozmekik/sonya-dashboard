import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountingComponent } from './accounting.component';
import {ActivitiesComponent} from './activities/activities.component';

const routes: Routes = [{
  path: '',
  component: AccountingComponent,
  children: [{
    path: 'activities',
    component: ActivitiesComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountingRoutingModule { }

export const routedComponents = [
  AccountingComponent,
  ActivitiesComponent,
];
