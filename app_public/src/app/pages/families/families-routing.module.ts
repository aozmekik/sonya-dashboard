import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FamiliesComponent } from './families.component';
import { FamilyListComponent } from './family-list/family-list.component';
import { FamilyAddingComponent } from './family-adding/family-adding.component';

const routes: Routes = [
  {
    path: "",
    component: FamiliesComponent,
    children: [
      {
        path: "family-list",
        component: FamilyListComponent,
      },
      {
        path: "family-adding",
        component: FamilyAddingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamiliesRoutingModule {}

export const routedComponents = [
  FamiliesComponent,
  FamilyListComponent,
  FamilyAddingComponent,
];
