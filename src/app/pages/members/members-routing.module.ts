import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MembersComponent } from "./members.component";
import { MemberListComponent } from "./member-list/member-list.component";

const routes: Routes = [
  {
    path: "",
    component: MembersComponent,
    children: [
      {
        path: "member-list",
        component: MemberListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersRoutingModule { }

export const routedComponents = [
  MembersComponent,
  MemberListComponent,
];
