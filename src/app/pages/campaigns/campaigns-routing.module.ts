import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CampaignComponent } from "./campaigns.component";
import { CampaignListComponent } from "./campaign-list/campaign-list.component";
import { CampaignAddingComponent } from "./campaign-adding/campaign-adding.component";

const routes: Routes = [
  {
    path: "",
    component: CampaignComponent,
    children: [
      {
        path: "campaign-list",
        component: CampaignListComponent,
      },
      {
        path: "campaign-adding",
        component: CampaignAddingComponent,
      }, // TODO. adding another tab for campaings is considerable.
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignsRoutingModule {}

export const routedComponents = [
  CampaignComponent,
  CampaignListComponent,
  CampaignAddingComponent,
];
