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
];
