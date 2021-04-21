import { StashChangeRequestListComponent } from './stash-change-request-list/stash-change-request-list.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InventoryComponent } from './inventory.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { StashAddingComponent } from './stash-adding/stash-adding.component';


const routes: Routes = [
  {
    path: "",
    component: InventoryComponent,
    children: [
      {
        path: "inventory-list",
        component: InventoryListComponent,
      },
      {
        path: "stash-adding",
        component: StashAddingComponent,
      },
      {
        path: "stash-change-request-list",
        component: StashChangeRequestListComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}

export const routedComponents = [
  InventoryComponent,
  InventoryListComponent,
  StashAddingComponent,
  StashChangeRequestListComponent,
];
