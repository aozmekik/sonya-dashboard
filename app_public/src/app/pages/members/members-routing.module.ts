import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MembersComponent } from "./members.component";
import { MemberListComponent } from "./member-list/member-list.component";
import { MemberAddingComponent } from "./member-adding/member-adding.component";

const routes: Routes = [
  {
    path: "",
    component: MembersComponent,
    children: [
      {
        path: "member-list",
        component: MemberListComponent,
      },
      {
        path: "member-adding",
        component: MemberAddingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersRoutingModule {}

export const routedComponents = [
  MembersComponent,
  MemberListComponent,
  MemberAddingComponent,
];
