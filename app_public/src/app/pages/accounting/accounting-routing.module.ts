import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AccountingComponent } from "./accounting.component";
import { ActivityListComponent } from "./activity-list/activity-list.component";
import { ActivityAddingComponent } from "./activity-adding/activity-adding.component";
import { AccountTypesComponent } from "./account-types/account-types.component";

const routes: Routes = [
  {
    path: "",
    component: AccountingComponent,
    children: [
      {
        path: "activity-list",
        component: ActivityListComponent,
      },
      {
        path: "activity-adding",
        component: ActivityAddingComponent,
      },
      {
        path: "account-types",
        component: AccountTypesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountingRoutingModule {}

export const routedComponents = [
  AccountingComponent,
  ActivityListComponent,
  ActivityAddingComponent,
  AccountTypesComponent,
];
