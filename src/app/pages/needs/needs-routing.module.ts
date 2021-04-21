import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NeedsComponent } from './needs.component';
import { NeedListComponent } from './need-list/need-list.component';
import { NeedAddingComponent } from './need-adding/need-adding.component';
import { NeedRequestListComponent } from './need-request-list/need-request-list.component';


const routes: Routes = [
  {
    path: "",
    component: NeedsComponent,
    children: [
      {
        path: "need-list",
        component: NeedListComponent,
      },
      {
        path: "need-adding",
        component: NeedAddingComponent,
      },
      {
        path: "need-request-list",
        component: NeedRequestListComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeedsRoutingModule {}

export const routedComponents = [
  NeedsComponent,
  NeedListComponent,
  NeedAddingComponent,
  NeedRequestListComponent,
];
