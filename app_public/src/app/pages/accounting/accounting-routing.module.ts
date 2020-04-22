import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountingComponent } from './accounting.component';
import {ActivitiesComponent} from './activities/activities.component';
import {ActivityAddingComponent} from './activity-adding/activity-adding.component';
import {AccountTypesComponent} from './account-types/account-types.component';

const routes: Routes = [{
  path: '',
  component: AccountingComponent,
  children: [{
    path: 'activities',
    component: ActivitiesComponent,
  }, {
    path: 'activity-adding',
    component: ActivityAddingComponent,
  }, {
    path: 'types',
    component: AccountTypesComponent,
  },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountingRoutingModule { }

export const routedComponents = [
  AccountingComponent,
  ActivitiesComponent,
  ActivityAddingComponent,
  AccountTypesComponent,
];
